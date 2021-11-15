import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NewAppointment from "./NewAppointment.js";
import Home from "./Home";
import MyAppointment from "./MyAppointment.js";
import Clinics from "./Clinics.js";

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Navbar>
          <Container>
            <Navbar.Brand>
              <Link to="/Home">Homepage</Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/NewAppointment">New Appointment</Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/MyAppointment">My Appointment</Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/Clinics/clinic1">Clinics</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route path="/NewAppointment" element={<NewAppointment />} />
          <Route path="/MyAppointment" element={<MyAppointment />} />
          <Route path="/Clinics/:clinic" element={<Clinics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Navigation;
