import { HiCommandLine, HiLanguage } from 'react-icons/hi2';


export default function Skills() {

    var skills = [
        { "name": "Web", 
            "icon": <HiCommandLine size={30} className='mr-1'/>,
            "values": [
                { "name": "React", "value": "5/12" },
                { "name": "Node JS", "value": "6/12" },
                { "name": "Laravel", "value": "9/12" },
                { "name": "HTML", "value": "11/12" },
                { "name": "CSS", "value": "11/12" },
                { "name": "JavaScript", "value": "10/12" },
                { "name": "SQL", "value": "11/12" },
            ]
        },
        { "name": "Mobile App",
            "icon": <HiCommandLine size={30} className='mr-1'/>,
            "values": [
                { "name": "Flutter", "value": "9/12" },
                { "name": "Ionic", "value": "1/12" },
                { "name": "Kotlin", "value": "7/12" },
                { "name": "Java", "value": "11/12" },
            ]
        },
        { "name": "Other",
            "icon": <HiCommandLine size={30} className='mr-1'/>,
            "values": [
                { "name": "Unity", "value": "8/12" },
                { "name": "Python", "value": "11/12" },
                { "name": "C", "value": "11/12" },
                { "name": "C++", "value": "11/12" },
                { "name": "C#", "value": "10/12" },
            ]
        },
        { "name": "Languages",
            "icon": <HiLanguage size={30} className='mr-1'/>,
            "values": [
                { "name": "English", "value": "11/12" },
                { "name": "Portuguese", "value": "12/12" },
                { "name": "Spanish", "value": "1/12" },
                { "name": "French", "value": "1/12" },
            ]
        }
    ]

    return (
        <div className='py-20 bg-purple' id='skills'>
            <h2 className='text-3xl font-bold text-white'>My Skills</h2>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 gap-12 mt-10 max-w-[1200px] sm:grid-cols-2 lg:grid-cols-3'>
                    { skills.map(skill => {
                        return <div className='flex flex-col items-center space-y-8 rounded-md bg-white border p-10 shadow-md max-w-sm'>
                        <h3 className='flex items-center text-xl font-bold text-purple'>{skill.icon}{skill.name}</h3>
                        <div className='grid grid-cols-3 place-items-center'>
                            { skill.values.map(info => {
                                return <><span className='font-semibold text-right'>{info.name}</span><div className='w-40 h-2 bg-lightpurple ml-2 rounded-full col-span-2'><div className={`h-full w-${info.value} rounded-full bg-gradient-to-r from-purple to-folly`}></div></div></>
                            })}
                        </div>
                    </div>
                    })}
                </div>
            </div>
        </div>
    )
}