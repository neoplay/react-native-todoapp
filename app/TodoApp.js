import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, StatusBar } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './Header'
import Footer from './Footer'
import TodoDone from './TodoDone'
import TodoRemove from './TodoRemove'

export default class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.props.addTodo('Test 1 mit einem ganz langen Eintrag und so weiter')
    this.props.addTodo('Test 2')
    this.props.toggleTodo(1)
    //this.props.removeTodo(1)
    //console.log(this.props.todos)

  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Header />
        <ScrollView style={{flex:1}}>
          <List style={{marginTop:0}}>
            {
              this.props.todos.map((el, i) => (
                <ListItem
                  key={i}
                  title={el.text}
                  leftIcon={<TodoDone done={el.done} onToggle={() => this.props.toggleTodo(i)} />}
                  rightIcon={<TodoRemove onRemove={() => this.props.removeTodo(i)} />}
                />
              ))
            }
          </List>
        </ScrollView>
        <Footer onAdd={(text) => this.props.addTodo(text)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
