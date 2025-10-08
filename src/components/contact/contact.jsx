import React from 'react';
import './contact.css';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "860bdf79-ed62-4a2c-9a15-6659d95e4a96");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2 className="contact-title">Get In Touch</h2>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message" 
              placeholder="Your Message"
              className="form-textarea"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="form-submit-btn">Send Message</button>
        </form>
        <span className="form-result">{result}</span>
      </div>
    </div>
  );
}