import { useState } from 'react';

import { BsArrowRight } from 'react-icons/bs';

export default function Projects() {

    var tags = [
        { "id": 0, "name": "All" },
        { "id": 1, "name": "Web" },
        { "id": 2, "name": "Mobile" },
        { "id": 3, "name": "Game" }
    ]

    var projects = [
        { "id": 0, "name": "Project 1", "tag": "Web", "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"},
        { "id": 1, "name": "Project 2", "tag": "Mobile App", "image": "https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"},
        { "id": 2, "name": "Project 3", "tag": "Game", "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"},
        { "id": 3, "name": "Project 4", "tag": "Web", "image": "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"},
    ]

    const [filteredProjects, setFilteredProjects] = useState(projects)
    const [selectedTag, setSelectedTag] = useState(0)

    function filterProjects(tag) {

        const filterResult = projects.filter(project => {
            return project.tag === tag.name || tag.name === "All"
        })

        setFilteredProjects(filterResult)
        setSelectedTag(tag.id)
    }

    return (
        <div className='py-20 bg-purple' id='portfolio'>
            <h2 className='text-3xl font-bold text-white'>Porfolio</h2>
            <ul className='w-full flex space-x-2 items-center justify-center mt-10'>
                { tags.map(tag => {
                    if (tag.id === selectedTag)
                        return <li><button onClick={() => filterProjects(tag)} className='bg-purple text-white px-3 rounded-lg border border-white'>{tag.name}</button></li>
                    else
                        return <li><button onClick={() => filterProjects(tag)} className='bg-white text-purple px-3 rounded-lg border border-white hover:bg-purple hover:text-white'>{tag.name}</button></li>
                })}
            </ul>
            <div className='flex justify-center px-2'>
                <div className='grid grid-cols-2 gap-2 sm:gap-6 lg:px-12 mt-10 max-w-[1200px] sm:grid-cols-3 lg:grid-cols-4'>
                    { filteredProjects.map(project => {
                        return <a href='#' key={project.id} className='rounded-md bg-white shadow-md max-w-sm'>
                            <div className='relative rounded-t-md overflow-hidden'>
                                <img className='w-full' src={project.image} alt="" />
                                <div className='absolute bottom-0 w-full h-1/4 bg-gradient-to-b from-transparent to-black/75'></div>
                            </div>
                            <div className='flex flex-col p-4 items-center'>
                                <h3 className='self-start'>{project.name}</h3>
                                <span className='self-start mt-1 text-xs text-purple'>{project.tag}</span>
                            </div>
                        </a>
                    })}
                </div>
            </div>
        </div>
    )
}