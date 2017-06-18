import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodoApp from './TodoApp'
import * as TodoActions from './actions/todo'

function mapStateToProps(state) {
  return {
    todos: state.todos,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TodoActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
