import Link from "next/link";
import React from "react";

const BlogHomeOne = () => {
  return (
    <>
      <div className="it-blog__area sbros-blog-area pt-90 pb-85 fix">

        <div className="container">

          {/* =========================================
              CENTERED BLOG TITLE
          ========================================= */}
          <div className="sbros-blog-heading">

            <span className="it-section-subtitle sbros-blog-subtitle">
              ADVANCED TOPIC
            </span>

            <h4 className="it-section-title sbros-blog-title">
              Current News
              <br />
              And Blog
            </h4>

          </div>


          {/* =========================================
              BLOG CARDS
          ========================================= */}
          <div className="row">

            {/* BLOG 1 */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="it-blog__item">

                <div className="it-blog__thumb p-relative">

                  <img
                    className="w-100"
                    src="/assets/images/music.jpg"
                    alt="Social Media Marketing"
                  />

                  <div className="it-blog__icon">
                    <Link href="/blog">
                      <i className="flaticon-up-right-arrow"></i>
                    </Link>
                  </div>

                </div>

                <div className="it-blog__content">

                  <div className="it-blog__meta">
                    <span>
                      March 23, 2023 _ Development
                    </span>
                  </div>

                  <h4 className="it-blog__title">
                    <Link href="/blog">
                      A Simple Social Media Marketing List
                    </Link>
                  </h4>

                  <Link href="/blog">
                    Read More
                  </Link>

                </div>

              </div>
            </div>


            {/* BLOG 2 */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="it-blog__item">

                <div className="it-blog__thumb p-relative">

                  <img
                    className="w-100"
                    src="/assets/images/site.jpg"
                    alt="Website Development"
                  />

                  <div className="it-blog__icon">
                    <Link href="/blog">
                      <i className="flaticon-up-right-arrow"></i>
                    </Link>
                  </div>

                </div>

                <div className="it-blog__content">

                  <div className="it-blog__meta">
                    <span>
                      March 23, 2023 _ Development
                    </span>
                  </div>

                  <h4 className="it-blog__title">
                    <Link href="/blog">
                      Does My Website Need Any Blog?
                    </Link>
                  </h4>

                  <Link href="/blog">
                    Read More
                  </Link>

                </div>

              </div>
            </div>


            {/* BLOG 3 */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="it-blog__item">

                <div className="it-blog__thumb p-relative">

                  <img
                    className="w-100"
                    src="/assets/images/medium.jpg"
                    alt="IT Solutions"
                  />

                  <div className="it-blog__icon">
                    <Link href="/blog">
                      <i className="flaticon-up-right-arrow"></i>
                    </Link>
                  </div>

                </div>

                <div className="it-blog__content">

                  <div className="it-blog__meta">
                    <span>
                      March 23, 2023 _ Development
                    </span>
                  </div>

                  <h4 className="it-blog__title">
                    <Link href="/blog">
                      What is Holding Back The IT Solution
                    </Link>
                  </h4>

                  <Link href="/blog">
                    Read More
                  </Link>

                </div>

              </div>
            </div>

          </div>


          
        </div>

      </div>
    </>
  );
};

export default BlogHomeOne;