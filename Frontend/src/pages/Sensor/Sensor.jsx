import { Box, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  DataGrid
} from '@mui/x-data-grid';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

//Table theme
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
      borderRight: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
          }`,
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
      borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
          }`,
  },
  '& .MuiDataGrid-cell': {
      color:
          theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
  },
  '& .MuiPaginationItem-root': {
      borderRadius: 0,
  },
  //...customCheckbox(theme),
}));


export const Sensor = () => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const id = 'S001';
      axios.get(`http://localhost:3001/api/sensors/historyById/${id}`)
          .then((response) => {
              // Format date-time strings
              const formattedRows = response.data.map(entry => ({
                  ...entry,
                  dateTime: new Date(entry.dateTime).toLocaleString('en-US', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit'
                  })
              }));
              setRows(formattedRows);
              setLoading(false);
          })
          .catch(error => {
              console.error(error);
              setLoading(false);
          });
  }, []);

  const toBack = () => {
      navigate('./..');
  };

  const columns = [
      { field: 'historyId', headerName: 'ID', width: 100, editable: false },
      { field: 'dateTime', headerName: 'Date Time', width: 200, editable: false },
      { field: 'measurement', headerName: 'Measure', width: 100, editable: false },
      { field: 'status', headerName: 'Status', width: 130, editable: false },
  ];

  if (loading) return <h2>Loading...</h2>;

  return (
      <>
      {/* Back button */}
        <Button variant='outlined' onClick={toBack} sx={{  m: '30px 0 0 30px' }} size='large'>Back</Button>
        {/* Save button */}
        <Button variant="contained"  sx={{ position: 'fixed', right: '0', m: '30px 50px 0 0' }} size='large'>Edit</Button>
      <Box component="div" sx={{}}>
        <div>
          <Box component="h1" sx={{ textAlign: 'center', backgroundColor:'blue'}}>Sensor Name:</Box>
          <Box component="h4" sx={{ textAlign: 'center' }}>Sensor ID: </Box>
          <Box component="h4" sx={{ textAlign: 'center' }}>Status:</Box>
          <Box component="h4" sx={{ textAlign: 'center' }}>Upper limit: </Box>
          <Box component="h4" sx={{ textAlign: 'center' }}>Lower limit: </Box>
          <Box component="h4" sx={{ textAlign: 'center' }}>Last update:</Box>
          </div>

</Box>          
          <Box component="div" sx={{}}>
              {/* Sensor information */}
          </Box>
          <Container>
              {/* Table section */}
              <Box sx={{ height: 400, mb: '2rem' }}>
                  <StyledDataGrid
                      sx={{ border: '1px solid gray', width: '700px', margin: 'auto' }}
                      rows={rows}
                      columns={columns}
                      getRowId={(row) => row.historyId} 
                  />
              </Box>
          </Container>
          <ToastContainer />
      </>
  );
};

