import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import NavigationBar from './NavigationBar/NavigationBar'
import Portfolio from './Portfolio/Portfolio'
import AboutMe from './AboutMe/AboutMe'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavigationBar />
        </header>
        <div className='pageContent'>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='/AboutMe' element={<AboutMe />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
