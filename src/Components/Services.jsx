import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Services() {


  return (
    <>


      <div className='mt-4'>
        <h4 style={{ marginTop: "90px" }} className='text-center '>Best Services We Offer</h4>
        <h5 className='text-center mt-3'>Innovative Strategies for a Seamless Digital Transformation</h5>
      </div>





      {/* --------------------------------------------- */}





      <Container>
        <Row className="align-items-center">
          {/* Image on the left */}
          <Col md={6}>
            <img
              className="img-fluid"
              src="/images/your-image.png"
              alt="Descriptive Alt Text"
            />
          </Col>

          {/* Text on the right */}
          <Col md={6}>
            <p>
              This is a short paragraph that explains something related to the image on the left. You can provide more information or context about the image here.
            </p>
          </Col>
        </Row>
      </Container>






    </>
  )
}

export default Services
