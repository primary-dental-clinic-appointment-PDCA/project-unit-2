import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addAppointment } from "../reducers/appointment";
import { useNavigate } from "react-router-dom";

export default function NewAppointment() {
  const dispatch = useDispatch();
  const [appointment, setAppointment] = useState([]);
  let navigate = useNavigate();
  const state = useSelector((state) => {
    return {
      apList: state.appointment.list,
    };
  });

  useEffect(() => {
    axios.get("http://localhost:3001/patient/appointments").then((res) => {
      console.log(res.data);
      setAppointment(res.data);
    });
  }, []);

  function ADD(id,ele) {      
    if (state.apList.some(i => i.id === id)) {
      alert("already added");
    } else {
      alert("successfully added","title");
      dispatch(addAppointment(ele));
      navigate("/MyAppointment");
    }
  }
  return (
    <div>
      {appointment.map((ele) => {
        return (
          <div>
            <h3>{ele.Clinic}</h3>
            <p>{ele.day}</p>
            <p>{ele.time}</p>
            <button
              onClick={() => {
                ADD(ele.id,ele);
              }}
            >
              ADD
            </button>
          </div>
        );
      })}
    </div>
  );
}
