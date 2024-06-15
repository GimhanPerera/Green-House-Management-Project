import { Box, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { EditSensor } from "../../components/EditSensoe/EditSensor";
import "./Sensor.css";

//Table theme
const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color:
    theme.palette.mode === "light"
      ? "rgba(0,0,0,.85)"
      : "rgba(255,255,255,0.85)",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: theme.palette.mode === "light" ? "#fafafa" : "#1d1d1d",
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
    }`,
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
    }`,
  },
  "& .MuiDataGrid-cell": {
    color:
      theme.palette.mode === "light"
        ? "rgba(0,0,0,.85)"
        : "rgba(255,255,255,0.65)",
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
  },
  //...customCheckbox(theme),
}));

export const Sensor = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Catch the sensor ID from the URL
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state } = useLocation(); // Retrieve state passed from navigate
  const sensor = state ? state.sensor : null; // Access sensor data from state

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios.get(`http://localhost:3001/api/sensors/historyById/${id}`, {
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
        setRows(formattedRows);
        console.log(formattedRows);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const toBack = () => {
    navigate("./../..");
  };

  const columns = [
    { field: "historyId", headerName: "ID", width: 100, editable: false },
    { field: "dateTime", headerName: "Date Time", width: 200, editable: false },
    {
      field: "measurement",
      headerName: "Measure",
      width: 100,
      editable: false,
    },
    { field: "status", headerName: "Status", width: 130, editable: false },
  ];

  if (loading) return <h2>Loading...</h2>;

  const sensorData = {
    type: sensor.type,
    sensorId: sensor.sensorId,
    sensorName: sensor.sensorName,
    upper_limit: sensor.upper_limit,
    lower_limit: sensor.lower_limit,
    unit: sensor.unit,
    description: sensor.description,
  };

  return (
    <>
      <div className="editPgBtns">
        <div style={{ marginLeft: "3rem" }}>
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
            onClick={toBack}
            size="large"
          >
            Back
          </Button>
        </div>
        <div className="sensorNameDiv">
          <h1>{sensor.sensorName}</h1>
        </div>
        <div className="editButton">
          <EditSensor sensorData={sensorData} />
        </div>
      </div>

      <Box component="div" sx={{}}>
        <div>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid md={6} className="sensorInfoLabel">
                Status :
              </Grid>
              <Grid md={6} className="sensorInfo">
                <div style={{ color: sensor.sensorStatus === "Ok" ? "green" : "red"}}>
                  {sensor.sensorStatus}
                </div>
              </Grid>
              <Grid md={6} className="sensorInfoLabel">
                Upper Limit :
              </Grid>
              <Grid md={6} className="sensorInfo">
                {sensor.upper_limit} {sensor.unit}
              </Grid>
              <Grid md={6} className="sensorInfoLabel">
                Lower Limit :
              </Grid>
              <Grid md={6} className="sensorInfo">
                {sensor.lower_limit} {sensor.unit}
              </Grid>
              <Grid md={6} className="sensorInfoLabel">
                Last Update :
              </Grid>
              <Grid md={6} className="sensorInfo">
                {sensor.lastUpdate} {sensor.unit}
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
      <Box component="div" sx={{}}>
        {/* Sensor information */}
      </Box>
      <Container>
        {/* Table section */}
        <Box sx={{ height: 400, mb: "2rem" }}>
          <StyledDataGrid
            sx={{ border: "1px solid gray", width: "700px", margin: "auto" }}
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
