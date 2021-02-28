import './App.css'
import './ImageBox.css'
import React from 'react'
import frame from './frame.png'

function ImageBox ({image}) {
    return (
        <div className="w3-row-padding w3-center" style={{marginBottom: "128px", transform: `translateY(-80px)`}}>
            <div className="w3-half" style={{display: "inline-flex", transform: `translate(105px, 0%)`}}>
            {image === ""
                ? <img src={frame} alt="frame" width="100" style={{width: "80%"}} />
                : <img src={image} alt="" style={{width: "90%"}} />
                }
            {image === ""
                ? <img src={frame} alt="frame" width="100" style={{width: "80%"}}/>
                : <img src={image} alt="" width="100"style={{width: "90%"}} />
                }
            </div>
        </div>
    )
}

export default ImageBox