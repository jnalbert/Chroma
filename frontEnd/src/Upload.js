import React from "react"
import './Upload.css'
import StartColor from './StartColor.js'

function Upload({updateImage}) {

    return (<div style={{display: "inline-flex", transform:  `translate(80px, -200px)`}}>
        <label htmlFor="uploadButton">       
              <h5  className="button" style={{verticalAlign:"middle"}}><span>Upload</span></h5>
        </label>
        <input
          type="file"
          id="uploadButton"
          style={{ display: "none" }}
          onChange={updateImage}
        />
        <br />
        <StartColor />
      </div>)

}

export default Upload;
