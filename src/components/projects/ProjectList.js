import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';


const ProjectList = ({projects}) => {
    const summary = [];

    if(projects) {
        for (let key in projects) {
            summary.push(
                <Link to={`/project/${key}`} key={key}>
                    <ProjectSummary project={projects[key]}  />
                </Link>
                )
        }
    }
    return (
        <div className="project-list section">
            {summary}
        </div>
    )
};

export default ProjectList;
