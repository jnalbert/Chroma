import './App.css'
import './ImageBox.css'
import React from 'react'
import frame from './frame.png'

function ImageBox ({image}) {
    return (
        <div className="w3-row-padding w3-center" style={{marginBottom: "128px", transform: `translateY(-80px)`}}>
            <div className="w3-half" style={{display: "inline-flex", transform: `translate(43px, 0%)`}}>
            {image === ""
                ? <img src={frame} alt="frame" style={{width: "90%"}} />
                : <img class="image-scale" src={image} alt="" width="977" height="682"/>
                }
            {image === ""
                ? <img src={frame} alt="frame" style={{width: "90%"}}/>
                : <img class="image-scale" src={image} alt="" width="977" height="682"/>
                }
            </div>
        </div>
    )
}

export default ImageBox