import { Modal as BaseModal } from "@mui/base/Modal";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { css, styled } from "@mui/system";
import axios from "axios";
import PropTypes from "prop-types";
import * as React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const EditSensor = ({ sensorData }) => {
  const [open, setOpen] = React.useState(false);
  const[sensorId, setSensorId] = useState(sensorData.sensorId);
  const [sensorName, setSensorName] = useState(sensorData.sensorName);
  const [sensorType, setSensorType] = useState("");
  const [sensorDescription, setSensorDescription] = useState(sensorData.description);
  const [maxValue, setMaxValue] = useState(sensorData.upper_limit);
  const [minValue, setMinValue] = useState(sensorData.lower_limit);
  const [unit, setUnit] = useState(sensorData.unit);
  const [unitOptions, setUnitOptions] = useState([]);
  const { state } = useLocation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const tempUnits = ["°C", "°F"];
  const humidityUnits = ["%"];
  const co2Units = ["ppm"];
  const soilPhUnits = ["pH"];
  const soilMoistureUnits = ["%"];

  const handleChange = (event) => {
    const value = event.target.value;
    setSensorType(value);
  };
  useEffect(() => {
    if (sensorData.type === "Temperature") {
      setUnitOptions(tempUnits);
    } else if (sensorData.type === "Humidity") {
      setUnitOptions(humidityUnits);
    } else if (sensorData.type === "CO2") {
      setUnitOptions(co2Units);
    } else if (sensorData.type === "Soil pH") {
      setUnitOptions(soilPhUnits);
    } else if (sensorData.type === "Soil Moisture") {
      setUnitOptions(soilMoistureUnits);
    }
  }, []);

  const handleUnitChange = (event) => {
    const value = event.target.value;
    setUnit(value);
  };
  // Add a function to cancel adding a sensor
  const cancelAdd = () => {
    setOpen(false);
    setSensorName("");
    setSensorType("");
    setSensorDescription("");
    setMaxValue(0);
    setMinValue(0);
    setUnit("");
  };

const editSensor = async () => {
    try {
        const response = await axios.post("http://localhost:3001/api/sensors/edit", {
            sensorId: sensorId,
            sensorName: sensorName,
            description: sensorDescription,
            upper_limit: maxValue,
            lower_limit: minValue,
            unit: unit
        });
        // Assuming response is successful if this line is reached
        Swal.fire({
            title: "Good job!",
            text: "Sensor edited successfully!",
            icon: "success",
            confirmButtonColor: "#017148",
        });
        setOpen(false);



    } catch (error) {
        console.error('Error editing sensor:', error);
        Swal.fire({
            title: "Error",
            text: "There was an error editing the sensor.",
            icon: "error",
            confirmButtonColor: "#d33",
        });
    }
    setOpen(false);
};
  

  return (
    <div>
      <Button variant="contained" id="AddBtn" startIcon={<AddIcon />} onClick={handleOpen} sx={{position:'fixed', right:'40px', top:'100px' }}>
        Edit Sensor
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: StyledBackdrop }}
      >
        <Fade in={open}>
          <ModalContent sx={style}>
            <h2 id="transition-modal-title" className="modal-title">
              Edit Sensor
            </h2>
            <div className="form">
              <div className="sensorName">
              <Box sx={{ m: 1, width: "50%" }}>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label="Sensor ID"
                    variant="outlined"
                    value={sensorId}
                    disabled
                    fullWidth
                  />
                </Box>

                <Box sx={{ m: 1, width: "50%" }}>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label="Sensor Name"
                    variant="outlined"
                    value={sensorName}
                    onChange={(e) => setSensorName(e.target.value)}
                    fullWidth
                  />
                </Box>

              </div>
              <div className="description">
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={3}
                  defaultValue=""
                  variant="outlined"
                    value={sensorDescription}
                  onChange={(e) => setSensorDescription(e.target.value)}
                  fullWidth
                  style={{ width: "98%" }}
                />
              </div>
              <div className="sensorRange">
                <Box sx={{ m: 1, width: "50%" }}>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label="Min Value"
                    type="number"
                    variant="outlined"
                    value={minValue}
                    onChange={(e) => setMinValue(e.target.value)}
                    fullWidth
                  />
                </Box>

                <Box sx={{ m: 1, width: "50%" }}>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label="Max Value"
                    type="number"
                    value={maxValue}
                    variant="outlined"
                    onChange={(e) => setMaxValue(e.target.value)}
                    fullWidth
                  />
                </Box>
              </div>
              <div className="unitButtonContainer">
                <div className="unit">
                  <FormControl sx={{ m: 1, width: "100%" }}>
                    <InputLabel id="demo-multiple-name-label">Unit</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={unit}
                      onChange={handleUnitChange}
                      input={<OutlinedInput label="Name" />}
                      MenuProps={MenuProps}
                      fullWidth
                    >
                      {unitOptions.map((unit) => (
                        <MenuItem key={unit} value={unit}>
                          {unit}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="buttonContainer">
                  <Stack direction="row" spacing={2}>
                    <Button variant="outlined" sx={{ color: 'green', borderColor: 'green' }} onClick={cancelAdd}>Cancel</Button>
                    <Button variant="contained" sx={{ bgcolor: 'green' }} endIcon={<AddIcon />} onClick={editSensor}>Save</Button>
                  </Stack>
                </div>
              </div>
            </div>
          </ModalContent>
        </Fade>
      </Modal>
    </div>
  );
};

const Backdrop = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return (
    <Fade in={open}>
      <div ref={ref} {...other} />
    </Fade>
  );
});

Backdrop.propTypes = {
  open: PropTypes.bool,
};

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};
const green = {
  200: "#99FFCC",
  300: "#66FF99",
  400: "#33FF66",
  500: "#00FF33",
  600: "#00E52B",
  700: "#00CC22",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
};

const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
    padding: 24px;
    color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `
);
