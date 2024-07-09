import React, { useState } from "react";
import axios from 'axios';
function generateOtp() {
  const [otp, setOtp] = useState('');

  const handleGetOtpClick = async () => {
    try {
      const response = await axios.get('http://localhost:3000/otp');
      setOtp(response.data.text);
    } catch (error) {
      console.error('Error fetching OTP:', error);
    }
  };
}

export default generateOtp;