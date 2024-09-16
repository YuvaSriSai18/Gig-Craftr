import React from 'react';
import { Box, TextField, Button, IconButton, Fab } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import ChatIcon from '@mui/icons-material/Chat';

const Chatbot = () => {
  const [open, setOpen] = React.useState(false); // Start with the chat closed

  const toggleChat = () => setOpen(!open);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        width: open ? 320 : 'auto', // Adjust width when open/closed
        height: open ? 400 : 'auto', // Adjust height when open/closed
        bgcolor: open ? 'background.paper' : 'transparent',
        boxShadow: open ? 3 : 'none',
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}
    >
      {!open && (
        <Fab color="primary" onClick={toggleChat} aria-label="chat" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
          <ChatIcon />
        </Fab>
      )}

      {open && (
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              padding: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>Chat with us!</div>
            <IconButton onClick={toggleChat} color="inherit">
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              padding: 1,
              overflowY: 'auto'
            }}
          >
            {/* Messages will be displayed here */}
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: 1
            }}
          >
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              placeholder="Type a message..."
            />
            <Button variant="contained" color="primary" sx={{ ml: 1 }}>
              <SendIcon />
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Chatbot;
