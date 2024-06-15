import React, { useState, useEffect } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

export const Profile = () => {

    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const [passwords, setPasswords] = useState({
        newPassword: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');
    const [passwordError, setPasswordError] = useState('');

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
                if (error.response.status === 402) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Session expired. Please login again.",
                        confirmButtonColor: "#d33",
                    });
                } else {
                    console.error("Error fetching profile:", error);
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

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
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
        } catch (error) {
            if (error.response.status === 402) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Session expired. Please login again.",
                    confirmButtonColor: "#d33",
                });
            } else {
                console.error("Error updating profile:", error);
                Swal.fire({
                    title: "Error",
                    text: "Error updating profile",
                    icon: "error",
                    confirmButtonColor: "#d33",
                });
            }
        }
    };

    const handlePasswordSubmit = async () => {
        const schema = Yup.object().shape({
            newPassword: Yup.string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters")
                .max(25, "Password must be less than 26 characters")
                .matches(/[A-Z]/, "Password should include at least one uppercase letter")
                .matches(/[a-z]/, "Password should include at least one lowercase letter"),
            confirmPassword: Yup.string()
                .required("Confirm password is required")
                .oneOf([Yup.ref('newPassword'), null], "Confirm password should be the same as the password")
        });
    
        try {
            await schema.validate(passwords);
            setPasswordError('');
    
            const updatedPassword = {
                password: passwords.newPassword
            };
    
            await axios.put('http://localhost:3001/api/green/profile/password', updatedPassword, {
                headers: {
                    "access-token": localStorage.getItem("accessToken"),
                },
            });
    
            Swal.fire({
                title: "Success",
                text: "Password updated successfully",
                icon: "success",
                confirmButtonColor: "#d33",
            });
            setPasswords({ newPassword: '', confirmPassword: '' });
    
        } catch (error) {
            if (error.name === 'ValidationError') {
                setPasswordError(error.message);
            } else {
                if (error.response && error.response.status === 402) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Session expired. Please login again.",
                        confirmButtonColor: "#d33",
                    });
                } else {
                    console.error("Error updating password:", error);
                    Swal.fire({
                        title: "Error",
                        text: "Error updating password",
                        icon: "error",
                        confirmButtonColor: "#d33",
                    });
                }
            }
        }
    };

    return (
        <Container sx={{ mt: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5">Update Profile Details</Typography>
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
            <Box sx={{ mt: 5, mb: 5 }}>
                <Typography variant="h5">Update Password</Typography>
                <TextField
                    fullWidth
                    label="New Password"
                    name="newPassword"
                    type="password"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={passwords.confirmPassword}
                    onChange={handlePasswordChange}
                    margin="normal"
                    error={!!passwordError}
                    helperText={passwordError}
                />
                <Button 
                    variant="contained" 
                    color="success" 
                    onClick={handlePasswordSubmit} 
                    sx={{ mt: 2 }}
                >
                    Update Password
                </Button>
            </Box>
        </Container>
    );
};

export default Profile;
