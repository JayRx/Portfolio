import ProfileImage from '../profile.jpg'
import PortugalFlag from '../portugal.png'

import SocialsLinks from './SocialsLinks';

export default function Contact() {
    return (
        <div className='py-20' id='contacts'>
            <h2 className='text-3xl font-bold text-purple'>Contacts</h2>
            <div className='flex flex-col lg:flex-row w-full items-center justify-center mt-10 lg:mt-20 px-10'>
                <div className='flex flex-col items-center space-y-2 rounded-md bg-white p-2 shadow-md max-w-sm lg:-rotate-[5deg]'>
                    <img className='rounded-md lg:max-w-[300px] min-w-0' src={ProfileImage}></img>
                    <div className='flex flex-col items-center space-y-2 p-2'>
                        <h3 className='flex items-center text-xl'>João Rocha</h3>
                        <p>jr007silva1306@gmail.com</p>
                    </div>
                    <div className='flex flex-col items-center space-y-2 p-2'>
                        <p className='flex'><img className='w-5 mr-1' src={PortugalFlag}></img>Portugal</p>
                        <div className='flex space-x-2'>
                            <SocialsLinks />
                        </div>
                    </div>
                </div>
                <p className='mt-20 lg:mt-0 lg:ml-10 text-purple text-4xl  mb-10'>Let's build<br></br>something new!</p>
            </div>
        </div>
    )
}