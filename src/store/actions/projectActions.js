// Normal action without thunk
// export const createProject = (project) => {
//     return {
//         type: 'ADD_PROJECT',
//         project: project
//     }
// };

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        console.log("---", getFirestore);
        const firestore = getFirestore();
        firestore.collection('projects').add({
           ...project,
            authorFirstName: 'Temp First',
            authorLastName: 'Temp Last',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project})
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        });

    }
};