import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/BrightCrestSolutions_Logo_Main.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="align-items-center">
          {/* Logo Section */}
          <Col xs={12} md={4} className="text-center text-md-start mb-3 mb-md-0">
            <img
              src={logo}
              alt="BrightCrest Solutions"
              width="150"
              height="auto"
              className="mb-2"
            />
            <p className="mt-2 mb-0">
              Delivering the best solutions tailored to meet your unique business needs.
            </p>
          </Col>

          {/* Links Section */}
          <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
            <div className="d-flex justify-content-center">
              <a href="#!" className="text-white me-3">
                Join Ambassador Program
              </a>
              <a href="mailto:help@brightcrestsolutions.com" className="text-white">
                help@brightcrestsolutions.com
              </a>
            </div>
          </Col>

          {/* Social Media Icons Section */}
          <Col xs={12} md={4} className="text-center text-md-end">
            <a href="#!" className="text-white me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#!" className="text-white me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#!" className="text-white me-3">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#!" className="text-white me-3">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="bi bi-youtube"></i>
            </a>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={12} style={{ marginLeft: "950px" }}>
            <p className="mb-0">©2024 BrightCrest Solutions</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
