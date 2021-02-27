import React from "react"
import './Upload.css'

function Upload({updateImage}) {

    return (<div>
        <label htmlFor="uploadButton">       
              <h5  class="button" style={{verticalAlign:"middle"}}><span>Upload</span></h5>
        </label>
        <input
          type="file"
          id="uploadButton"
          style={{ display: "none" }}
          onChange={updateImage}
        />
        <br />
      </div>)

}

export default Upload;
