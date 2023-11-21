import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <section id="hero" className="hero">
        <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <h2 data-aos="fade-up" data-aos-delay={100}>
                Welcome to Our Website
              </h2>
              <p data-aos="fade-up" data-aos-delay={200}>
                We are team of talented designers making websites with Bootstrap
              </p>
            </div>
            <div className="col-lg-5">
              <form
                action="#"
                className="sign-up-form d-flex"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email address"
                />
                <input
                  type="submit"
                  className="btn btn-primary"
                  defaultValue="Sign up"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
