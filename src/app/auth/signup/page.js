// components/APIService.js
import axios from 'axios';

const APIService = {
  sendOTP: async (phoneNumber) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
        phoneNumber, 
      });
      return console.log(response.data);
    } catch (error) {
      throw error;
    }
  },

  login: async (phoneNumber, otp) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
        phoneNumber,
        otp,
      });
      return console.log(response.data);
    } catch (error) {
      throw error;
    }
  },
};

export default APIService;
