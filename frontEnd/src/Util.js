const axios = require('axios')

async function colorizeImage(formData) {
    const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/colorize',
        headers: {
            "Content-Type": 'multipart/form-data'
        },
        data: {
            imgData: formData
        }
      });
    return response
}