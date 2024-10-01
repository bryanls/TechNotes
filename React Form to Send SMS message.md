**Integrating with an SMS Gateway or API**

To send an SMS message, you'll need to integrate with an SMS gateway or API. Here are the general steps:

### Step 1: Choose an SMS Gateway or API

There are many SMS gateways and APIs available, such as:

- Twilio
- Nexmo
- MessageBird
- Vonage
- Amazon SNS

Choose one that fits your needs and budget.

### Step 2: Create an Account and Get API Credentials

Create an account with the chosen SMS gateway or API and obtain the necessary API credentials, such as:

- API key
- API secret
- Account SID
- Auth token

### Step 3: Install the Required Library or SDK

Install the required library or SDK for the chosen SMS gateway or API. For example:

- Twilio: `npm install twilio`
- Nexmo: `npm install nexmo`

### Step 4: Import the Library and Set API Credentials

Import the library and set the API credentials in your React component:
 ```jsx
 import Twilio from 'twilio';

const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const client = new Twilio(accountSid, authToken);
```

### Step 5: Send the SMS Message

Modify the `handleSubmit` function to send the SMS message using the chosen SMS gateway or API:
```jsx
const handleSubmit = (event) => {
  event.preventDefault();
  const message = client.messages
    .create({
      from: 'your_twilio_phone_number',
      to: phoneNumber,
      body: message,
    })
    .then((message) => console.log(message.sid))
    .done();
};
```

**Example with Twilio**

Here's the updated `SmsForm` component with Twilio integration:
```jsx
import React, { useState } from 'react';
import twilio from 'twilio';

const SmsForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const accountSid = 'your_account_sid';
  const authToken = 'your_auth_token';
  const client = new twilio(accountSid, authToken);

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    return regex.test(phoneNumber);
  };

  const validateMessage = (message) => {
    return message.length > 0 && message.length <= 160;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validatePhoneNumber(phoneNumber) && validateMessage(message)) {
      setIsValid(true);
      client.messages
        .create({
          from: 'your_twilio_phone_number',
          to: phoneNumber,
          body: message,
        })
        .then((message) => {
          console.log(`SMS sent successfully: ${message.sid}`);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError('Invalid phone number or message');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone Number:
        <input
          type="tel"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          required
          pattern="\d{3}-\d{3}-\d{4}"
          title="Phone number must be in the format XXX-XXX-XXXX"
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          maxLength="160"
          minLength="1"
        />
      </label>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isValid && <p style={{ color: 'green' }}>SMS sent successfully!</p>}
      <button type="submit">Send SMS</button>
    </form>
  );
};

export default SmsForm;
```

**Note:** Make sure to replace the placeholders with your actual API credentials and phone number.