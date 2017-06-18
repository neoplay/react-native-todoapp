//import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions/todo'

let initialState = []

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case 'ADD_TODO': {
      let todo = { text: action.todo, done: false }
      let todos = state.concat(todo)
      return todos
    }

    case 'TOGGLE_TODO': {
      let todos = [...state]
      todos[action.key] = {
        text: todos[action.key].text,
        done: !todos[action.key].done
      }
      return todos
    }

    case 'REMOVE_TODO': {
      let todos = [...state]
      todos.splice(action.key, 1)
      return todos
    }

    default: {
      return state
    }

  }

}
