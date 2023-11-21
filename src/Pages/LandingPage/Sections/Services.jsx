import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <section id="services" className="services">
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={100}>
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-briefcase" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="services-details.html" className="stretched-link">
                      Lorem Ipsum
                    </a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={200}>
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-card-checklist" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="services-details.html" className="stretched-link">
                      Dolor Sitema
                    </a>
                  </h4>
                  <p className="description">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat tarad limino ata
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={300}>
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-bar-chart" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="services-details.html" className="stretched-link">
                      Sed ut perspiciatis
                    </a>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={400}>
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-binoculars" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="services-details.html" className="stretched-link">
                      Magni Dolores
                    </a>
                  </h4>
                  <p className="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={500}>
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-brightness-high" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="services-details.html" className="stretched-link">
                      Nemo Enim
                    </a>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 " data-aos="fade-up" data-aos-delay={600}>
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-calendar4-week" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="services-details.html" className="stretched-link">
                      Eiusmod Tempor
                    </a>
                  </h4>
                  <p className="description">
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
