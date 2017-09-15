import React from "react";
import createStore from "./store/createStore";
import AppContainer from "./AppContainer";


export default class Root extends React.Component{

    renderApp(){
        const initalState = window.__INIITIAL_STATE__;
        const store = createStore(initalState);

        return (
            <AppContainer store={store} />
        );
    }

    render(){
        return this.renderApp();
    }

}
