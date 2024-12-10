import React from 'react'
import '../App.css'
function About() {


  return (
    <>

      <div style={{ marginTop: "120px" }}>
        <h1 className='text-center'>Hi,We're BrightCrest Solutions</h1>
        <p className='text-center m-5'  >At BrightCrest Solutions, we are dedicated to transforming the way businesses leverage technology. With a customer-first approach, we believe that understanding our clients’ needs is the key to delivering tailored IT and digital solutions that drive success. Our team of experts is committed to providing innovative and efficient solutions that empower businesses to thrive in today’s fast-paced digital landscape.</p>
      </div>

      <div className="timeline mb-2">
        {/* Timeline Item 1 */}
        <div className="timeline-item left">
          <div className="content">
            <span className="icon">
              <i className="fab fa-react"></i>
            </span>
            <h5>Founded in Pune, Maharashtra,
              India — 2014</h5>
            <p>
              Established in Mumbai, Maharashtra, India as BrightCrest Solutions. Hired programmers, GFX designers, artists and marketing people for delivering quality services. BrightCrest Solutions started publishing their services.            </p>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="timeline-item right">
          <div className="content">
            <span className="icon">
              <i className="fab fa-vuejs"></i>
            </span>
            <h5>Successfully delivered 15+ Projects
              within a span of Six Months
            </h5>
            <p>
              Completing various projects with new minds was fun. Increased the efficiency and confidence in executing project phases.            </p>
          </div>
        </div>

        {/* Timeline Item 3 */}
        <div className="timeline-item left">
          <div className="content">
            <span className="icon">
              <i className="fab fa-angular"></i>
            </span>
            <h5>When an idea becomes
              Reality</h5>
            <p>
              Making available something didn't exists is a greatest achievement. Opt list of services as a package and get rewarded.

            </p>
          </div>
        </div>



        {/* Timeline Item 4 */}
        <div className="timeline-item right">
          <div className="content">
            <span className="icon">
              <i className="fab fa-vuejs"></i>
            </span>
            <h5>Implemented 30+ More Services

            </h5>
            <p>
              Extended services in creative, digital, graphics and branding helped to attract the fresh customers and now we are excelled in executing new services than old.

            </p>
          </div>
        </div>



        {/* Timeline Item 5 */}
        <div className="timeline-item left">
          <div className="content">
            <span className="icon">
              <i className="fab fa-angular"></i>
            </span>
            <h5>Launched Ambassador
              Program</h5>
            <p>
              Earn money by referring our service to your friend or a family.
            </p>
          </div>
        </div>




        {/* Timeline Item 6 */}
        <div className="timeline-item right">
          <div className="content">
            <span className="icon">
              <i className="fab fa-vuejs"></i>
            </span>
            <h5>Delivering 60+ Different Services


            </h5>
            <p>
              Announcing different departments with different firm name executing excelled services in their best knowledge. We try to provide you the services which suits in current circumstances.
            </p>
          </div>
        </div>

      </div>

      <div>
        <h1 className='text-center'>Right Strategy | Right Tools | Right Resources</h1>
        <p className='text-center'>We extend our client's capacity with skilled teams fully integrated within their in-company work-flow,</p>
        <p className='text-center'>settings and style.</p>
        <div className="d-flex justify-content-center mb-2">
          <button type="button" className="btn btn-outline-primary">CONTACT US</button>
        </div>
      </div>
    </>
  )
}

export default About
