import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore, createFirestoreInstance} from 'redux-firestore';
import fbConfig from './configs/fbConfig'
import {ReactReduxFirebaseProvider} from "react-redux-firebase";

const middleware = [
    thunk.withExtraArgument({getFirestore})
];
const store = createStore(rootReducer,
    compose(
        applyMiddleware(...middleware),
        reduxFirestore(fbConfig),
    )
);

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const rrfProps = {
    firebase: fbConfig,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(<Provider store={store}><ReactReduxFirebaseProvider {...rrfProps} ><App/></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
