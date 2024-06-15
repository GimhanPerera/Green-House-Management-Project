import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';

export const Profile = () => {
    const navigate = useNavigate();

    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/green/profile/2');
                const data = response.data;
                setProfile({
                    firstName: data.f_name,
                    lastName: data.l_name,
                    email: data.email
                });
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        };

        fetchProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(profile.email)) {
            setError('Invalid email format');
            return;
        }
        setError('');
        try {
            const updatedProfile = {
                f_name: profile.firstName,
                l_name: profile.lastName,
                email: profile.email
            };
            await axios.put('http://localhost:3001/api/green/profile/2', updatedProfile);
            Swal.fire({
                title: "Profile updated successfully!",
                icon: "success",
                confirmButtonText: "OK",
            });
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <Container sx={{ mt: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h4">Selected ID : 2</Typography>
                <Button variant="contained" color="success" onClick={() => navigate('/system/profile/new_user')}>Add new user</Button>
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
                    error={!!error}
                    helperText={error}
                />
                <Button 
                    variant="contained" 
                    color="success" 
                    onClick={handleSubmit} 
                    sx={{ mt: 2 }}
                >
                    Update Profile
                </Button>
            </Box>
        </Container>
    );
};

export default Profile;
