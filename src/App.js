import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './configs/Store' 

import Header from './components/Header'
import Home from './screens/Home'

 class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Header />
          <Home />
      </Provider>
     
    )
  }
}
export default App