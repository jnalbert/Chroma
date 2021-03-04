import '../App/App.css'
import './ImageBox.css'
import React from 'react'
import frame from './frame.png'

function ImageBox ({imageUpload, imageDownload}) {
    return (
        <div className="w3-row-padding w3-center" style={{marginBottom: "128px", transform: `translateY(-140px)`}}>
            <div className="w3-half" style={{display: "inline-flex", transform: `translate(43px, 0%)`}}>
            {imageUpload === ""
                ? <img src={frame} alt="frame" style={{width: "90%"}} />
                : <img className="image-scale" src={imageUpload} alt="" width="977" height="682"/>
                }
            {imageDownload === ""
                ? <img src={frame} alt="frame" style={{width: "90%"}}/>
                : <img className="image-scale" src={imageDownload} alt="" width="977" height="682"/>
                }
            </div>
        </div>
    )
}

export default ImageBox