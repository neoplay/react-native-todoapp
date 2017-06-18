import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

const store = configureStore()

import App from './App'

export default class setup extends Component {

  constructor() {
    super()
  }

  render() {
    return (
    <Provider store={store}>
      <App />
    </Provider>
    )
  }

}
