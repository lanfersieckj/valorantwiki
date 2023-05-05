import React from 'react';
import { Box } from '@chakra-ui/react';
import Chatbot from '../chatbot/chatbot';

//creates spacing to compensate for navbar (wraps all other pages)
const Main = ({ children }) => {
  return (
    <Box as="main" pt="100px" minH="100vh" width="100%">
      {children}
      <Chatbot/>
    </Box>
  );
};

export default Main;
