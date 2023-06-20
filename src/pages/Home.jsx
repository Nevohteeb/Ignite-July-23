import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  AOS.init()
    
  return (
    <div className="home-container">
        <img className="home-logo" src="public/logos/Main_Logo_1.svg" alt="Ignite Logo" data-aos="fade-up" data-aos-duration="1500" />
    </div>
  )
}

export default Home