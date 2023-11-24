import React, { Component } from "react";
import Aos from "aos";
import * as XLSX from "xlsx";
import { Alert } from "bootstrap";
import moment from "moment";
import { HandleSubmit, getCurrentDateTime } from "../../../Secuity/FormData";
export default class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div
                    className="info-item"
                    data-aos="fade"
                    data-aos-delay={200}
                  >
                    <i className="bi bi-geo-alt" />
                    <h3>Address</h3>
                    <p>Số 3, Ngách 42, Ngõ 113 Nguyễn Chính</p>
                    <p>New York, NY 535022</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="info-item"
                    data-aos="fade"
                    data-aos-delay={300}
                  >
                    <i className="bi bi-telephone" />
                    <h3>Phone Number</h3>
                    <p>+1 5589 55488 55</p>
                    <p>+1 6678 254445 41</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="info-item"
                    data-aos="fade"
                    data-aos-delay={400}
                  >
                    <i className="bi bi-envelope" />
                    <h3>Email</h3>
                    <p>info@example.com</p>
                    <p>contact@example.com</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="info-item"
                    data-aos="fade"
                    data-aos-delay={500}
                  >
                    <i className="bi bi-clock" />
                    <h3>Open Hours</h3>
                    <p>Monday - Friday</p>
                    <p>9:00AM - 05:00PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form
                action=""
                onSubmit={HandleSubmit}
                className="Form"
                data-aos="fade-up"
                method="post"
                data-aos-delay={200}
              >
                <input
                  type="datetime"
                  name="Date"
                  id="Date"
                  value={getCurrentDateTime()}
                  hidden
                />
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="Name"
                      className="form-control"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 ">
                    <input
                      type="Email"
                      className="form-control"
                      name="Email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="Phone"
                      placeholder="Phone"
                      required=""
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="Comment"
                      rows={6}
                      placeholder="Message"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
