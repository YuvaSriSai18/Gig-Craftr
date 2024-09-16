import React from 'react';
import { Box, TextField, Button, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const Chatbot = () => {
  const [open, setOpen] = React.useState(true);

  const toggleChat = () => setOpen(!open);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        width: 320,
        height: open ? 400 : 0,
        bgcolor: 'background.paper',
        boxShadow: 3,
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'height 0.3s ease'
      }}
    >
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
