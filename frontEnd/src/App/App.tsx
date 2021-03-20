import './App.css';
import Upload from '../Upload/Upload';
import ImageBox from '../ImageBox/ImageBox'
import Nav from '../Nav/Nav'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useState } from 'react'
import colorizeImage from '../Util.js'
import {imageState} from '../types'

function App () {
  const [imageUpload, setImageUpload] = useState<imageState>({preview: "", raw: null})
  const [imageDownload, setImageDownload] = useState<imageState>({ preview: "", raw: null})
  const [uploadInputRef, setUploadInputRef] = useState<any>();

  const updateImage = (e: any) => {
    try {
      setImageUpload({  preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]})
    } catch (err) {return null}
    
  }
  const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleUploadToServer = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    const image = new FormData();
    image.append('file', uploadInputRef.files[0])
  
    const response = await colorizeImage(image)
    
    

    const bytestring: string = response.data['imageData']
		const imageURL = bytestring.split('\'')[1]
  
		// imagebox.attr('src' , 'data:image/jpeg;base64,'+image)
    setImageDownload({preview: "data:image/jpeg;base64," + imageURL, raw: null})
    
    if(response.data.isFieri) {
      await sleep(100);
      window.alert("Chroma Says: Congratulations you just got Fieried!!!")
    } 
    
  }

  const setInputRef = (ref: any) => {
    setUploadInputRef(ref)
  }
  return (
       
  <div>
    <Header />
    <Nav />
    <ImageBox imageUpload={imageUpload?.preview} imageDownload={imageDownload?.preview} />
    <Upload updateImage={updateImage} handleUploadToServer={handleUploadToServer} setInputRef={setInputRef}/> 
    <Footer />
  </div>

  );

}

export default App;