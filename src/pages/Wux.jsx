import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Loading from '../components/Loading'

const Wux = () => {
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        AOS.init();
        axios.get('./WUX.json')
            .then(response => {
                setStudents(response.data.students)
                setTimeout(() => setLoading(false), 2000);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const Students = ({students}) => {
        const mappedStudents = students.map((student, index) => {
            return (
              <>
                <div className="wux-student" key={student.name + index} data-aos="fade-up" data-aos-duration="1500">
                    <Link to={`/wux/${student.id}`}>
                        <img class="studentImageWUX" src={student.headshot} alt={student.name} />
                    </Link>
                    <h4>{student.name.toUpperCase()}</h4>
                </div>
              </>
            )
        })

        return (
            <>
                {mappedStudents}
            </>
        )
    }

    if (loading) {
      return <><Loading/></>
  }

    
  return (
    <>
      <div className="mouse-container">
        <div className="mouse"></div>
      </div>
      <div className="page-container" id="cddAllPage">
        <Students students={students}/>
      </div>
    </>
  )
}

export default Wux