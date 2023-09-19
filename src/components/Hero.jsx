import Typed from 'react-typed';

import SocialsLinks from './SocialsLinks';

import profileImg from '../profile.png';

export default function Hero() {
    return (
      <div id='hero' className='flex flex-col items-center justify-center min-h-screen pb-20 lg:pb-0 pt-[56px]'>
        <div className='hidden lg:flex flex-row items-center justify-center w-100 space-x-10'>
          <div className='flex flex-col items-start space-y-6'>
            <h1 className='text-3xl text-black'>Hi, I'm <span className='font-semibold text-purple'>João Rocha</span></h1>
            <div className='flex items-center space-x-4'>
              <div className='w-10 h-px bg-black'></div>
              <Typed className='text-black'
                  strings={[
                      'Software Developer',
                      'Web Developer',
                      'Mobile App Developer']}
                      typeSpeed={40}
                      backSpeed={50}
                      loop
                />
            </div>
            <p className='text-left text-black'>I'm a Software Developer based in Portugal,<br></br>and I'm passionate about developing new tools!</p>
          </div>
          <img src={profileImg} className='h-70 rounded-full'></img>
        </div>

        <div className='flex lg:hidden flex-col items-center justify-center w-100 space-y-10 p-5'>
          <img src={profileImg} className='h-70 rounded-full'></img>
          <div className='flex flex-col items-center space-y-6'>
            <h1 className='text-3xl text-black'>Hi, I'm <span className='font-semibold text-purple'>João Rocha</span></h1>
            <div className='flex items-center space-x-4'>
              <Typed className='text-black'
                  strings={[
                      'Software Developer',
                      'Web Developer',
                      'Mobile App Developer']}
                      typeSpeed={40}
                      backSpeed={50}
                      loop
                />
            </div>
            <p className='text-left text-black max-w-sm'>I'm a Software Developer based in Portugal, and I'm passionate about developing new tools!</p>
          </div>
          <div className='flex space-x-3 items-center justify-center'>
            <SocialsLinks />
          </div>
        </div>

        <button className='flex items-center bg-purple text-white px-4 py-2 rounded-md border border-purple mt-14 lg:mt-28 hover:bg-white hover:text-purple'>Download CV</button>
      </div>
    )
}