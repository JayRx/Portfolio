import ProfileImage from '../profile2.jpg';

export default function About() {
    return (
        <div className='py-20' id='about'>
            <h2 className='text-3xl font-bold text-purple'>About Me</h2>
            <div className='mt-10 px-10 flex flex-col lg:flex-row items-center justify-center lg:space-x-16'>
                <div className='p-2 shadow-md max-w-md rounded-lg'>
                    <img src={ProfileImage} className=' rounded-lg'></img>
                </div>
                <div className='mt-10 lg:mt-0 flex flex-col max-w-md'>
                    <p className='text-justify indent-8'>I started programming when I was about 16 years old and since then I love to make new projects and express myself through pixels. The first project I made was an Android game made with Java.</p>
                    <p className='text-justify indent-8'>In 2018 I got accepted into FEUP in a Bachelor of Informatics Engineering and Computing which was a dream of mine.</p>
                    <p className='text-justify indent-8'>I finished my Bachelor's in 2021 and my Master's in 2023. To complete my Master's degree I developed a thesis named "Ranking Mobile Apps by Energy Efficiency".</p>
                </div>
            </div>
        </div>
    )
}