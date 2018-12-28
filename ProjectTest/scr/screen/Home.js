import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class Home extends Component<Props> {
   
   render() {

    return (

      <View  style={styles.Body}> 
        <Text 
        style={styles.TextLogo} 
        onPress={() => Actions.Login()}
        >Seja bem vindo a Tron Informatica
        </Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  Body:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#00FF7F",
    padding: 10,
  },
  TextLogo:{
    color: 'black',    
    fontSize:25,
  },
});
