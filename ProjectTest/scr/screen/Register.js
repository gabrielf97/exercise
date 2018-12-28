import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, View, Button, Image} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class Register extends Component<Props> {
   
  render() {

    return (
      <View  style={styles.Body}> 
          <Image source={require('../images/TronLogo.png')} style={styles.Logo} />            
             
              <View>
                <TextInput style={styles.Input} placeholder="Primeiro nome"/>

                <TextInput style={styles.Input} placeholder="Ultimo nome"/>         

                <TextInput style={styles.Input} placeholder="E-mail"/> 
              </View>

              <View style={styles.ButtonPerson}>
                <Button  
                onPress={() => Actions.Login()}
                title="Cadastrar-se" 
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
