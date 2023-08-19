/* eslint-disable no-unused-vars */
import React from 'react';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';
import PaymentForm from './components/paymentForm';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Box
         bg="teal" // Add a background color to visualize the form container
          p={8}
          width="100%"
          maxWidth="400px"
          borderRadius="md"
          boxShadow="md"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <PaymentForm />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;

