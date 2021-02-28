const axios = require('axios')

async function colorizeImage(formData) {
    const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/colorize',
        headers: {
            
        }
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }
      });
}