import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Login from '../screen/Login';
import Home from '../screen/Home';

const Routes = () => {

    return(
        <Router>

            <Scene key="root">

                <Scene 
                    key="Login"
                    title="Login"
                    component={Login}
                />

                <Scene 
                    key="Home"
                    title="Home"
                    component={Home}
                />

            </Scene>

        </Router>
    )
}

export default Routes