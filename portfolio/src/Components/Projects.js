import React from 'react';
import userData from './data';


const Projects = () => {

    return (
        <div className="projects_container">
            <div className="myWorks_container">
                {userData.projects.map((project) => (
                    <div key={project.id} className="project">
                        <div className="image">
                            <a href={project.url}>
                                <img src={project.photo} alt={project.title}></img>
                            </a>
                        </div>
                        <div className="title">
                            {project.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;