import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { getSensors } from "../../FrontEndServices/SensorServices";
import './SensorList.css';

export const SensorList = () => {
  const [spacing, setSpacing] = useState(2);
  const [sensors, setSensors] = useState([]);
  const navigate = useNavigate(); // Create a navigate function

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;
  useEffect(() => {
    setSensors(getSensors());
  }, []);

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {sensors.map((sensor) => (
            <Grid key={sensor.id} item>
              <Card sx={{ maxWidth: 311 }} className="sensorCard" onClick={() => navigate(`/sensor/${sensor.id}`)}>
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
                  <Typography className="cardDescription" variant="body2" color="text.secondary">
                    {sensor.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
