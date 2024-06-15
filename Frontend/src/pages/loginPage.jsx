import React, { useState } from 'react';
import { Box, Button, TextField, IconButton, InputAdornment, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/system';

const LoginBox = styled(Box)({
    backgroundColor: '#145a32',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    maxWidth: '400px',
    margin: 'auto',
});

const LoginPage = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <Box
            component="div"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#e6ede6',
            }}
        >
            <LoginBox>
                <Typography variant="h4" component="h2" sx={{ color: 'white', mb: 2 }}>
                    Login
                </Typography>
                <form>
                    <TextField
                        fullWidth
                        label="User ID"
                        variant="outlined"
                        margin="normal"
                        required
                        InputLabelProps={{ style: { color: '#666' } }}
                        InputProps={{
                            style: { backgroundColor: 'white', color: '#666' },
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        required
                        type={passwordShown ? 'text' : 'password'}
                        InputLabelProps={{ style: { color: '#666' } }}
                        InputProps={{
                            style: { backgroundColor: 'white', color: '#666' },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={togglePasswordVisibility}>
                                        {passwordShown ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2, backgroundColor: '#28a745', '&:hover': { backgroundColor: '#218838' } }}
                    >
                        Login
                    </Button>
                </form>
            </LoginBox>
        </Box>
    );
};

export default LoginPage;
