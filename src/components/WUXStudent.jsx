import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Loading from './Loading'

const WUXStudent = () => {
    const [loading, setLoading] = useState(true)
    const [student, setStudent] = useState([])
    const [projects, setProjects] = useState([])
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const {id} = useParams()

    useEffect(() => {
        const index = (id - 1);
        AOS.init();
        axios.get('./WUX.json')
            .then(response => {
                setStudent(response.data.students[index])
                setProjects(response.data.students[index].projects)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])

    const Projects = ({projects}) => {
        const mappedProjects = projects.map((project) => {
            console.log(project);
            return (
                <div className="project-container-wux" data-aos="fade-up" data-aos-duration="1500">
                    <h4 className="project-name">{project.project_name}</h4>
                    <h5 className="project-link">{project.project_link}</h5>
                    <p className="project-blurb">{project.project_description}</p>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <img className="carousel-image" src={project.project_images[0].image_url} alt={project.project_name + ' image 1'} onClick={() => setFullscreenImage(0)}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="carousel-image" src={project.project_images[1].image_url} alt={project.project_name + ' image 2'} onClick={() => setFullscreenImage(1)}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="carousel-image" src={project.project_images[2].image_url} alt={project.project_name + ' image 3'} onClick={() => setFullscreenImage(2)}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="carousel-image" src={project.project_images[3].image_url} alt={project.project_name + ' image 4'} onClick={() => setFullscreenImage(3)}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            )
        })

        return (
            <>
                {mappedProjects}
            </>
        )
    }
    
    if (loading) {
        return <><Loading/></>
    }

  return (
    <>
        {fullscreenImage !== null && (
        <div className="fullscreen">
            <img
          src={projects[0].project_images[fullscreenImage].image_url}
          alt={projects[0].project_name + ' fullscreen image'}
            />
            <button className="fullscreen-close" onClick={() => setFullscreenImage(null)}>Close</button>
        </div>
        )}
        <div className="mouse-container">
            <div className="mouse"></div>
        </div>
        {/* Page Container */}
        <div className="page-container">

            {/* Personal Details Container */}
            <div className="personal-info" data-aos="fade-up" data-aos-duration="1500">

                {/* Image (Headshot) Container */}
                <div className="personal-img-cont">
                    <img className="studentImageWUX" src={student.headshot} alt={student.name + ' headshot'} />
                </div>
                {/* End of Image Container */}

                {/* Personal Details */}
                <div className="personal-details">
                    <h2 className="student-name">{student.name}</h2>
                    <h2 className="wuxClassText">Web/UX - July'23</h2>
                    <h4>Email: {student.email}</h4>

                    {/* Socials */}
                    <div className="social-links">
                        <a href={student.github} target="_blank"><i className="fa-brands fa-github wux-social-icons"></i></a>
                        <a href={student.github} target="_blank"><i className="fa-brands fa-linkedin wux-social-icons"></i></a>
                        <a href={student.github} target="_blank"><i className="fa-solid fa-globe wux-social-icons"></i></a>
                    </div>

                </div>
                {/* End of Personal Details */}
            </div>
            {/* End of personal-info */}

            {/* Projects */}
            <div className="projects" data-aos="fade-up" data-aos-duration="1500">

                <div className="project-title-container">
                    <h2 className="projects-title">Projects</h2>
                </div>

                <Projects projects={projects}/>

            </div>

        </div>
        {/* End of Page Container */}

    </>
    
  )
}

export default WUXStudent
