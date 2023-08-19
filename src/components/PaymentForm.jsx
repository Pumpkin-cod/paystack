/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, VStack } from '@chakra-ui/react';
import { PaystackButton } from 'react-paystack'; // Correct import for PaystackButton

const PaymentForm = () => {
    const publicKey = "pk_test_9edca9ae4e5fed53a0bfa14c58d753f772b50a33"
    // const amount = 1000000;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !amount) {
            console.log('All fields are mandatory');
            return;
        }

        const paymentData = {
            name,
            email,
            amount: parseFloat(amount),
        };

        console.log('Payment data:', paymentData);

        setName('');
        setEmail('');
        setAmount('');
    };

    const componentProps = {
        email,
        amount: amount * 100,
        currency: "GHS",
        metadata: {
            name,
            amount,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () => alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert(" Are you sure you want to exit??"),
    }

    return (
        <Box p={4} display="flex" justifyContent="center" alignItems="center" height="100vh">
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
                <VStack spacing={4}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            required
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="john@example.com"
                            required
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Amount</FormLabel>
                        <Input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="100"
                            required
                        />
                    </FormControl>
                    <PaystackButton
                        className="paystack-button"
                        {...componentProps}
                        customButtonStyles={{ backgroundColor: "white", color: "white", cursor: "pointer" }} // Teal color styles
                    >
                    </PaystackButton>
                    {/* <Button colorScheme="teal" type="submit">
                        Pay Now
                    </Button> */}
                </VStack>
            </form>
        </Box>
    );
};

export default PaymentForm;
