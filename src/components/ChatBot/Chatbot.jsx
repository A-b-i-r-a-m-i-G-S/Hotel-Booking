import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! How can I help you?' },
    { from: 'human', text: 'Hello' },
    { from: 'bot', text: 'Please tell me your name' },
    { from: 'human', text: 'Ria Kabra' },
    { from: 'bot', text: 'Hello Ria! How old are you?' },
    { from: 'human', text: '21' },
    { from: 'bot', text: 'Ok. Please specify your gender.' },
    { from: 'human', text: 'Female' },
    { from: 'bot', text: 'Alright, how many people are staying with you?' },
    { from: 'human', text: '4' },
    { from: 'bot', text: 'When will you be checking in?' },
    { from: 'human', text: '9th October 2024' },
    { from: 'bot', text: 'How many days will you be staying?' },
    { from: 'human', text: '5' },
    { from: 'bot', text: 'When will you be checking out?' },
    { from: 'human', text: '14th October 2024' }
  ]);

  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { from: 'human', text: input }]);
      setInput('');
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className='chatbot'>
      <div className="left">
        <h1>Hotel Booking Assistant</h1>
        <p>Your one stop solution to all your booking needs</p>
        <img className='logo' src="walle-female-svgrepo-com.svg" alt="Assistant Logo" />
      </div>

      <div className="right">
        <div className="chat-msg">
          {messages.map((msg, index) => (
            <div key={index} className={msg.from === 'bot' ? 'bot-msg' : 'human-msg'}>
              <p>{msg.text}</p>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="input">
          <i className="fas fa-microphone"></i>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
          />
          <i className="far fa-paper-plane" onClick={handleSendMessage}></i>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
