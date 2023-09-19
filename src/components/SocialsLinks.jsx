import { LiaGithub, LiaLinkedin, LiaInstagram } from 'react-icons/lia';

export default function SocialsLinks() {
    return (
        <>
            <a href='https://github.com/JayRx' className='rounded-full hover:bg-purple hover:text-white'><LiaGithub size={30}/></a>
            <a href='https://www.linkedin.com/in/joaosilvarocha/' className='rounded hover:bg-purple hover:text-white'><LiaLinkedin size={30}/></a>
            <a href='https://www.instagram.com/joao.s.rochinha/' className='rounded-lg hover:bg-purple hover:text-white'><LiaInstagram size={30}/></a>
        </>
    )
}