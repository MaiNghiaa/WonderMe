import Aos from "aos";
import React, { useEffect } from "react";

export default function Clients() {
  return (
    <section id="clients" className="clients">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img
              src="assets/img/clients/client-1.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img
              src="assets/img/clients/client-2.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img
              src="assets/img/clients/client-3.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img
              src="assets/img/clients/client-4.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img
              src="assets/img/clients/client-5.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img
              src="assets/img/clients/client-6.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
