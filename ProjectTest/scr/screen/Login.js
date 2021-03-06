import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, View, Button, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

export class Login extends Component<Props> {
   
  render() {

    return (
      <View  style={styles.Body}> 
          <Image source={require('../images/TronLogo.png')} style={styles.Logo} />            
             
              <View>
                <TextInput value={this.props.email} style={styles.Input} placeholder="Insira seu usuário"/>

                <TextInput style={styles.Input} placeholder="Insira sua senha"/>         
              </View>

              <View style={styles.ButtonPerson}>
                <Button  
                onPress={() => Actions.Home()}
                title="Entrar" 
                color="#2E8B57"
                />
              </View> 

              <View style={styles.ButtonPerson}>
                <Button 
                onPress={() => Actions.Register()}
                title="Cadastrar" 
                color="#2E8B57"
                />        
              </View>   
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Body:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#00FF7F",
    padding: 10,
  },
  Input:{
    height: 60, 
    margin: 5, 
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  ButtonPerson:{      
    padding: 5,
  },
  Logo:{
    width: 250, 
    height: 250,    
    resizeMode: 'contain',     
    justifyContent: 'flex-start'
  },
});

const mapStateToProps = (state) => {
    return {
        email: state.Login.email,
        senha: state.Login.passowrd
    };
};

const LoginConnect = connect(mapStateToProps)(Login);
export default LoginConnect;
