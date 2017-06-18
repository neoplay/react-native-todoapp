import React, { Component } from "react";
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

class TodoDone extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let iconName = "circle-o"
    if(this.props.done) iconName = "check-circle-o"
    return (
      <TouchableOpacity onPress={() => this.props.onToggle()}>
        <Icon name={iconName} style={{marginRight:10,fontSize:18}} />
      </TouchableOpacity>
    );
  }
}

export default TodoDone;
