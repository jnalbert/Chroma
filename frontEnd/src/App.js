import './App.css';
import Upload from './Upload.js';
import ImageBox from './ImageBox'
import { useState } from 'react'

function App() {
  const [image, setImage] = useState({ preview: "", raw: ""})
  const updateImage = (e) => {
    setImage({  preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]})
  }
  return (
    <div class="w3-content">

      {/* <!-- Header --> */}
      <header class="w3-panel w3-center w3-opacity">
        <h1>Chroma</h1>
      </header >
      <header class="w3-panel w3-center w3-opacity">
        <div class="w3-padding-32">
          <div class="w3-bar w3-border">
            <p  class="w3-bar-item w3-button">About</p>
            <p  class="w3-bar-item w3-button">Portfolio</p>
            <p class="w3-bar-item w3-button">Try Yourself!</p>
          </div>
        </div>
      </header>
        
  <div>
  < ImageBox image={image.preview} />
    <Upload updateImage={updateImage}/> 
  </div>

{/* //end page */}
</div>
  );

}

export default App;