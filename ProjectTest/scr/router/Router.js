import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Login from '../screen/Login';
import Home from '../screen/Home';
import Planetas from '../screen/Planetas';
import Register from '../screen/Register';

const Routes = () => {
    
    return(
        <Router>

            <Scene key="root">

                <Scene 
                    key="Login"                   
                    component={Login}
                />

                <Scene 
                    key="Home"
                    title="Home"
                    component={Home}
                />

                <Scene 
                    key="Register"
                    title="Cadastro"
                    component={Register}
                />

                <Scene 
                    key="Planetas"
                    title="Planetas"
                    component={Planetas}
                />

            </Scene>

        </Router>
    )
}

export default Routes