```javascript
import React, { useState } from 'react';

const IncInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Regular expression to match "INC" followed by exactly 6 digits
    const regex = /^INC\d{6}$/;

    if (regex.test(value)) {
      setError('');
    } else {
      setError('Input must start with "INC" followed by exactly 6 digits.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!error && inputValue) {
      // Handle valid input submission
      console.log('Submitted:', inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your input:
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="INC123456"
        />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" disabled={!!error}>
        Submit
      </button>
    </form>
  );
};

export default IncInput;
```