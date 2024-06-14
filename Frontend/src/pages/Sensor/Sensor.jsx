import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {getSensorById,getSensorValues} from "../../FrontEndServices/SensorServices";

export const Sensor = () => {
  const { sensorId } = useParams();
const [sensorData, setSensorData] = React.useState({});
const [values, setValues] = React.useState([]);
    React.useEffect(() => {
        try{setSensorData(getSensorById(sensorId));}
        catch(e){console.log(e);}
        finally{
            console.log(sensorData);

        }
        
    }, []);
useEffect(() => {
    try{
        setValues(getSensorValues(sensorId));
    }catch(e){
        console.log(e);
    }  
}, [sensorData]);    

  return (
    <div>
      <h1>Name: {sensorData.name}</h1>
        <h2>Type: {sensorData.type}</h2>
        <p>Last Reading: {values[values.length-1]}</p>
    </div>
  );
};

