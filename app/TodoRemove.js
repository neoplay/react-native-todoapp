import React, { Component } from "react";
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

class TodoRemove extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onRemove()}>
        <Icon name="times" style={{marginLeft:10,fontSize:18}} />
      </TouchableOpacity>
    );
  }
}

export default TodoRemove;
