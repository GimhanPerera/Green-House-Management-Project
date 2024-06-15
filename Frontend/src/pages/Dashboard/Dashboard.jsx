import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { getSensors } from "../../FrontEndServices/SensorServices";
import { AddSensor } from "../../components/AddSensor/AddSensor";
import "./Dashboard.css";

export const Dashboard = () => {
  const spacing = 2;
  const [sensors, setSensors] = useState([]);
  const navigate = useNavigate(); // Create a navigate function

  // useEffect is a hook that runs after the first render and every time the component updates
  //to fetch the sensors from the backend which are related to the user
  useEffect(() => {
    setSensors(getSensors());
  }, []);

  return (
    <div style={{ marginTop: "1rem" }}>
      <div className="addSensorContainer">
        <AddSensor />
      </div>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {sensors.map((sensor) => (
              <Grid key={sensor.id} item>
                <Card
                  sx={{ maxWidth: 311 }}
                  className="sensorCard"
                  onClick={() => navigate(`/sensor/${sensor.id}`)}
                >
                  <CardMedia
                    sx={{ height: 126 }}
                    image={sensor.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {sensor.name}
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
                              color: sensor.status === "OK" ? "green" : "red",
                            }}
                          >
                            {sensor.status}
                          </div>
                        </div>
                        <div>
                          <div className="sensorReadingContainer">
                            <Typography
                              gutterBottom
                              variant="h4"
                              component="div"
                            >
                              {sensor.lastUpdate}
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
