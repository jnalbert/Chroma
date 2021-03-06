const axios = require('axios')

async function colorizeImage(imageString) {
    const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/colorize',
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-Type": 'multipart/form-data'
        },
        data: {
            'image': imageString
        }
      });
    return response
}

const res = colorizeImage("test")

console.log(res)