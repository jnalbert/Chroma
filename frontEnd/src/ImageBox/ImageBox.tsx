import '../App/App.css'
import './ImageBox.css'
import React from 'react'
import frame from './frame.png'

// w3-half
// style={{display: "inline-flex", transform: `translate(43px, 0%)`}}

interface imageBoxProps {
    imageUpload: string;
    imageDownload: string;
}
function ImageBox ({imageUpload, imageDownload}: imageBoxProps) {
    return (
        <div className="w3-row-padding w3-center" style={{marginBottom: "128px", transform: `translateY(-80px)`}}>
            <div className="w3-half" >
                <div className="img-display1">
                    {imageUpload === ""
                        ? <img className="img-frame1" src={frame} alt="frame" style={{width: "90%"}} />
                        : <img className="image-scale" src={imageUpload} alt="" width="977" height="682"/>
                        }
                </div>
                <div className="img-display2">
                    {imageDownload === ""
                        ? <img className="img-frame2" src={frame} alt="frame" style={{width: "90%"}}/>
                        : <img className="image-scale" src={imageDownload} alt="" width="977" height="682"/>
                        }
                </div>
            </div>
        </div>
    )
}

export default ImageBox