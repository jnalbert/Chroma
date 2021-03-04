import React from "react"
import './Upload.css'


function Upload({updateImage, handleUploadToServer, setInputRef}) {

    return (<div style={{display: "inline-flex", transform:  `translate(40%, -487%)`}}>
        <label htmlFor="uploadButton">       
              <h5  className="button" style={{verticalAlign:"middle"}}><span>Upload</span></h5>
        </label>
        <form >
          <input
            ref={(ref => {setInputRef(ref)})}
            type="file"
            id="uploadButton"
            style={{ display: "none" }}
            onChange={updateImage}
          />
          <br />
        </form>
        
        <button onClick={handleUploadToServer} className="startButton" style={{verticalAlign:"middle"}}><span>Colorize</span></button>
      </div>)

}

export default Upload;
