import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, View, Button, Image} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class Login extends Component<Props> {
   
  render() {

    return (
      <View  style={styles.Body}> 
          <Image source={require('../images/TronLogo.png')} style={styles.Logo} />
            
        <View>  
        <TextInput style={styles.Input} placeholder="Insira seu usuário"/>
        <TextInput style={styles.Input} placeholder="Insira sua senha"/>
          <View style={styles.ButtonPerson} >
            <Button  onPress={() => Actions.Home()} title="Entrar" color="#2E8B57"/>
          </View>
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
    padding: 10,
    color:"#808080",
    
  },
  Logo:{
    width: 250, 
    height: 250,    
    resizeMode: 'contain',   
    alignItems: 'center'
  },
});
