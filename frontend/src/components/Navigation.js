import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Navbar, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NewAppointment from './NewAppointment.js'
import Home from './Home'
import MyAppointment from './MyAppointment.js'
import axios from "axios"
import { useEffect, useState } from "react"


function Navigation() {

    const [clinics, setClinics] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/patient/appointments").then((res) => {
          console.log(res.data);
          setClinics(res.data.Clinic);
        });
      }, []);

    return (
        <div>
                <BrowserRouter>
                    <Navbar>
                        <Container>
                            <Navbar.Brand><Link to='/Home'>Homepage</Link></Navbar.Brand>
                            <Navbar.Brand ><Link to='/NewAppointment'>New Appointment</Link></Navbar.Brand>
                            <Navbar.Brand ><Link to='/MyAppointment'>My Appointment</Link></Navbar.Brand>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    Signed in as: <a href="#login">Mark Otto</a>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <Routes>

                        <Route exact path='/Home' element={<Home />} />
                        <Route path='/NewAppointment' element={<NewAppointment/>} />
                        <Route path='/MyAppointment' element={<MyAppointment/>} />

                    </Routes>
                </BrowserRouter>
        </div>
    )

}
export default Navigation;