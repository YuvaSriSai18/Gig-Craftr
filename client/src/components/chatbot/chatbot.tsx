import React, { useState } from 'react';
import { Box, TextField, Button, IconButton, Fab } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import ChatIcon from '@mui/icons-material/Chat';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Toggles the chat window open or closed
  const toggleChat = () => setOpen(!open);

  // Handles sending a message
  const sendMessage = async () => {
    if (input.trim() === '') return; // Prevent empty input submission

    const userMessage = { sender: 'You', text: input };
    setMessages([...messages, userMessage]);

    try {
      // Sending the message to the Flask backend
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }), // Send message in the body
      });

      const data = await response.json(); // Get the response from the backend
      const botMessage = { sender: 'Bot', text: data.answer }; // Create the bot response

      // Append both the user message and bot message to the chat history
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const botMessage = { sender: 'Bot', text: 'Sorry, something went wrong.' };
      setMessages([...messages, userMessage, botMessage]);
    }

    setInput(''); // Clear the input field after message is sent
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        width: open ? 320 : 'auto',
        height: open ? 400 : 'auto',
        bgcolor: open ? 'background.paper' : 'transparent',
        boxShadow: open ? 3 : 'none',
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}
    >
      {!open && (
        <Fab
          color="primary"
          onClick={toggleChat}
          aria-label="chat"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          <ChatIcon />
        </Fab>
      )}

      {open && (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              padding: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>Chat with us!</div>
            <IconButton onClick={toggleChat} color="inherit">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Chat history */}
          <Box sx={{ flexGrow: 1, padding: 1, overflowY: 'auto' }}>
            {messages.map((msg, index) => (
              <div key={index} style={{ margin: '5px 0' }}>
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </Box>

          {/* Message input field */}
          <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') sendMessage();
              }} // Send message on pressing Enter key
            />
            <Button variant="contained" color="primary" sx={{ ml: 1 }} onClick={sendMessage}>
              <SendIcon />
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Chatbot;
