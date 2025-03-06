import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import NavigationBar from './NavigationBar/NavigationBar'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavigationBar />
        </header>
        <div className='pageContent'>
          <Switch>
            <Route path='/'>
              <LandingPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App
