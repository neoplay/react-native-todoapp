import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#bf1221'}}>
        <View style={{width: 50, height: 65}}>
          <Icon name="check" size={20} color="white" style={{marginTop: 30, marginLeft:10}} />
        </View>
        <View style={{height: 65}}>
          <Text style={{color:'white', textAlign: 'center', fontSize: 20, lineHeight:50, marginTop:15}}>
              TODO App
          </Text>
        </View>
        <View style={{width: 50, height: 65}}></View>
      </View>
    );
  }
}

export default Header;
