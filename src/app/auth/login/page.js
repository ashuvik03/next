"use client"
import axios from 'axios';

const OTPLogin = {

  sendOTP: async (phoneNumber) => {
    try{ 
      const response = await axios.post('https://jsonplaceholder.typicode.com/users',{phoneNumber});
      return console.log(response.data);
  }
  catch(error){
    throw error;
  }

},
login: async ( otp) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
      otp,
    });
    return console.log(response.data);
  } catch (error) {
    throw error;
  }
},



};

export default OTPLogin;






















{/*const handleData = (e) => {
        setPhoneNumber({...phoneNumber, number:e.target.value})
 
    }
  const [phoneNumber, setPhoneNumber] = useState({number:''});
  const [message, setMessage] = useState('');

  const handleSendOTP = async () => {
    try {
      await axios.post('https://jsonplaceholder.typicode.com/users',phoneNumber)
      .then((res)=>{console.log(res)})

      setMessage('OTP sent successfully');
    } catch (error) {
      console.error('Error sending OTP:', error);
      setMessage('Failed to send OTP');
    }
  };



  return (
    <><h1>OTP Login</h1><div>
          <label>Phone Number:</label>
          <br />
          <input type="number" value={phoneNumber.number} onChange={handleData} />
      </div><div>
              <button onClick={handleSendOTP}>Send OTP</button>
          </div><div>{message}</div></>
  );
};*/}


