import React from 'react'
import './App.css'

function Nav(props) {
    return (
        <div style={{transform: `translateY(-130px)`}} className="w3-content">
            <header className="w3-panel w3-center w3-opacity">
                <div className="w3-padding-32">
                <div className="w3-bar w3-border">
                    <p  className="w3-bar-item w3-button">Portfolio</p>
                    <p className="w3-bar-item w3-button">Try Yourself!</p>
                </div>
                </div>
            </header>
        </div>
    )
}

export default Nav
