import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styled DataGrid component
const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color:
    theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',
  '& .MuiDataGrid-columnsContainer': {
    backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
    borderRight: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'}`,
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'}`,
  },
  '& .MuiDataGrid-cell': {
    color:
      theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
  },
  '& .MuiPaginationItem-root': {
    borderRadius: 0,
  },
}));

const AlertPage = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get('http://localhost:3001/api/alert/getData', {
        headers: {
          "access-token": accessToken,
        },
      })
      .then((response) => {
        // Format date-time strings
        const formattedRows = response.data.map((entry) => ({
          ...entry,
          dateTime: new Date(entry.dateTime).toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
        }));
        setAlerts(formattedRows);
        console.log(formattedRows);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const columns = [
    { field: 'alertId', headerName: 'Alert ID', width: 100 },
    { field: 'alert', headerName: 'Alert', width: 200 },
    { field: 'dateTime', headerName: 'Alert Date & Time', width: 200 },
    { field: 'sensorSensorId', headerName: 'Sensor Id', width: 100 },
  ];

  if(loading) return null;
  return (
    <>
      <Box component="div" sx={{}}>
        <Box component="h1" sx={{ textAlign: 'center', backgroundColor: '#00cc00', color: '#ffffff' }}>Alerts</Box>
      </Box>
      <Container>
        {/* Table section */}
        <Box sx={{ height: 400, mb: '2rem', marginTop:'20px'}}>
          <StyledDataGrid
            sx={{ border: '1px solid gray', width: '700px', margin: 'auto' }}
            rows={alerts}
            columns={columns}
            getRowId={(alerts) => alerts.alertId}
          />
        </Box>
      </Container>
      <ToastContainer />
    </>
  );
};

export default AlertPage;
