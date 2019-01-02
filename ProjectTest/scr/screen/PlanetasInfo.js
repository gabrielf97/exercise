import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class PlanetasInfo extends Component {
  
  render() {
    console.log(this.props.planeta);
    return (
      <View  style={styles.Body}> 
        <Text>teste</Text>       
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
  
});

const mapStateToProps = (state) => {
  return { planeta: state.Planetas.selected}; 
}
/*const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ obterPlaneta }, dispatch);
};*/

const LoginConnect = connect(mapStateToProps)(PlanetasInfo);
export default LoginConnect;

