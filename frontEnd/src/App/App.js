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
  const [uploadInputRef, setUploadInputRef] = useState()

  const updateImage = (e) => {
    setImageUpload({  preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]})
  }

  const handleUploadToServer = async (e) => {
    e.preventDefault();
    const image = new FormData();
    image.append('file', uploadInputRef.files[0])
  
    const response = await colorizeImage(image)
    console.log(response.data)
  }

  const setInputRef = (ref) => {
    setUploadInputRef(ref)
  }
  return (
       
  <div>
    <Header />
    <Nav />
    <ImageBox imageUpload={imageUpload.preview} imageDownload={imageDownload.preview} />
    <Upload updateImage={updateImage} handleUploadToServer={handleUploadToServer} setInputRef={setInputRef}/> 
    <Footer />
  </div>

  );

}

export default App;