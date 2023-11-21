import React, { Component } from "react";

export default class Recents extends Component {
  render() {
    return (
      <section id="recent-posts" className="recent-posts">
        <div className="container section-title" data-aos="fade-up">
          <h2>Recent Posts</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <article>
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p className="post-category">Politics</p>
                <h2 className="title">
                  <a href="blog-details.html">
                    Dolorum optio tempore voluptas dignissimos
                  </a>
                </h2>
                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/blog/blog-author.jpg"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">Maria Doe</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jan 1, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <article>
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p className="post-category">Sports</p>
                <h2 className="title">
                  <a href="blog-details.html">
                    Nisi magni odit consequatur autem nulla dolorem
                  </a>
                </h2>
                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/blog/blog-author-2.jpg"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">Allisa Mayer</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jun 5, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <article>
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-3.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p className="post-category">Entertainment</p>
                <h2 className="title">
                  <a href="blog-details.html">
                    Possimus soluta ut id suscipit ea ut in quo quia et soluta
                  </a>
                </h2>
                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/blog/blog-author-3.jpg"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">Mark Dower</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jun 22, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
