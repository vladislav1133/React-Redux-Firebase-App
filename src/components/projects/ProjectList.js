import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
    const summary = [];

    if(projects) {
        for (let key in projects) {
            summary.push(<ProjectSummary project={projects[key]} key={key} />)
        }
    }
    return (
        <div className="project-list section">
            {summary}
        </div>
    )
};

export default ProjectList;
