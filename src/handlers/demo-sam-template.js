const axios = require('axios');

const url = process.env.API_URL;

exports.demoSamTemplateHandler = async () => {
  try {
    const request = await axios.get(`${url}`, {});
    return {
      status: request.status,
      message: 'success',
      body: JSON.stringify(request.data),
    };
  } catch (e) {
    return {
      status: 500,
      message: 'fail',
      body: JSON.stringify(e),
    };
  }
};
