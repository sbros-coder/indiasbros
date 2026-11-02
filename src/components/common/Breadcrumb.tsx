import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({ title, subtitle }: any) => {
  return (
    <div
      className="it-breadcrumb__area p-relative fix sbros-breadcrumb"
      style={{
        backgroundImage: `url(/assets/images/3d.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Breadcrumb Shapes */}
      <div
        className="it-breadcrumb__shape-2 wow itfadeRight"
        data-wow-duration=".9s"
        data-wow-delay=".9s"
      >
        <img
          src="/assets/img/breadcrumb/shape-1-2.png"
          alt="breadcrumb shape"
        />
      </div>

      <div
        className="it-breadcrumb__shape-3 wow itfadeRight"
        data-wow-duration=".9s"
        data-wow-delay="1.4s"
      >
        <img
          src="/assets/img/breadcrumb/shape-1-3.png"
          alt="breadcrumb shape"
        />
      </div>

      <div className="container sbros-breadcrumb-container">
        <div className="row">
          <div className="col-12">
            {/* TITLE + HOME SAME SIDE */}
            <div className="sbros-breadcrumb-content">
              <h3 className="it-breadcrumb__title">{title}</h3>

              <div className="it-breadcrumb__list">
                <span>
                  <Link href="/">HOME</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;