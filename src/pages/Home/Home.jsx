import HeroImg from '../../assets/HeroImg.png'
import Hero from '../../components/Hero section/Hero'
import SectionOne from './SectionOne/SectionOne'
import SectionTwo from './SectionTwo/SectionTwo'
import SectionThree from './SectionThree/SectionThree'
import SectionFour from './SectionFour/SectionFour'
import SectionFive from './SectionFive/SectionFive'
const Home = () => {
  return (
    <>
  <Hero
    bg={HeroImg}
   title={'Redefining the Horizon of Modern Luxury Living'}
  desc={`We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest`}
  btn={`Explore`}
  icons={true}
  />
  <SectionOne/>
  <SectionTwo/>
  <SectionThree/>
  <SectionFour/>
  <SectionFive/>
  </>
  )
}

export default Home



