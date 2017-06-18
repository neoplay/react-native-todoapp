import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={"padding"} style={{backgroundColor: '#bf1221'}}>
        <TextInput
          ref={"addtodo"}
          autoCorrect={false}
          maxLength={50}
          returnKeyType={"go"}
          style={styles.input}
          placeholder={"New todo..."}
          placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={() => {
            this.props.onAdd(this.state.text)
            this.refs.addtodo.setNativeProps({text: ''})
          }}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default Footer;

const styles = StyleSheet.create({
  input: {
    paddingLeft:10,
    paddingRight:10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color:'white',
  },
})
