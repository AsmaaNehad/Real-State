import Title from '../../../components/Title/Title'
import About from '../../../assets/About.png'
import Buttons from '../../../components/Buttons/Buttons'
import arrow from "../../../assets/arrow.svg"


function SectionTwo() {
  return (
    <section className='px-4 md:px-10 lg:px-20'>
    <div>
     <Title title={'About Grand Atlas'} hs={'mt-[180px]'} ds={'mb-[65px]'}/> 
    </div>
    <div className='flex flex-col justify-between gap-4 md:flex md:flex-col  md:gap-6 lg:flex lg:flex-row lg:gap-12  '>
        <img src={About} alt='About img' className='rounded-t-[100px] border-[5px] border-[#8E1616] max-w-168.25 h-166.75 object-cover' />
        <div className='flex flex-col justify-between items-start gap-2 lg:gap-10'>
            <p className='text-[#554E4E] text-base md:text-lg lg:text-lg xl:text-[24px] 2xl:text-[24px]'>We began with a singular, uncompromising vision: to bridge the gap between world-class architecture and the individuals who define our global culture. We recognized that for the discerning client, a home is rarely just a physical structure; it is a curated environment, a private gallery, and the ultimate expression of a life well-lived. Our journey started not in the pursuit of transactions, but in the pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke, 'private office' approach—one where quality always supersedes quantity, and where every client is treated as the sole focus of our firm,  
                We don't just find you a home; we secure your peace of mind through a veil of absolute professional confidentiality
                </p>
            <Buttons btnTitle={'Know More'} btnStyle={'font-lato text-[#ffffff] py-3 pl-[68px] pr-[85px] flex items-center gap-2 whitespace-nowrap'} icon={arrow}/>
        </div>
    </div>
    </section>
  )
}

export default SectionTwo
