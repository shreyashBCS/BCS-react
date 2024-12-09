import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode, FaLaptop, FaLifeRing, FaClock, FaCogs } from 'react-icons/fa';
import '../App.css'


function HomePage() {
  const phrases = [
    "Deliver Automation Solutions for Your Business.",
    "Implement Seamless Integrations.",
    "Execute Strategic Digital Marketing.",
    "Achieve Impactful Creative Services.",
    "Develop Custom Web Solutions.",
    "Drive Digital Marketing Success for Your Organization."
  ];

  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]); // Initialize with the first phrase

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setCurrentPhrase(phrases[randomIndex]); // Change to a random phrase
    }, 2000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <>
      <div className='text-center custom-margin' >
        <h5>Let us   {currentPhrase}</h5>
        <p className='mt-5' style={{ fontSize: "19px" }}>At BrightCrest Solutions, we are dedicated to transforming the way businesses leverage technology. With a customer-first approach, we believe that understanding our clients’ needs is the key to delivering tailored IT and digital solutions that drive success. Our team of experts is committed to providing innovative and efficient solutions that empower businesses to thrive in today’s fast-paced digital landscape.</p>

        <h5 className='mt-5'>Our Approach</h5>
        <p className='mt-5' style={{ fontSize: "19px" }}>Every project is unique, but they all start with some things in common.

          .</p>



      </div>
      {/* --------------------------------------------------------------------------------------------------------------- */}
      <section className="bg--secondary py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={4} className="mb-4">
              <div className="feature-box">
                <FaCogs className="icon color--primary" />
                <div className="feature__body">
                  <h5>Technology Services</h5>
                  <p>
                    We Work Closely to Design, Build & Run the Systems & Services You Rely On.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-box">
                <FaClock className="icon color--primary" />
                <div className="feature__body">
                  <h5>Creative Services</h5>
                  <p>
                    We help and support our customers with creative concepts, visual design and more.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-box">
                <FaCode className="icon color--primary" />
                <div className="feature__body">
                  <h5>Business Management</h5>
                  <p>
                    Created to serve every type of user need, including specialized tools and industry specifics.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-box">
                <FaLaptop className="icon color--primary" />
                <div className="feature__body">
                  <h5>IT Consulting</h5>
                  <p>
                    Collaborate with clients to define, design and execute IT strategies that drive business growth.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-box">
                <FaLaptop className="icon color--primary" />
                <div className="feature__body">
                  <h5>Marketing</h5>
                  <p>
                    Marketing is necessary in all stages of a business's selling journey.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-box">
                <FaLifeRing className="icon color--primary" />
                <div className="feature__body">
                  <h5>Support and Maintenance</h5>
                  <p>
                    Both support and maintenance are essential for the success of any creative campaign or project.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>



{/* -------------------------------------------------------------------------------------- */}
      <div className="w-100 d-flex justify-content-between align-items-center" style={{ backgroundColor: "#8151B9", height: "120px" }}>
        <p style={{marginLeft:"12px"}}>Subscribe to our newsletter</p>
        <button className="btn btn-primary" style={{marginRight:"12px"}}>Subscribe Now</button>
      </div>

    </>
  );
}

export default HomePage;