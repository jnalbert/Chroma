import './App.css';
import Upload from './Upload.js';
import ImageBox from './ImageBox.js'
import Nav from './Nav.js'
import Header from './Header.js'
import Footer from './Footer'
import { useState } from 'react'

function App() {
  const [image, setImage] = useState({ preview: "", raw: ""})
  const updateImage = (e) => {
    setImage({  preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]})
  }
  return (
       
  <div>
    <Header />
    <Nav />
    <ImageBox image={image.preview} />
    <Upload updateImage={updateImage}/> 
    <Footer />
  </div>

  );

}

export default App;