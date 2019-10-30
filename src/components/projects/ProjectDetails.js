import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";

const ProjectDetails = (props) =>  {
    const { project } = props;
    if(project) {
        return (
            <div>
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <div className="card-title">{ project.title }</div>
                            <p>{ project.content }</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Posted By { project.authorFirstName } { project.authorLastName}</div>
                            <div>2nd September, 3pm</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project... </p>
            </div>
        )
    }

};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(() => [ 'projects' ])
)(ProjectDetails);