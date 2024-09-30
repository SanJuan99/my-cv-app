import React, { useState } from 'react';

function Contact() {
  // State för att lagra formulärdata (namn, e-post, meddelande)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Uppdaterar state när användaren skriver i formuläret
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Hanterar inskickning av formuläret
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Här kan du skicka datan till en server eller visa ett meddelande till användaren
  };

  return (
    <div>
      <h1>Kontakt</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Namn:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>E-post:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Meddelande:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Skicka</button>
      </form>
    </div>
  );
}

export default Contact;