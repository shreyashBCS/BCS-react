import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


// image import
import it_consult from '../OG/ITConsulting-BrightCrestSolutions.jpg'
import creative_service from '../OG/CreativeServices-BrightCrestSolutions.jpg'
import cloud from '../OG/CloudServices-BrightCrestSolutions.jpg'

function Services() {
  const navigate = useNavigate();


  const goToContact = () => {
    navigate('/contact');
  }
  return (
    <>

      <div className='mt-2'>
        <h4 style={{ marginTop: "70px" }} className='text-center '>Best Services We Offer</h4>
        <h5 className='text-center mt-3'>Innovative Strategies for a Seamless Digital Transformation</h5>
      </div>

      {/* --------------------------------------------- */}

      <Container fluid style={{ backgroundColor: "#FAFAFA", padding: 0 }}>
        {/* First row: Image left, Text right */}
        <Row className="align-items-center mb-0">
          <Col xs={12} md={6} className="p-0 m-0">
            <img src={it_consult} alt="Image" className="img-fluid w-100" />
          </Col>
          <Col xs={12} md={6}>
            <h4>IT Consulting Services</h4>
            <p>BrigtCrest Solutions IT Consulting Services provide expert guidance to align technology with your business goals. We assess your infrastructure, recommend strategic solutions, and help optimize processes, ensuring your organization remains competitive and agile in today’s fast-paced digital landscape.</p>
          </Col>
        </Row>

        {/* Second row: Text left, Image right */}
        <Row className="align-items-center mb-0">
          <Col xs={12} md={6}>
            <h4>Creative Services</h4>
            <p>BrightCrest Solutions Creative Services elevate your brand through innovative design and compelling content. From motion graphics to logo creation, we craft visually stunning solutions that engage audiences and communicate your message effectively.</p>
          </Col>
          <Col xs={12} md={6} className="p-0 m-0">
            <img src={creative_service} alt="Image" className="img-fluid w-100" />
          </Col>
        </Row>

        {/* ---- */}
        <Row className="align-items-center mb-0">
          <Col xs={12} md={6} className="p-0 m-0">
            <img src={cloud} alt="Image" className="img-fluid w-100" />
          </Col>
          <Col xs={12} md={6}>
            <h4>Cloud Services
            </h4>
            <p>BrightCrest Solutions Cloud Services empower businesses with scalable, secure solutions for data storage and management. We streamline cloud migration and optimize infrastructure, enabling you to enhance collaboration, reduce costs, and improve accessibility.

              .</p>
          </Col>
        </Row>

        <Row className="align-items-center mb-0">
          <Col xs={12} md={6}>
            <h4>Data Analytics and Business Intelligence</h4>
            <p>BrightCrest Solutions Data Analytics and Business Intelligence services transform raw data into actionable insights. We provide tailored solutions that enhance decision-making, track performance, and identify growth opportunities, helping your business thrive in a data-driven landscape.

              .</p>
          </Col>
          <Col xs={12} md={6} className="p-0 m-0">
            <img src={cloud} alt="Image" className="img-fluid w-100" />
          </Col>
        </Row>
        {/* =------------ */}


        <Row className="align-items-center mb-0">
          <Col xs={12} md={6} className="p-0 m-0">
            <img src={cloud} alt="Image" className="img-fluid w-100" />
          </Col>
          <Col xs={12} md={6}>
            <h4>Training and Support Services

            </h4>
            <p>Our Training and Support Services empower your team with the knowledge and tools to maximize technology usage. We offer comprehensive training and ongoing support, ensuring smooth operations and enhanced productivity. Partner with us for continuous improvement and success!

              .</p>
          </Col>
        </Row>

        <Row className="align-items-center mb-0">
          <Col xs={12} md={6}>
            <h4>Social Media Management
            </h4>
            <p>BrightCrest Solutions Social Media Management services amplify your brand's voice across platforms. We develop tailored strategies, create engaging content, and manage interactions to boost visibility and foster community engagement. Elevate your online presence with our expert support!

              .</p>
          </Col>
          <Col xs={12} md={6} className="p-0 m-0">
            <img src={cloud} alt="Image" className="img-fluid w-100" />
          </Col>
        </Row>
        {/* ---- */}
        <Row className="align-items-center mb-0">
          <Col xs={12} md={6} className="p-0 m-0">
            <img src={cloud} alt="Image" className="img-fluid w-100" />
          </Col>
          <Col xs={12} md={6}>
            <h4>SEO and Content Strategy</h4>
            <p>Our SEO and Content Strategy services enhance your online visibility and drive organic traffic. We create optimized content tailored to your audience, ensuring your brand ranks higher in search results and connects effectively with potential customers.

            </p>
          </Col>
        </Row>

      </Container>

      <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{ backgroundColor: "white" }}>
        <h3>We will love to hear your idea and</h3>
        <h3>can help set you apart from flock</h3>

        <p>We would be happy to answer your questions and set up a</p>
        <p>meeting with you.</p>
        <button onClick={goToContact} type="button" className="btn btn-outline-secondary mb-2">CONTACT US</button>
      </div>

    </>
  )
}

export default Services
