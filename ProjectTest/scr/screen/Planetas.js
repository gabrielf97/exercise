import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { obterPlanetas, obterPlaneta } from '../action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Planetas extends Component {
  componentDidMount() {
    this.props.obterPlanetas();
  }
  
  _renderItem = ({item}) => (
    <Planeta
      url={item.url}      
      name={item.name}
    />
  );

  render() {
    if(this.props.Planetas == null) {
      return(          
        <View >
          <Text>
            Carregando conteudo... 
          </Text>
        </View>      
    );
  } 
    else {
    return (
      <View style={styles.Body}>
        <FlatList 
          data={this.props.Planetas} 
          renderItem={this._renderItem}
        />
      </View>  
    );
    }
  }
}

class Planeta extends React.PureComponent {  
  render() {    
    return (      
      <View>
        <Text onPress={() => {Actions.PlanetasInfo(), obterPlaneta()}}>
          {this.props.name}                      
        </Text>          
      </View>
    );
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
  return bindActionCreators ({ obterPlanetas, obterPlaneta }, dispatch);
};

const LoginConnect = connect(mapStateToProps, mapDispatchToProps)(Planetas);
export default LoginConnect;


