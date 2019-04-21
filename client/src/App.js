import React, { Component } from 'react'
import './App.css'
import PhonesList from './Components/PhonesList'
import PhoneDetails from './Components/PhoneDetails'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path='/' render={() => <PhonesList/>}/>
            <Route exact path='/:id' render={(props) => <PhoneDetails phone={props.location.state.phone} />}/>
          </Switch>
      </div>
    )
  }
}

export default App
