import React, { useRef, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import ReactMapGL, { Marker } from 'react-map-gl'
import { FaAmbulance } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function Clinics({data}) {
    const [ userLat, setUserLat ] = useState(0)
    const [ userLon, setUserLon ] = useState(0)
    const [viewport, setViewport] = useState({
        width: "80vw",
        height: "60vh",
        latitude: 24.8540,
        longitude: 46.7132,
        zoom: 9
      });
    
    useEffect(() => {
//   BUILT IN COMPONENT IN JAVASCRIPT THAT GETS THE CURRENT LOCATION OF THE DEVICE IF THE USER ALLOWS IT
        navigator.geolocation.getCurrentPosition(showPosition);

        function showPosition(position) {
          console.log("hello", position.coords.latitude)
          setUserLat(position.coords.latitude)
          console.log("hello", position.coords.longitude)
        setUserLon(position.coords.longitude)
      }
    }, [])
    
    return (
        <div className="clinic-map-container">
        
         <ReactMapGL {...viewport} mapboxApiAccessToken="pk.eyJ1IjoiYWxhbm91ZGFsbWFraGFsYWZpIiwiYSI6ImNrdzBtOTB5azR0cmwycGtsams4dWc5MmgifQ.qO7gX9ZWH080-ABIyYvpcw">
            
                <Link to={`/Building/1`}>
          <Marker
                longitude={viewport.longitude}
                latitude={viewport.latitude}
                offsetTop={-20}
                offsetLeft={-10}
            >
                <FaAmbulance />
            </Marker>
            </Link> 
            <Link to={`/Building/2`}>
            <Marker
               
                longitude={userLon}
                latitude={userLat}
                offsetTop={-20}
                offsetLeft={-10}
            >
                <FaAmbulance />
            </Marker>
            </Link> 
          

         </ReactMapGL>
        </div>
    )
}


