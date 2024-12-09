import React from 'react';
import './ChatbotSection.css';

const ChatbotSection = () => {
  return (
    <section id="contact">
      <h3>Let's Talk Here</h3>
      <div className="chatbot-container">
        <input type="text" id="chat-input" placeholder="Ask your question..." />
        <button id="send-btn">Send</button>
      </div>
    </section>
  );
};

export default ChatbotSection;
