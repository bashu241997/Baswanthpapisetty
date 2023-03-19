import React from 'react'
import Profile from '../../assets/employee.svg'
import Git from '../../assets/git-alt.svg'
import Lin from '../../assets/linkedin-in.svg'
import Ins from '../../assets/instagram.svg'
import Glob from '../../assets/globe.svg'
import Line from '../../common/Line'
const Home = () => {
  return (<>
    <div id='title' className='text-2xl sm:text-4xl pl-6 text-primary font-extrabold capitalize pacifo pt-[40px]'>baswanth</div>
    <div id='home' className='py-8 flex flex-col sm:flex-row min-h-[95vh] text-primary justify-center items-center gap-4'>
      <div  id='home-leftcontainer' className='pl-6 sm:pl-0'> 
        <div className='ubuntum text-2xl uppercase font-bold'>welcome i'm</div>
        <div className='Staatliches text-4xl sm:text-6xl capitalize font-bold pt-4 pb-6'>baswanth papisetty</div>
        <div className='ubuntum text-2xl capitalize font-bold'>web and mobile application developer</div>
        <div className='flex py-[40px]'>
          <a href="https://github.com/bashu241997" className="px-3 "><img src={Git} className="w-[40px] h-[40px]" alt="git" /></a>
          <a href="https://www.linkedin.com/in/baswanth-papisetty-91340b9a/" className="px-3 "><img src={Lin} className="w-[40px] h-[40px]" alt="linkedin" /></a>
          <a href="https://www.instagram.com/baswanth_p/" className="px-3 "><img src={Ins} className="w-[40px] h-[40px]" alt="instagram" /></a>
          <a href="https://bashu-53054.web.app/" className="px-3 "><img src={Glob} className="w-[40px] h-[40px]" alt="globe" /></a>
        </div>
        <div className='flex pb-6'>
          <button className=' scale-100 hover:scale-110 duration-300 bg-primary text-white uppercase rounded-[50px] py-3 w-[120px] font-bold mr-3'>About me</button>
          <button className=' scale-100 hover:scale-110 duration-300 bg-background text-primary border-4 border-primary uppercase rounded-[50px] py-3 font-bold w-[120px] mr-3'>projects</button>
        </div>
      </div>

      <div id='home-image'><img src={Profile} className=" w-[300px] sm:w-[650px] sm:h-[350px]" alt="profile_image" /></div>
    </div>
    
    <Line /></>
  )
}

export default Home