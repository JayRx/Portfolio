import { useState } from 'react';

import logo from '../logo.png'

import { HiBars3, HiXMark } from 'react-icons/hi2'

export default function Navbar() {

    const [open, setOpen] = useState(false)

    function toggleOpen() {
        setOpen(currentState => {
            return !currentState
        })
    }

    function close() {
        setOpen(false)
    }

    return (
        <header>
            <div className='pt-4 px-4 absolute w-full flex items-center justify-between lg:justify-around bg-white z-10'>
                <a href='#' className='font-semibold'><img src={logo} className='h-10'></img></a>
                <ul className='hidden lg:flex items-center justify-between space-x-4'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='#contacts'>Contacts</a></li>
                </ul>
                <button className='lg:hidden' onClick={() => toggleOpen()}>{open ? <HiXMark size={30}/> : <HiBars3 size={30}/>}</button>
            </div>
            
            <div className={'lg:hidden absolute w-full transition-all duration-500 ease-in-out ' + (open ? 'translate-y-[56px]' : 'translate-y-[-150px]')}>
                <ul className='items-center justify-between space-y-2 p-4 bg-white'>
                    <li><a href='#' onClick={() => close()}>Home</a></li>
                    <li><a href='#about' onClick={() => close()}>About</a></li>
                    <li><a href='#skills' onClick={() => close()}>Skills</a></li>
                    <li><a href='#portfolio' onClick={() => close()}>Portfolio</a></li>
                    <li><a href='#contacts' onClick={() => close()}>Contacts</a></li>
                </ul>
            </div>
        </header>
    )
}