import './App.css'

import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'

import ReactContext from './context/ReactContext'

import RegisterUser from './components/RegisterUser'

import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {
    InputValue: '',
    SearchOptions: 'ARTS_AND_CULTURE',
    isRegister: false,
    RegisterError: false,
  }

  successMsg = () => {
    this.setState({isRegister: true})
  }

  errorMsg = () => {
    this.setState({RegisterError: true})
  }

  addSelectDisplay = SearchOptions => {
    this.setState({SearchOptions})
  }

  addTextDisplay = InputValue => {
    this.setState({InputValue})
  }

  render() {
    const {RegisterError, SearchOptions, isRegister, InputValue} = this.state
    return (
      <ReactContext.Provider
        value={{
          RegisterError,
          SearchOptions,
          isRegister,
          InputValue,
          successMsg: this.successMsg,
          errorMsg: this.errorMsg,
          addSelectDisplay: this.addSelectDisplay,
          addTextDisplay: this.addTextDisplay,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterUser} />
          <Route exact path="/not-Found" component={NotFound} />
          <Redirect to="/not-Found" />
        </Switch>
      </ReactContext.Provider>
    )
  }
}
export default App
