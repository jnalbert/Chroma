import './App.css'
import './ImageBox.css'
import React from 'react'

function ImageBox ({image}) {
    return (
        <div className="w3-row-padding">
            <div className="w3-half w3-row-padding" >
                <img src={image} alt="" width="400" height="300" />
            </div>

            <div className="right w3-row-padding">
                <img src={image} alt="" width="400" height="300" />
            </div>
        </div>
    )
}

export default ImageBox