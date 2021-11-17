import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./homePage.css";
import { useContext } from "react";
import Login from "../Patient/LoginPatient";
import LoginAdmin from "../Admin/LoginAdministrator";
import Display from "../Patient/DisplayAppointments";
import AddNewClinic from "../Admin/AddNewClinic";
import Home from "../Home";
import { useState } from "react";
import MyAppointment from "../Patient/MyAppointment";
import { UserContext } from "./UserContext";
import Clinics from '../Clinics'
import Listofclinic from "../Listofclinic";
import '../user.css'

export default function HomePage() {
  const [authen, setAuthen] = useState(false);
  const [authenUser, setAuthenUser] = useState(false);

  const Building=[
    {
      clinic_num: "clinic 1",
      doctor: "mohammed",
      building: 1,
      floor:"first floor"
    },
    {
      clinic_num: "clinic 2",
      doctor: "Abrar",
      building:  1,
      floor:"third floor"
    },
    {
      clinic_num: "clinic 3",
      doctor: "Noura",
      building:  2,
      floor:"first floor"
    },
    {
      clinic_num: "clinic 4",
      doctor: "Hend",
      building:  2,
      floor:"ground floor"
    },
    {
      clinic_num: "clinic 5",
      doctor: "Hanin",
      building: 2,
      floor:"second floor"
    }]

  return (
    <>
      <UserContext.Provider
        value={{ authen, setAuthen, authenUser, setAuthenUser }}
      >
          <div >
          <div className="backgroundTest">
            <nav>
              <ul>
                <li>
                  <Link to="/" exact>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/Admin/LoginAdmin">Admin</Link>
                </li>
                <li>
                  <Link to="/Patien/Login">Patient</Link>
                </li>
                <li>
                  <Link className="link" to="/Clinics">
                    Clinics
                  </Link>
                </li>
                {(function () {
                  if (authen === true) {
                    console.log("hello");

                    return (
                      <div className="Admindiv">
                        <li>
                          <Link to="/Admin/AddNewClinic">
                            Add New Clinic appointment
                          </Link>
                        </li>

                        <div className="Adminlog">
                          <p>Loged in as Admin</p>
                        </div>
                      </div>
                    );
                  } else if (authenUser === true) {
                    return (
                      <div>
                        <li>
                          <Link to="/Patien/DisplayAppointments">
                            Appointments
                          </Link>
                        </li>
                        <li>
                          
                          <Link className="link" to="/MyAppointment">
                            My Appointment
                          </Link>
                        </li>

                        <div className="Patientlog">
                          <li>Loged as Patient</li>
                        </div>
                      </div>
                    );
                  } else {
                    return <li className="none"> Login</li>;
                  }
                })()}
              </ul>
            </nav>
            </div>
            <Routes>
              <Route path="/" exact element={<Home />} />

              <Route path="/Admin/LoginAdmin" element={<LoginAdmin />} />
              <Route path="/Admin/AddNewClinic" element={<AddNewClinic />} />

              <Route path="/Patien/Login" element={<Login />} />
              <Route path="/Patien/DisplayAppointments" element={<Display />} />
              
              <Route path="/MyAppointment" element={<MyAppointment />} />
              <Route path="/Clinics" element={<Clinics data={Building} />} />
              <Route path="/Building/:id" element={<Listofclinic data={Building} />} />
            </Routes>
          </div>
      </UserContext.Provider>
    </>
  );
}
