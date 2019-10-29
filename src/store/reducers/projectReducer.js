const initState = {
    projects: [
        { id: '1', title: 'Some title - 1', content: 'Lorem ipsum dolor sit amet.' },
        { id: '1', title: 'Some title - 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing.' },
        { id: '1', title: 'Some title - 1', content: 'Lorem ipsum dolor sit amet, consectetur.' },
    ]
};
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("---", 'create p', action.project);
    }


    return state;
};

export default projectReducer;

