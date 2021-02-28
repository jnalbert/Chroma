const axios = require('axios')

async function colorizeImage(imageString) {
    const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/colorize',
        headers: {
            "Content-Type": 'multipart/form-data'
        },
        data: {
            image: imageString
        }
      });
    return response
}

export default colorizeImage