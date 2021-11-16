// import React, { useRef, useEffect, useState } from 'react';
// import {useParams} from 'react-router-dom'
// import ReactMapGL, { Marker } from 'react-map-gl'
// import { FaBeer } from 'react-icons/fa';

// export default function Clinics() {
//     const { clinic } = useParams();
//     const [ userLat, setUserLat ] = useState(0)
//     const [ userLon, setUserLon ] = useState(0)
//     const [viewport, setViewport] = useState({
//         width: "80vw",
//         height: "60vh",
//         latitude: 24.8540,
//         longitude: 46.7132,
//         zoom: 8
//       });

//     const clinics_list = [
//         {
//           clinic_num: "clinic 1",
//           day: "Sunday",
//           time: "8:00 AM",
//           doctor: "mohammed",
//           floor: "first floor",
//         },
//         {
//           clinic_num: "clinic 2",
//           adress: "",
//           day: "Monday",
//           time: "9:00 AM",
//           doctor: "Sara",
//           floor: "first floor",
//         },
//     ];
    
//     useEffect(() => {
// //   BUILT IN COMPONENT IN JAVASCRIPT THAT GETS THE CURRENT LOCATION OF THE DEVICE IF THE USER ALLOWS IT
//         navigator.geolocation.getCurrentPosition(showPosition);

//         function showPosition(position) {
//           console.log("hello", position.coords.latitude)
//           setUserLat(position.coords.latitude)
//           console.log("hello", position.coords.longitude)
//         setUserLon(position.coords.longitude)
//       }
//     }, [])
    
//     return (
//         <div className="clinic-map-container">
        
//          <h1>{clinic}</h1>  
//          <ReactMapGL {...viewport} mapboxApiAccessToken="pk.eyJ1IjoiYWxhbm91ZGFsbWFraGFsYWZpIiwiYSI6ImNrdzBtOTB5azR0cmwycGtsams4dWc5MmgifQ.qO7gX9ZWH080-ABIyYvpcw">
//             <Marker
//                 longitude={viewport.longitude}
//                 latitude={viewport.latitude}
//                 offsetTop={-20}
//                 offsetLeft={-10}
//             >
//                 <FaBeer />
//             </Marker>
//             <Marker
//                 longitude={userLon}
//                 latitude={userLat}
//                 offsetTop={-20}
//                 offsetLeft={-10}
//             >
//                 <FaBeer />
//             </Marker>
//          </ReactMapGL>
//         </div>
//     )
// }