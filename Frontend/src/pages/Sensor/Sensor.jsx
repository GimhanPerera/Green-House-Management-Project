import React from "react";
import { useParams } from "react-router-dom";

export const Sensor = () => {
  const { sensorId } = useParams();
const [sensorData, setSensorData] = React.useState({});
const [values, setValues] = React.useState([]);
//     React.useEffect(() => {
//         try{setSensorData(getSensorById(sensorId));}
//         catch(e){console.log(e);}
//         finally{
//             console.log(sensorData);

//         }
        
//     }, []);
// useEffect(() => {
//     try{
//         setValues(getSensorValues(sensorId));
//     }catch(e){
//         console.log(e);
//     }  
// }, [sensorData]);

  return (
    <div>
      <h1>Sensors</h1>
      <h1>Name: </h1>{/* {sensorData.name} */}
        <h2>Type: </h2>{/*{sensorData.type}*/}
        <p>Last Reading: </p>{/* {values[values.length-1]} */}
    </div>
  );
};

