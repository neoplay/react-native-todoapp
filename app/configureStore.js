import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index'

export default function configureStore(initialState) {
  const store = createStore(reducers,applyMiddleware(thunk))
  return store
}
