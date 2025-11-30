import React, { useState } from "react";
import "./Feedback.css";

function Feedback() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just show an alert
    alert(`Thank you for your feedback!\nEmail: ${email}\nMessage: ${message}`);

    // Clear form fields
    setEmail("");
    setMessage("");
  };

  return (
    <div className="feedback-container">
      <h2>Give Your Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
