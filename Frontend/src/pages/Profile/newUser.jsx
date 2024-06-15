import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

export const NewUser = () => {
    const [profile, setProfile] = useState({
        firstName: 'Gimhan',
        lastName: 'Perera',
        email: 'gimhan2000@gmail.com'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = () => {
        // Handle profile update logic here
        console.log('Profile updated:', profile);
    };

    return (
        <Container sx={{ mt: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h4">Next ID : 2</Typography>
            </Box>
            <Box component="form" sx={{ mt: 3 }}>
                <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    margin="normal"
                />
                <Button 
                    variant="contained" 
                    color="success" 
                    onClick={handleSubmit} 
                    sx={{ mt: 2 }}
                >
                    Create Profile
                </Button>
            </Box>
        </Container>
    );
};

export default NewUser;

