import React from 'react'
import '../App/App.css'
import './Header.css'

function Header() {
    return (
        <div style={{transform: `translateY(-50px)`}} className="w3-content">
            <header className="w3-panel w3-center header-font">
                <h1>Chroma</h1>
            </header >
        </div>
    )
}

export default Header