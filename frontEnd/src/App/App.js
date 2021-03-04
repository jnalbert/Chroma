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
    try {
      setImageUpload({  preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]})
    } catch (err) {return null}
    
  }
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleUploadToServer = async (e) => {
    e.preventDefault();
    const image = new FormData();
    image.append('file', uploadInputRef.files[0])
  
    const response = await colorizeImage(image)
    
    

    const bytestring = response.data['imageData']
		const imageURL = bytestring.split('\'')[1]
  
		// imagebox.attr('src' , 'data:image/jpeg;base64,'+image)
    setImageDownload({preview: "data:image/jpeg;base64," + imageURL, raw: ""})
    
    if(response.data.isFieri) {
      await sleep(100);
      window.alert("Chroma Says: Congratulations you just got Fieried!!!")
    } 
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