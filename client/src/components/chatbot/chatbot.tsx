import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField, Button, IconButton, Fab, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import ChatIcon from '@mui/icons-material/Chat';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const toggleChat = () => setOpen(!open);

  const sendMessage = async () => {
    if (input.trim() === '') return;
    const userMessage = { sender: 'You', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]); // Add the user's message first

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { sender: 'Bot', text: data.answer };
      setMessages((prevMessages) => [...prevMessages, botMessage]); // Only add the bot's message after the response
    } catch (error) {
      console.error('Error:', error);
      const botMessage = { sender: 'Bot', text: 'Sorry, something went wrong.' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }

    setInput(''); // Clear the input after sending the message
  };

  // Scroll to the bottom whenever the messages array changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <Draggable handle=".drag-handle">
      <ResizableBox
        width={320}
        height={400}
        minConstraints={[320, 300]}
        maxConstraints={[600, 600]}
        resizeHandles={['se', 's', 'e']}
        handleSize={[20, 20]}
        style={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
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
              sx={{
                position: 'fixed',
                bottom: 16,
                right: 16, // Aligns the button to the bottom-right corner
              }}
            >
              <ChatIcon />
            </Fab>
          )}

          {open && (
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box
                className="drag-handle"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  padding: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'move', // Change cursor when dragging
                }}
              >
                <Typography>Chat with us!</Typography>
                <IconButton onClick={toggleChat} color="inherit">
                  <CloseIcon />
                </IconButton>
              </Box>

              <Box sx={{ flexGrow: 1, padding: 1, overflowY: 'auto' }}>
                {messages.map((msg, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: msg.sender === 'You' ? 'flex-end' : 'flex-start',
                      marginBottom: '10px',
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: '70%',
                        padding: '8px 12px',
                        borderRadius: '12px',
                        bgcolor: msg.sender === 'You' ? 'gray' : '#1976d2',
                        color: 'white',
                        wordBreak: 'break-word',
                      }}
                    >
                      <Typography variant="body2">{msg.text}</Typography>
                    </Box>
                  </Box>
                ))}
                <div ref={messagesEndRef} /> {/* This is the ref to scroll to */}
              </Box>

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
                  }}
                />
                <Button variant="contained" color="primary" sx={{ ml: 1 }} onClick={sendMessage}>
                  <SendIcon />
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </ResizableBox>
    </Draggable>
  );
};

export default Chatbot;
