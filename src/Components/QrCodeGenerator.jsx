import React, { useState } from 'react'




export const QrCodeGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputSize, setInputSize] = useState('');
  const [image,setImage] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSize = (event) =>{
    setInputSize(event.target.value);
  }

  const generateQR = () =>{
    let qrText = `https://api.qrserver.com/v1/create-qr-code/?size=${inputSize}x${inputSize}&data= ${inputValue}`;
    setImage(qrText);
  }

  return (
   <div className='qr-container'>
   <h3>QR Code Generator in React</h3>
   <div className='input-container'>
    <img src={image}/><br/>
    <input type='text' value={inputValue} onChange={handleInputChange}  placeholder='Enter a URL or Text'/> <br/>
    <input type='text' value={inputSize} onChange={handleInputSize} placeholder='Enter a size'/>
   </div>
    <button type='button' onClick={generateQR}>Generate QR</button>
   </div>
  )
}
