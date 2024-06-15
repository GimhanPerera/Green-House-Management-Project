import React, { useState, useEffect } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';

export const Profile = () => {

    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                const response = await axios.get('http://localhost:3001/api/green/profile', {
                    headers: {
                        "access-token": accessToken,
                    },
                });
                const data = response.data;
                setProfile({
                    firstName: data.f_name,
                    lastName: data.l_name,
                    email: data.email
                });
            } catch (error) {
                if (error.response.status===402){
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Session expired. Please login again.",
                    confirmButtonColor: "#d33",
                  });
                  setOpen(false); 
                } else {
                  console.error("Error adding sensor:", error);
                  setOpen(false);
                  Swal.fire({
                    title: "Error",
                    text: "Error fetching profile",
                    icon: "error",
                    confirmButtonColor: "#d33",
                  });
                }
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
            await axios.put('http://localhost:3001/api/green/profile', updatedProfile, {
                headers: {
                    "access-token": localStorage.getItem("accessToken"),
                },
            });
            Swal.fire({
                title: "Success",
                text: "Profile updated successfully",
                icon: "success",
                confirmButtonColor: "#d33",
            });
        }catch (error) {
            if (error.response.status===402){
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Session expired. Please login again.",
                confirmButtonColor: "#d33",
              });
              setOpen(false); 
            } else {
              console.error("Error updating profile:", error);
              setOpen(false);
              Swal.fire({
                title: "Error",
                text: "Error updating profile",
                icon: "error",
                confirmButtonColor: "#d33",
              });
            }
          }

    };

    return (
        <Container sx={{ mt: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h4">Selected ID : 2</Typography>
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
