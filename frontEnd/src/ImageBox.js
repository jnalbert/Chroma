import './App.css'
import './ImageBox.css'
import React from 'react'

function ImageBox ({image}) {
    return (
        <div class="w3-row-padding">
            <div class="w3-half">
                <img src={image} alt="" width="400" height="300" />
            </div>

            <div class="right">
                <img src={image} alt="" width="400" height="300" />
            </div>
        </div>
    )
}

export default ImageBox