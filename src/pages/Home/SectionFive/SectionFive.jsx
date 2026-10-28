import Future1 from '../../../assets/Future1.png'
import Future2 from '../../../assets/Future2.png'
import CardLogo1 from '../../../assets/CardLogo1.svg'
import CardLogo2 from '../../../assets/CardLogo2.svg'
import Title from '../../../components/Title/Title'

function SectionFive() {
  return (
    <section className='mb-[145px]'> 
    <Title title={'Future Landmarks'} hs={'mt-[180px]'} ds={'mb-[38px]'}/>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>   
    <div className='bg-[#ffffff] shadow-SectionOne rounded-xl border border-[#EAEAEA] p-4 flex-col justify-between hover:shadow-xl transition-shadow duration-300'>
        <div className='rounded-xl overflow-hidden mb-4'>
        <img src={Future1} alt='Palm Hills' className='w-full h-67.75 object-cover'/>
        </div>
        <div className='mb-4 px-2'>
            <img src={CardLogo1} alt='logo' className='w-49 h-16.25 object-contain'/>
        </div>
        <div className='px-2 pb-2'>
            <button className='w-full py-2 font-lato text-[#8E1616] border border-[#8E1616] rounded-lg hover:text-red-700 hover:border-red-600 cursor-pointer'>View Details</button>
        </div>
        </div>    
    <div className='bg-[#ffffff] shadow-SectionOne rounded-xl border border-[#EAEAEA] p-4 flex-col justify-between hover:shadow-xl transition-shadow duration-300'>
        <div className='rounded-xl overflow-hidden mb-4'>
        <img src={Future2} alt='Haya City' className='w-full h-67.75 object-cover'/>
        </div>
        <div className='flex items-center gap-3 mb-4 px-2'>
          <img src={CardLogo2} alt='logo'className='w-[37px] h-[41px]'/>
          <div>
          <h3 className='font-lato text-[#1D1616] text-[20px] font-bold'>Hayah City</h3>
          <p className='font-lato text-[#847D7D] text-[12px] font-bold'>Hayah Development</p>
          </div>
        </div>
        <div className='px-2 pb-2'>
            <button className='w-full py-2 font-lato text-[#8E1616] border border-[#8E1616] rounded-lg hover:text-red-700 hover:border-red-600 cursor-pointer'>View Details</button>
        </div>
        </div>    
    <div className='bg-[#ffffff] shadow-SectionOne rounded-xl border border-[#EAEAEA] p-4 flex-col justify-between hover:shadow-xl transition-shadow duration-300'>
        <div className='rounded-xl overflow-hidden mb-4'>
        <img src={Future1} alt='Palm Hills' className='w-full h-67.75 object-cover'/>
        </div>
        <div className='mb-4 px-2'>
            <img src={CardLogo1} alt='logo' className='w-49 h-16.25 object-contain'/>
        </div>
        <div className='px-2 pb-2'>
            <button className='w-full py-2 font-lato text-[#8E1616] border border-[#8E1616] rounded-lg hover:text-red-700 hover:border-red-600 cursor-pointer'>View Details</button>
        </div>
        </div> 
    </div>
    <div className="flex w-full justify-center gap-2 py-2 mt-5">
        <a href="#item1" className="w-2 h-2 bg-gray-400 hover:bg-red-800 rounded-full"></a>
        <a href="#item2" className="w-2 h-2 bg-gray-400 hover:bg-red-800 rounded-full"></a>
        <a href="#item3" className="w-2 h-2 bg-gray-400 hover:bg-red-800 rounded-full"></a>
    </div>     
    </section>
  )
}

export default SectionFive
