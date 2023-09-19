import SocialsLinks from './SocialsLinks';

import { LiaGithub, LiaLinkedin, LiaInstagram } from 'react-icons/lia';

export default function Socials() {
    return (
        <div className='hidden lg:flex flex-col top-0 absolute space-y-3 items-center justify-center ml-5 h-screen'>
            <SocialsLinks />
        </div>
    )
}