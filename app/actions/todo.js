//export const ADD_TODO = 'ADD_TODO'
//export const TOGGLE_TODO = 'TOGGLE_TODO'
//export const REMOVE_TODO = 'REMOVE_TODO'

export function addTodo(todo) {
  return {
    type: 'ADD_TODO',
    todo,
  }
}

export function toggleTodo(key) {
  return {
    type: 'TOGGLE_TODO',
    key,
  }
}

export function removeTodo(key) {
  return {
    type: 'REMOVE_TODO',
    key,
  }
}
