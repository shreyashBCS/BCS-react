import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// image import
import AI from '../OG/AI-ML-GenAI-BrightCrestSolutions.jpg'
import Web from '../OG/WebDevelopmentSolutions-BrightCrestSolutions.jpg'
import automation from '../OG/Automations-BrightCrestSolutions.jpg'
import digital_marketing from '../OG/DigitalMarketing-BrightCrestSolutions.jpg'
import qa from '../OG/QualityAssurance-BrightCrestSolutions.jpg'
import cms from '../OG/ContentManagement-BrightCrestSolutions.jpg'
import ecomm from '../OG/Ecommerce-BrightCrestSolutions.jpg'
import mobile_app from '../OG/MobileApp-BrightCrestSolutions.jpg'


function Solution() {

    const navigate = useNavigate();


  const goToContact = () => {
    navigate('/contact');
  }
    return (
        <>

            <div className='mt-2'>
                <h4 style={{ marginTop: "70px" }} className='text-center '>Best Solution We Offer</h4>
                <h5 className='text-center mt-3'>Empowering Your Vision with Tailored Digital Solutions.

                </h5>
            </div>

            {/* --------------------------------------------- */}


            <Container fluid style={{ backgroundColor: "#FAFAFA" }}>
                {/* First row: Image left, Text right */}
                <Row className="align-items-center mb-0 ">
                    <Col xs={12} md={6} className="p-0 m-0">
                        <img src={AI} alt="Image" className="img-fluid w-100" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>AI/ML/Gen-AI
                        </h4>
                        <p>With BrightCrest Solutions, Unlock your potential with our AI, ML, and Gen-AI solutions. We empower businesses to enhance decision-making, streamline operations, and personalize customer experiences. Contact us to transform your digital landscape today!</p>
                    </Col>
                </Row>

                {/* Second row: Text left, Image right */}
                <Row className="align-items-center mb-0">
                    <Col xs={12} md={6}>
                        <h4>Web Development Solutions
                        </h4>
                        <p>Our Web Development Solutions deliver customized websites that enhance your online presence and engage your audience. Tailored to your unique needs, our solutions ensure you stay ahead of the competition and achieve your business goals.</p>
                    </Col>
                    <Col xs={12} md={6} className="p-0 m-0">
                        <img src={Web} alt="Image" className="img-fluid w-100" />
                    </Col>
                </Row>





                {/* ---- */}
                <Row className="align-items-center mb-0">
                    <Col xs={12} md={6} className="p-0 m-0">
                        <img src={automation} alt="Image" className="img-fluid w-100" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Automation Solutions</h4>
                        <p>Our Automation Solutions empower businesses to streamline workflows, reduce manual tasks, and enhance productivity. At BrightCrest Solutions, we help you optimize processes, minimize errors, and achieve greater operational efficiency.</p>
                    </Col>
                </Row>

                <Row className="align-items-center mb-0">
                    <Col xs={12} md={6}>
                        <h4>Digital Marketing Solutions
                        </h4>
                        <p>Our Digital Marketing Solutions leverage industry-specific strategies to elevate your brand's online presence. We analyze market trends and your unique needs, crafting tailored campaigns that drive traffic, engage customers, and boost conversions. Let’s grow your business together!</p>
                    </Col>
                    <Col xs={12} md={6} className="p-0 m-0">
                        <img src={digital_marketing} alt="Image" className="img-fluid w-100" />
                    </Col>
                </Row>
                {/* =------------ */}


                <Row className="align-items-center mb-0">
                    <Col xs={12} md={6} className="p-0 m-0">
                        <img src={qa} alt="Image" className="img-fluid w-100" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Quality Assurance Solutions</h4>
                        <p>Our Quality Assurance Solutions ensure your applications perform flawlessly. We employ rigorous testing methodologies tailored to your industry, identifying issues early to enhance reliability and user satisfaction. Trust us to safeguard your software’s quality.</p>
                    </Col>
                </Row>
                {/* ----- */}
                <Row className="align-items-center mb-0">
                    <Col xs={12} md={6}>
                        <h4>Content Management Solutions </h4>
                        <p>Our Content Management Solutions provide tailored CMS platform selections based on your business needs. With our expertise, we empower you to efficiently manage and update your content, ensuring seamless user experiences and improved engagement. Let’s optimize your digital presence!.</p>
                    </Col>
                    <Col xs={12} md={6} className="p-0 m-0">
                        <img src={cms} alt="Image" className="img-fluid w-100" />
                    </Col>
                </Row>


                {/* ---- */}
                <Row className="align-items-center mb-0">
                    <Col xs={12} md={6} className="p-0 m-0">
                        <img src={ecomm} alt="Image" className="img-fluid w-100" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>E-Commerce Solutions
                        </h4>
                        <p>Our E-Commerce Solutions enhance your business by creating secure, user-friendly online stores. We optimize shopping experiences, streamline transactions, and integrate marketing strategies, helping you drive sales and build lasting customer relationships.
                        </p>
                    </Col>
                </Row>


                {/* ----------------- */}
                <Row className="align-items-center mb-0">
                    <Col xs={12} md={6}>
                        <h4>Mobile App Development Management Solutions </h4>
                        <p>BrightCrest Solution's Mobile App Development services create intuitive, high-performance applications for iOS and Android. Tailored to your business needs, we enhance user engagement and streamline processes, ensuring your brand connects with customers anytime, anywhere.</p>
                    </Col>
                    <Col xs={12} md={6} className="p-0 m-0">
                        <img src={mobile_app} alt="Image" className="img-fluid w-100" />
                    </Col>
                </Row>

            </Container>



            <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{ backgroundColor: "White" }}>
                <h3>We will love to hear your idea and</h3>
                <h3>can help set you apart from flock</h3>

                <p>We would be happy to answer your questions and set up a</p>
                <p>meeting with you.</p>
                <button onClick={goToContact} type="button" className="btn btn-outline-secondary mb-2">CONTACT US</button>
            </div>
        </>
    )
}

export default Solution
