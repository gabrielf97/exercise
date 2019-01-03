import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { obterPlanetas, obterPlaneta, mudarTela } from '../action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Planetas extends Component {

  componentDidMount() {
    this.props.obterPlanetas(); 
  }
  
  _mudarTela = (index) => {
    this.props.mudarTela(this.props.Planetas[index])
    Actions.PlanetasInfo();
  }

  render() {
    if(this.props.Planetas == null) {
      return(          
        <View style={styles.Carregando}>
          <Text>
            Carregando conteúdo ...  
          </Text>
        </View>      
    );
  } else {
      return(
        <View style={{flex: 1}}>
          {
          this.props.Planetas.map((item, index)=>{
            return(
              <View key={index} style={styles.Body}>
                <TouchableOpacity onPress={()=>{this._mudarTela(index)}}>
                  <Text style={{color:"black"}}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            );
          })
          }  
      </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  Body: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#00FF7F",
    padding: 10,
  },  
  Logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    justifyContent: 'flex-start'
  },
  Carregando: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',    
  },
});

const mapStateToProps = (state) => {
  return { Planetas: state.Planetas.todos}; 
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ obterPlanetas, obterPlaneta, mudarTela }, dispatch);
};

const LoginConnect = connect(mapStateToProps, mapDispatchToProps)(Planetas);
export default LoginConnect;


