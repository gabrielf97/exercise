import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { obterPlanetas } from '../action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListItem from '../componety/ListItem';

class Planetas extends Component {

  componentDidMount() {
  this.props.obterPlanetas();
  }
  render() {

      
    /*const PlanetasItem = this.props.Planetas.map(planeta => {
          return <ListItem key={planeta.name} item={planeta}/>;          
    });
    */

  return (
    <View style={styles.Body}>
      <FlatList source={this.props.Planetas} 
      renderItem={({item}) => <Planeta data={item}/>}
      />
    </View>
  );
}
}

class Planeta extends Component {
  render () {
    return (
      <Text>item.name</Text>
    );
  }
}


const styles = StyleSheet.create({
  Body: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white",
    padding: 10,
  },
  Input: {
    height: 60,
    margin: 5,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  ButtonPerson: {
    padding: 5,
  },
  Logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    justifyContent: 'flex-start'
  },
});

const mapStateToProps = (state) => {
  return { Planetas: state.Planetas.todos}; 
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ obterPlanetas }, dispatch);
};

const LoginConnect = connect(mapStateToProps, mapDispatchToProps)(Planetas);
export default LoginConnect;


