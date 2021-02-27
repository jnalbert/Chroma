import './App.css';
import Upload from './Upload.js';

function App() {
  return (
    <div class="w3-content">

      {/* <!-- Header --> */}
      <header class="w3-panel w3-center w3-opacity">
        <h1 class="w3-xlarge">Introducing</h1>
        <h1>Chroma</h1>
        
        <div class="w3-padding-32">
          <div class="w3-bar w3-border">
            <p  class="w3-bar-item w3-button">About</p>
            <p  class="w3-bar-item w3-button">Portfolio</p>
            <p class="w3-bar-item w3-button">Try Yourself!</p>
          </div>
        </div>
      </header>

      {/* <!-- Photo Grid --> */}
      <div class="w3-row-padding w3-grayscale">
        <div class="w3-half">
        </div>

        <div class="w3-half">
          
        </div>
      </div>
        

{/* //Upload Button */}
<div>
  <Upload/>
</div>

{/* //end page */}
</div>
  );

}

export default App;