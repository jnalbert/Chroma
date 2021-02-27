import React, { useState } from "react"
import './Upload.css'

function Upload(props) {
    const [image, setImage] = useState({ preview: "", raw: ""})

    const handleChange = (e) => {
        setImage({  preview: URL.createObjectURL(e.target.files[0]),
                    raw: e.target.files[0]})
    }

    const handleUpload = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', image.raw)
    }

    return (<div>
        <label htmlFor="uploadButton">
          {image.preview ? (
            <img src={image.preview} alt="dummy" width="300" height="300" />
          ) : (
            <>
                
              <h5  class="button" style={{verticalAlign:"middle"}}><span>Upload</span></h5>
            </>
          )}
        </label>
        <input
          type="file"
          id="uploadButton"
          style={{ display: "none" }}
          onChange={handleChange}
        />
        <br />
        <button style={{ display: "none"}} onClick={handleUpload}>Hover</button>
      </div>)

}

export default Upload;
