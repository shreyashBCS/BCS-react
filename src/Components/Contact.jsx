// import React from 'react';
// import '../App.css'
// function Contact() {
//   return (
//     <>

//       <div className="d-flex flex-column align-items-center justify-content-center vh-60 " style={{ marginTop: "94px" }}>
//         <div className="text-center">
//           <h5>Let's talk about your</h5>
//           <h5>project</h5>
//           <p>Visit us in Mumbai or make contact via the details below to</p>
//           <p>talk more about your project or idea</p>
//         </div>
//       </div>

//       <div style={{ display: 'flex', height: '100vh', marginTop: "0px", flexDirection: "row", flexWrap: "wrap" }}>
//         {/* Map section */}
//         <div style={{ flex: 1, padding: '20px', height: '100vh', marginTop: "10px" }}>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.173430859386!2d72.97272317373981!3d19.187625948461662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b99aecb7cd07%3A0x55b6189ab9918fe5!2sBrightCrest%20Solutions!5e0!3m2!1sen!2sin!4v1733562295240!5m2!1sen!2sin"
//             width="80%"
//             height="80%"
//             style={{ border: '0' }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>

//         {/* Form section */}
//         <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', minWidth: "300px", width: "100%" }}>
//           <form style={{ width: '100%' }}>
//             <div className="form-group">
//               <label htmlFor="exampleInputEmail1">Email address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//                 placeholder="Enter email"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="exampleInputNumber1">Number</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="exampleInputNumber1"
//                 placeholder="Enter number"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea
//                 className="form-control"
//                 id="message"
//                 placeholder="Enter your message"
//               ></textarea>
//             </div>

//             <button type="submit" className="btn btn-primary mt-4">Submit</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;
import React from 'react';
import '../App.css';

function Contact() {
  return (
    <>
      {/* Top Section */}
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '30vh', marginTop: '94px' }}>
        <div className="text-center">
          <h5>Let's talk about your</h5>
          <h5>project</h5>
          <p>Visit us in Mumbai or make contact via the details below to</p>
          <p>talk more about your project or idea</p>
        </div>
      </div>

      {/* Map and Form Section */}
      <div className="container-fluid" style={{ height: '70vh',marginBottom:"12px" }}>
        <div className="row h-100">
          {/* Map Section */}
          <div className="col-md-6 p-0 d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.173430859386!2d72.97272317373981!3d19.187625948461662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b99aecb7cd07%3A0x55b6189ab9918fe5!2sBrightCrest%20Solutions!5e0!3m2!1sen!2sin!4v1733562295240!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Form Section */}
          <div className="col-md-6 d-flex align-items-center justify-content-center" style={{ height: '100%', backgroundColor: '#f8f9fa' }}>
            <form style={{ width: '80%' }}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="exampleInputNumber1">Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputNumber1"
                  placeholder="Enter number"
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Enter your message"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
