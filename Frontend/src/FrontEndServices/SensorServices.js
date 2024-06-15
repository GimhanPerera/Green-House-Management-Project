import { Select } from "@mui/material";
//status is eiter OK ,inactive or High or Low
const sensors = [
  {
    id: 1,
    name: "Temp1",
    type: "Temperature",
    unit: "°C",
    status: "OK",
    values: [
      //values are sorted by dateTime values randomly between 25 to 30. differ according to hour of day. noon is pewak time
      { dateTime: "2024-06-01 00:00:00", value: 25 },
      { dateTime: "2024-06-01 01:00:00", value: 25 },
      { dateTime: "2024-06-01 02:00:00", value: 25 },
      { dateTime: "2024-06-01 03:00:00", value: 26.5 },
      { dateTime: "2024-06-01 04:00:00", value: 25.5 },
      { dateTime: "2024-06-01 05:00:00", value: 25 },
      { dateTime: "2024-06-01 06:00:00", value: 25.5 },
      { dateTime: "2024-06-01 07:00:00", value: 26 },
      { dateTime: "2024-06-01 08:00:00", value: 26.3 },
      { dateTime: "2024-06-01 09:00:00", value: 26.6 },
      { dateTime: "2024-06-01 10:00:00", value: 27 },
      { dateTime: "2024-06-01 11:00:00", value: 28.7 },
      { dateTime: "2024-06-01 12:00:00", value: 30 },
      { dateTime: "2024-06-01 13:00:00", value: 30 },
      { dateTime: "2024-06-01 14:00:00", value: 30 },
      { dateTime: "2024-06-01 15:00:00", value: 28.3 },
      { dateTime: "2024-06-01 16:00:00", value: 27.5 },
      { dateTime: "2024-06-01 17:00:00", value: 27 },
      { dateTime: "2024-06-01 18:00:00", value: 26.5 },
      { dateTime: "2024-06-01 19:00:00", value: 26 },
      { dateTime: "2024-06-01 20:00:00", value: 25 },
      { dateTime: "2024-06-01 21:00:00", value: 25 },
    ],
  },
  {
    id: 2,
    name: "Humidity1",
    type: "Humidity",
    unit: "%",
    status: "OK",
    values: [
      { dateTime: "2024-06-01 00:00:00", value: 60 },
      { dateTime: "2024-06-01 01:00:00", value: 61 },
      { dateTime: "2024-06-01 02:00:00", value: 62 },
      { dateTime: "2024-06-01 03:00:00", value: 63 },
      { dateTime: "2024-06-01 04:00:00", value: 64 },
      { dateTime: "2024-06-01 05:00:00", value: 65 },
      { dateTime: "2024-06-01 06:00:00", value: 66 },
      { dateTime: "2024-06-01 07:00:00", value: 67 },
      { dateTime: "2024-06-01 08:00:00", value: 68 },
      { dateTime: "2024-06-01 09:00:00", value: 69 },
      { dateTime: "2024-06-01 10:00:00", value: 70 },
      { dateTime: "2024-06-01 11:00:00", value: 71 },
      { dateTime: "2024-06-01 12:00:00", value: 72 },
      { dateTime: "2024-06-01 13:00:00", value: 73 },
      { dateTime: "2024-06-01 14:00:00", value: 74 },
      { dateTime: "2024-06-01 15:00:00", value: 75 },
      { dateTime: "2024-06-01 16:00:00", value: 76 },
      { dateTime: "2024-06-01 17:00:00", value: 77 },
      { dateTime: "2024-06-01 18:00:00", value: 78 },
      { dateTime: "2024-06-01 19:00:00", value: 79 },
      { dateTime: "2024-06-01 20:00:00", value: 80 },
      { dateTime: "2024-06-01 21:00:00", value: 81 },
    ],
  },
  {
    id: 3,
    name: "Humidity2",
    type: "Humidity",
    unit: "%",
    status: "Inactive",
    values: [
      { dateTime: "2024-06-01 00:00:00", value: 58 },
      { dateTime: "2024-06-01 01:00:00", value: 59 },
      { dateTime: "2024-06-01 02:00:00", value: 60 },
      { dateTime: "2024-06-01 03:00:00", value: 61 },
      { dateTime: "2024-06-01 04:00:00", value: 62 },
      { dateTime: "2024-06-01 05:00:00", value: 63 },
      { dateTime: "2024-06-01 06:00:00", value: 64 },
      { dateTime: "2024-06-01 07:00:00", value: 65 },
      { dateTime: "2024-06-01 08:00:00", value: 66 },
      { dateTime: "2024-06-01 09:00:00", value: 67 },
      { dateTime: "2024-06-01 10:00:00", value: 68 },
      { dateTime: "2024-06-01 11:00:00", value: 69 },
      { dateTime: "2024-06-01 12:00:00", value: 70 },
      { dateTime: "2024-06-01 13:00:00", value: 71 },
      { dateTime: "2024-06-01 14:00:00", value: 72 },
      { dateTime: "2024-06-01 15:00:00", value: 73 },
      { dateTime: "2024-06-01 16:00:00", value: 74 },
      { dateTime: "2024-06-01 17:00:00", value: 75 },
      { dateTime: "2024-06-01 18:00:00", value: 76 },
      { dateTime: "2024-06-01 19:00:00", value: 77 },
      { dateTime: "2024-06-01 20:00:00", value: 78 },
      { dateTime: "2024-06-01 21:00:00", value: 79 },
    ],
  },
  {
    id: 6,
    name: "SoilpH1",
    type: "Soil pH",
    unit: "pH",
    status: "OK",
    values: [
      { dateTime: "2024-06-01 00:00:00", value: 6.5 },
      { dateTime: "2024-06-01 01:00:00", value: 6.6 },
      { dateTime: "2024-06-01 02:00:00", value: 6.4 },
      { dateTime: "2024-06-01 03:00:00", value: 6.7 },
      { dateTime: "2024-06-01 04:00:00", value: 6.5 },
      { dateTime: "2024-06-01 05:00:00", value: 6.8 },
      { dateTime: "2024-06-01 06:00:00", value: 6.6 },
      { dateTime: "2024-06-01 07:00:00", value: 6.4 },
      { dateTime: "2024-06-01 08:00:00", value: 6.7 },
      { dateTime: "2024-06-01 09:00:00", value: 6.5 },
      { dateTime: "2024-06-01 10:00:00", value: 6.8 },
      { dateTime: "2024-06-01 11:00:00", value: 6.6 },
      { dateTime: "2024-06-01 12:00:00", value: 6.4 },
      { dateTime: "2024-06-01 13:00:00", value: 6.7 },
      { dateTime: "2024-06-01 14:00:00", value: 6.5 },
      { dateTime: "2024-06-01 15:00:00", value: 6.8 },
      { dateTime: "2024-06-01 16:00:00", value: 6.6 },
      { dateTime: "2024-06-01 17:00:00", value: 6.4 },
      { dateTime: "2024-06-01 18:00:00", value: 6.7 },
      { dateTime: "2024-06-01 19:00:00", value: 6.5 },
      { dateTime: "2024-06-01 20:00:00", value: 6.8 },
      { dateTime: "2024-06-01 21:00:00", value: 6.6 },
    ],
  },
  {
    id: 7,
    name: "SoilpH2",
    type: "Soil pH",
    unit: "pH",
    status: "Low",
    values: [
      { dateTime: "2024-06-01 00:00:00", value: 6.2 },
      { dateTime: "2024-06-01 01:00:00", value: 6.1 },
      { dateTime: "2024-06-01 02:00:00", value: 6.3 },
      { dateTime: "2024-06-01 03:00:00", value: 6.2 },
      { dateTime: "2024-06-01 04:00:00", value: 6.1 },
      { dateTime: "2024-06-01 05:00:00", value: 6.4 },
      { dateTime: "2024-06-01 06:00:00", value: 6.3 },
      { dateTime: "2024-06-01 07:00:00", value: 6.2 },
      { dateTime: "2024-06-01 08:00:00", value: 6.1 },
      { dateTime: "2024-06-01 09:00:00", value: 6.3 },
      { dateTime: "2024-06-01 10:00:00", value: 6.2 },
      { dateTime: "2024-06-01 11:00:00", value: 6.4 },
      { dateTime: "2024-06-01 12:00:00", value: 6.1 },
      { dateTime: "2024-06-01 13:00:00", value: 6.3 },
      { dateTime: "2024-06-01 14:00:00", value: 6.2 },
      { dateTime: "2024-06-01 15:00:00", value: 6.1 },
      { dateTime: "2024-06-01 16:00:00", value: 6.4 },
      { dateTime: "2024-06-01 17:00:00", value: 6.3 },
      { dateTime: "2024-06-01 18:00:00", value: 6.2 },
      { dateTime: "2024-06-01 19:00:00", value: 6.1 },
      { dateTime: "2024-06-01 20:00:00", value: 6.3 },
      { dateTime: "2024-06-01 21:00:00", value: 6.2 },
    ],
  },
  {
    id: 8,
    name: "CO2Level1",
    type: "CO2 Level",
    unit: "ppm",
    status: "OK",
    values: [
      { dateTime: "2024-06-01 00:00:00", value: 400 },
      { dateTime: "2024-06-01 01:00:00", value: 405 },
      { dateTime: "2024-06-01 02:00:00", value: 410 },
      { dateTime: "2024-06-01 03:00:00", value: 415 },
      { dateTime: "2024-06-01 04:00:00", value: 420 },
      { dateTime: "2024-06-01 05:00:00", value: 425 },
      { dateTime: "2024-06-01 06:00:00", value: 430 },
      { dateTime: "2024-06-01 07:00:00", value: 435 },
      { dateTime: "2024-06-01 08:00:00", value: 440 },
      { dateTime: "2024-06-01 09:00:00", value: 445 },
      { dateTime: "2024-06-01 10:00:00", value: 450 },
      { dateTime: "2024-06-01 11:00:00", value: 455 },
      { dateTime: "2024-06-01 12:00:00", value: 460 },
      { dateTime: "2024-06-01 13:00:00", value: 465 },
      { dateTime: "2024-06-01 14:00:00", value: 470 },
      { dateTime: "2024-06-01 15:00:00", value: 475 },
      { dateTime: "2024-06-01 16:00:00", value: 480 },
      { dateTime: "2024-06-01 17:00:00", value: 485 },
      { dateTime: "2024-06-01 18:00:00", value: 490 },
      { dateTime: "2024-06-01 19:00:00", value: 495 },
      { dateTime: "2024-06-01 20:00:00", value: 500 },
      { dateTime: "2024-06-01 21:00:00", value: 505 },
    ],
  },
  {
    id: 9,
    name: "CO2Level2",
    type: "CO2 Level",
    unit: "ppm",
    status: "OK",
    values: [
      { dateTime: "2024-06-01 00:00:00", value: 410 },
      { dateTime: "2024-06-01 01:00:00", value: 415 },
      { dateTime: "2024-06-01 02:00:00", value: 420 },
      { dateTime: "2024-06-01 03:00:00", value: 425 },
      { dateTime: "2024-06-01 04:00:00", value: 430 },
      { dateTime: "2024-06-01 05:00:00", value: 435 },
      { dateTime: "2024-06-01 06:00:00", value: 440 },
      { dateTime: "2024-06-01 07:00:00", value: 445 },
      { dateTime: "2024-06-01 08:00:00", value: 450 },
      { dateTime: "2024-06-01 09:00:00", value: 455 },
      { dateTime: "2024-06-01 10:00:00", value: 460 },
      { dateTime: "2024-06-01 11:00:00", value: 465 },
      { dateTime: "2024-06-01 12:00:00", value: 470 },
      { dateTime: "2024-06-01 13:00:00", value: 475 },
      { dateTime: "2024-06-01 14:00:00", value: 480 },
      { dateTime: "2024-06-01 15:00:00", value: 485 },
      { dateTime: "2024-06-01 16:00:00", value: 490 },
      { dateTime: "2024-06-01 17:00:00", value: 495 },
      { dateTime: "2024-06-01 18:00:00", value: 500 },
      { dateTime: "2024-06-01 19:00:00", value: 505 },
      { dateTime: "2024-06-01 20:00:00", value: 510 },
      { dateTime: "2024-06-01 21:00:00", value: 515 },
    ],
  },
  {
    id: 10,
    name: "SoilMoisture1",
    type: "Soil Moisture",
    unit: "%",
    status: "OK",
    values: [
      { dateTime: "2024-06-01 00:00:00", value: 20 },
      { dateTime: "2024-06-01 01:00:00", value: 21 },
      { dateTime: "2024-06-01 02:00:00", value: 22 },
      { dateTime: "2024-06-01 03:00:00", value: 23 },
      { dateTime: "2024-06-01 04:00:00", value: 24 },
      { dateTime: "2024-06-01 05:00:00", value: 25 },
      { dateTime: "2024-06-01 06:00:00", value: 26 },
      { dateTime: "2024-06-01 07:00:00", value: 27 },
      { dateTime: "2024-06-01 08:00:00", value: 28 },
      { dateTime: "2024-06-01 09:00:00", value: 29 },
      { dateTime: "2024-06-01 10:00:00", value: 30 },
      { dateTime: "2024-06-01 11:00:00", value: 31 },
      { dateTime: "2024-06-01 12:00:00", value: 32 },
      { dateTime: "2024-06-01 13:00:00", value: 33 },
      { dateTime: "2024-06-01 14:00:00", value: 34 },
      { dateTime: "2024-06-01 15:00:00", value: 35 },
      { dateTime: "2024-06-01 16:00:00", value: 36 },
      { dateTime: "2024-06-01 17:00:00", value: 37 },
      { dateTime: "2024-06-01 18:00:00", value: 38 },
      { dateTime: "2024-06-01 19:00:00", value: 39 },
      { dateTime: "2024-06-01 20:00:00", value: 40 },
      { dateTime: "2024-06-01 21:00:00", value: 41 },
    ],
  },
  {
    id: 11,
    name: "SoilMoisture2",
    type: "Soil Moisture",
    unit: "%",
    status: "OK",
    values: [
      { dateTime: "2024-06-01 00:00:00", value: 30 },
      { dateTime: "2024-06-01 01:00:00", value: 31 },
      { dateTime: "2024-06-01 02:00:00", value: 32 },
      { dateTime: "2024-06-01 03:00:00", value: 33 },
      { dateTime: "2024-06-01 04:00:00", value: 34 },
      { dateTime: "2024-06-01 05:00:00", value: 35 },
      { dateTime: "2024-06-01 06:00:00", value: 36 },
      { dateTime: "2024-06-01 07:00:00", value: 37 },
      { dateTime: "2024-06-01 08:00:00", value: 38 },
      { dateTime: "2024-06-01 09:00:00", value: 39 },
      { dateTime: "2024-06-01 10:00:00", value: 40 },
      { dateTime: "2024-06-01 11:00:00", value: 41 },
      { dateTime: "2024-06-01 12:00:00", value: 42 },
      { dateTime: "2024-06-01 13:00:00", value: 43 },
      { dateTime: "2024-06-01 14:00:00", value: 44 },
      { dateTime: "2024-06-01 15:00:00", value: 45 },
      { dateTime: "2024-06-01 16:00:00", value: 46 },
      { dateTime: "2024-06-01 17:00:00", value: 47 },
      { dateTime: "2024-06-01 18:00:00", value: 48 },
      { dateTime: "2024-06-01 19:00:00", value: 49 },
      { dateTime: "2024-06-01 20:00:00", value: 50 },
      { dateTime: "2024-06-01 21:00:00", value: 51 },
    ],
  },
];

const sensorTypeDescriptions = [
  {
    type: "Temperature",
    image:
      "https://www.aaaksc.com/wp-content/uploads/2022/06/Temperature-sensor-2.jpg",
    description:
      "Temperature sensors are used to measure the temperature of air, liquids or solids. They are widely used in industrial and scientific applications.",
  },
  {
    type: "Humidity",
    image:
      "https://static.wixstatic.com/media/d5426d_f173ae229f334a4ba5f52532c011a8aa~mv2.png/v1/fill/w_980,h_552,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/d5426d_f173ae229f334a4ba5f52532c011a8aa~mv2.png",
    description:
      "Humidity sensors are used to measure the amount of water vapour in the air. They are used in weather stations, greenhouses, and other applications where humidity levels need to be monitored.",
  },
  {
    type: "Nutrient Level",
    image:
      "https://biofeed.com/wp-content/uploads/2021/02/soil-nutrients-600px.jpg",
    description:
      "Nutrient level sensors are used to measure the concentration of nutrients in a liquid. They are commonly used in hydroponic systems and other applications where nutrient levels need to be monitored.",
  },
  {
    type: "Soil pH",
    image:
      "https://i0.wp.com/deepgreenpermaculture.com/wp-content/uploads/2022/01/soil-ph-scale-scale-2_00x.jpg?ssl=1",
    description:
      "Soil pH sensors are used to measure the acidity or alkalinity of soil. They are used in agriculture, horticulture, and other applications where soil pH needs to be monitored.",
  },
  {
    type: "CO2",
    image:
      "https://cdn.shopify.com/s/files/1/0019/5952/files/what_co2_level_is_dangerous.png?v=1678825571",
    description:
      "CO2 level sensors are used to measure the concentration of carbon dioxide in the air. They are used in buildings, greenhouses, and other applications where CO2 levels need to be monitored.",
  },
  {
    type: "Soil Moisture",
    image: "https://eos.com/wp-content/uploads/2022/10/soil-moisture-main.jpg",
    description:
      "Soil moisture sensors are used to measure the amount of water in the soil. They are used in agriculture, horticulture, and other applications where soil moisture levels need to be monitored.",
  },
];
const getImageLink = (type) => {
  return sensorTypeDescriptions.find((sensorType) => sensorType.type === type)
    .image;
};

const getSensorByType = (type) => {
  return sensors.filter((sensor) => sensor.type === type);
};

const getSensors = () => {
  let registeredSensors = [];
  sensors.forEach((sensor) => {
    registeredSensors.push({
      id: sensor.id,
      name: sensor.name,
      type: sensor.type,
      unit: sensor.unit,
      status: sensor.status,
      unit: sensor.unit !== "Status" ? sensor.unit : "",
      lastUpdate: sensor.values[(sensor.values.length) - 1].value,
      description: getSensorTypeDescription(sensor.type),
      image: sensorTypeDescriptions.find(
        (sensorType) => sensorType.type === sensor.type
      ).image,
    });
  });
  return registeredSensors;
};

const getSensorById = (id) => {
  console.log("Received", id);
  let sensorData = [];

  sensorData = sensors[id - 1];
  return sensorData;
};
const getSensorTypeDescription = (type) => {
  return sensorTypeDescriptions.find((sensorType) => sensorType.type === type)
    .description;
};
const getSensorValues = (id) => {
  console.log("Received", id);
  console.log("Sensor", sensors.find((sensor) => sensor.id === id).values);
  return sensors.find((sensor) => sensor.id === id).values;
};

export {
  getSensorByType,
  getSensors,
  getSensorById,
  getSensorValues,
  getSensorTypeDescription,
  getImageLink,
};
