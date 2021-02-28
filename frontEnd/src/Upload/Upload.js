import React from "react"
import './Upload.css'


function Upload({updateImage, handleUploadToServer, imageUpload}) {

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
        <button onClick={handleUploadToServer()} className="startButton" style={{verticalAlign:"middle"}}><span>Colorize</span></button>
      </div>)

}

export default Upload;
