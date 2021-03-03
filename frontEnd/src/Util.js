
const axios = require('axios')

async function colorizeImage(imageData) {
    const data = JSON.stringify(imageData)

    const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/test',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      });
    return response
}

export default colorizeImage 