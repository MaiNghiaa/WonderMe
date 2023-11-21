import React, { Component } from "react";

export default class CallToAction extends Component {
  render() {
    return (
      <section id="call-to-action" className="call-to-action">
        <img src="assets/img/cta-bg.jpg" alt="" />
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="col-xl-10"></div>
          </div>
        </div>
      </section>
    );
  }
}
