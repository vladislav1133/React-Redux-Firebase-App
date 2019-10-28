import React from 'react';

const ProjectDetails = (props) =>  {
    const id = props.match.params.id;
    return (
        <div>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <div className="card-title">Project Title - {id}</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci alias architecto at doloremque libero minus modi nisi nulla, officiis pariatur provident quasi quibusdam quod quos tempore temporibus vitae voluptas?</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted By User</div>
                        <div>2nd September, 3pm</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectDetails;