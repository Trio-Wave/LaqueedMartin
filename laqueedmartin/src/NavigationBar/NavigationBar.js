import React from 'react'
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <div className='NavigationBar'>
            <span><a href='/'>Home</a></span>
            <span><a href='/Portfolio'>Projects</a></span>
            <span><a href='/AboutMe'>About</a></span>
        </div>
    )
}

export default NavigationBar