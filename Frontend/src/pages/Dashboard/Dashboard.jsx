import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { getImageLink } from "../../FrontEndServices/SensorServices";
import { AddSensor } from "../../components/AddSensor/AddSensor";
import "./Dashboard.css";
import Swal from "sweetalert2";

export const Dashboard = () => {
  const spacing = 2;
  const [loading, setLoading] = useState(true);
  const [sensors, setSensors] = useState([]);
  const navigate = useNavigate(); // Create a navigate function

  const fetchSensors = async () => {
    setLoading(true);
    //const accessToken = req.headers["access-token"]  This is how token is validated in the backend
    const id = '1'; // User ID should be here
    const accessToken = localStorage.getItem("accessToken"); // Get the token from local storage
    try {
      const response = await axios.get(`http://localhost:3001/api/sensors/sensorDataByUserId`, {
        headers: {
          "access-token": accessToken,
        },
      });
      setSensors(response.data);
    } catch (error) {
      if(error.status===402){
        navigate('../login');  
      }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error fetching sensors!",
        });
        console.log(error);
      }
    }
    setLoading(false);
  };


  useEffect(() => {
    fetchSensors();
  }, []);

  return (
    <div style={{ marginTop: "1rem" }}>
      <div className="addSensorContainer" style={{height:'3rem'}}>
        <AddSensor onSensorAdded={fetchSensors}/>
      </div>
      <Grid sx={{ flexGrow: 1 }} spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {sensors.map((sensor) => (
              console.log(sensor),
              <Grid key={sensor.id} item>
                <Card
                  sx={{ width: 311, minHeight:340 }}
                  className="sensorCard"
                  onClick={() => navigate(`./sensor/${sensor.sensorId}`, { state: { sensor } })}
                >
                  <CardMedia
                    sx={{ height: 126 }}
                    image={getImageLink(sensor.type)}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {sensor.sensorName}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {sensor.type}
                    </Typography>
                    <Typography
                      className="cardDescription"
                      variant="body2"
                      color="text.secondary"
                    >
                      {sensor.description}
                    </Typography>
                    <Typography gutterBottom component="div">
                      <div className="sensorStatusContainer">
                        <div>
                          <div>Last Update:</div>
                          <div
                            className="sensorStatus"
                            style={{
                              color: sensor.sensorStatus === "Ok" ? "green" : "red",
                            }}
                          >
                            {sensor.sensorStatus}
                          </div>
                        </div>
                        <div>
                          <div className="sensorReadingContainer">
                            <Typography
                              gutterBottom
                              variant="h4"
                              component="div"
                            >
                              {sensor.lastUpdate ? sensor.lastUpdate: '-'}
                            </Typography>
                            {sensor.unit}
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
