
const axios = require('axios')

async function colorizeImage(imageData) {
    // const data = JSON.stringify(imageData)

    const response = axios.post('http://127.0.0.1:5000/colorize', imageData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })

    // const response = await axios({
    //     method: 'post',
    //     url: 'http://127.0.0.1:5000/colorize',
    //     headers: { 
    //       'Content-Type': 'multipart/form-data', 
    //       'Access-Control-Allow-Origin': '*'
    //     },
    //     data : imageData
    //   });
    return response
}

export default colorizeImage 