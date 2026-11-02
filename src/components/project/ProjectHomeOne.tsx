"use client"

import Link from 'next/link';
import React, { useEffect } from 'react';

const ProjectHomeOne = () => {

  useEffect(() => {
    const panels = document.querySelectorAll<HTMLElement>('.col-custom');
    const mq = window.matchMedia('(min-width: 768px)');
    const handlers = new Map<HTMLElement, () => void>();

    const clear = () => panels.forEach((p) => p.classList.remove('active'));

    const setup = () => {
      // old listeners remove
      handlers.forEach((fn, panel) => panel.removeEventListener('mouseenter', fn));
      handlers.clear();
      clear();

      if (mq.matches) {
        panels.forEach((panel, index) => {
          const onEnter = () => {
            clear();
            panel.classList.add('active');
          };
          panel.addEventListener('mouseenter', onEnter);
          handlers.set(panel, onEnter);
          if (index === 2) panel.classList.add('active'); // default 3rd panel
        });
      } else {
        panels.forEach((p) => p.classList.add('active'));
      }
    };

    setup();
    mq.addEventListener('change', setup);

    return () => {
      mq.removeEventListener('change', setup);
      handlers.forEach((fn, panel) => panel.removeEventListener('mouseenter', fn));
    };
  }, []);

  return (
    <>
      <div className="it-project__area fix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-project__section-title text-center">
                <span className="it-section-subtitle">OUR SHOWCASE</span>
                <h4 className="it-section-title">Check Our Latest Projects</h4>
              </div>
            </div>
          </div>

          <div className="row-custom">

            <div className="col-custom">
              <div className="it-panel-item-box p-relative">
                <div className="it-panel-item">
                  <div className="it-panel-content">
                    <img src="/assets/images/port1.jpg" alt="Megabytes Offshore" />
                  </div>
                </div>
                <div className="it-panel-item-2">
                  <div className="it-panel-content-2">
                    <Link href="https://megabytesgroup.com.sg/" target="_blank" rel="noopener noreferrer"><h4 className="it-panel-title-2">Megabytes Offshore</h4></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-custom">
              <div className="it-panel-item-box p-relative">
                <div className="it-panel-item">
                  <div className="it-panel-content">
                    <img src="/assets/images/luxury1.jpg" alt="AAG Construction" />
                  </div>
                </div>
                <div className="it-panel-item-2">
                  <div className="it-panel-content-2">
                    <Link href="https://aagconsg.com/" target="_blank" rel="noopener noreferrer"><h4 className="it-panel-title-2">AAG Construction</h4></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-custom">
              <div className="it-panel-item-box p-relative">
                <div className="it-panel-item">
                  <div className="it-panel-content">
                    <img src="/assets/images/ice-cube.jpg" alt="Trinity Hospital" />
                  </div>
                </div>
                <div className="it-panel-item-2">
                  <div className="it-panel-content-2">
                    <Link href="https://tucklee1935.sg/" target="_blank" rel="noopener noreferrer"><h4 className="it-panel-title-2">Tusk Lee</h4></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-custom">
              <div className="it-panel-item-box p-relative">
                <div className="it-panel-item">
                  <div className="it-panel-content">
                    <img src="/assets/images/it-training.jpg" alt="Kaizen Groups" />
                  </div>
                </div>
                <div className="it-panel-item-2">
                  <div className="it-panel-content-2">
                    <Link href="https://firstchoicehub.com.sg/" target="_blank" rel="noopener noreferrer"><h4 className="it-panel-title-2">First Choice Hub</h4></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-custom">
              <div className="it-panel-item-box p-relative">
                <div className="it-panel-item">
                  <div className="it-panel-content">
                    <img src="/assets/images/group.jpg" alt="V.S. Builders And Engineering" />
                  </div>
                </div>
                <div className="it-panel-item-2">
                  <div className="it-panel-content-2">
                    <Link href="https://www.vsbuilderssg.com/" target="_blank" rel="noopener noreferrer"><h4 className="it-panel-title-2">V.S. Builders And Engineering Pte . Ltd</h4></Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHomeOne;