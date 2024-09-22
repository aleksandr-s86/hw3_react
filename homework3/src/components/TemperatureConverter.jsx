import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
  
    const handleCelsiusChange = (event) => {
      const value = event.target.value;
      setCelsius(value);
      setFahrenheit((value * 9/5) + 32);
    };
  
    const handleFahrenheitChange = (event) => {
      const value = event.target.value;
      setFahrenheit(value);
      setCelsius((value - 32) * 5/9);
    };
  
    return (
      <div>
        <TextField
          id="celsius"
          label="Цельсия"
          value={celsius}
          onChange={handleCelsiusChange}
          margin="normal"
        />
        <TextField
          id="fahrenheit"
          label="Фаренгейта"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          margin="normal"
        />
      </div>
    );
  };
  
  export default TemperatureConverter;