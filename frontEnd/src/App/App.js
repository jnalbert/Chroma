import './App.css';
import Upload from '../Upload/Upload.js';
import ImageBox from '../ImageBox/ImageBox.js'
import Nav from '../Nav/Nav.js'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer'
import { useState } from 'react'
import colorizeImage from '../Util.js'

function App() {
  const [imageUpload, setImageUpload] = useState({ preview: "", raw: ""})
  const [imageDownload, setImageDownload] = useState({ preview: "", raw: ""})

  const updateImage = (e) => {
    setImageUpload({  preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]})
  }

  const handleUploadToServer = async (e) => {
    e.preventDefault();
    const b64 = window.btoa(imageUpload.raw)
    console.log(imageUpload.raw)
    console.log(b64)
    const response = await colorizeImage(b64)
    console.log(response.data)
  }
  return (
       
  <div>
    <Header />
    <Nav />
    <ImageBox imageUpload={imageUpload.preview} imageDownload={imageDownload.preview} />
    <Upload updateImage={updateImage} handleUploadToServer={handleUploadToServer} /> 
    <Footer />
  </div>

  );

}

export default App;