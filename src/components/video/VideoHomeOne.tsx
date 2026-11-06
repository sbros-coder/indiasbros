"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";

const VIDEO_SRC = "/assets/images/aboutvideo.mp4";
const PREVIEW_IMG = "/assets/images/Corporate2.jpg";

const VideoHomeOne = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Click on play button -> show video and start playing right away
  const handlePlay = async (): Promise<void> => {
    const video = videoRef.current;
    if (!video) return;

    setHasError(false);
    setIsPlaying(true);

    try {
      if (video.error) video.load(); // retry if an earlier load failed
      video.currentTime = 0;
      await video.play();
    } catch (err) {
      console.error("Video play() failed:", err);
      setHasError(true);
    }
  };

  // Video finished -> go back to the image + play button
  const handleEnded = (): void => {
    setIsPlaying(false);
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement>): void => {
    console.error("Video error:", e.currentTarget.error, "| src:", VIDEO_SRC);
    setHasError(true);
  };

  return (
    <section className="sbros-video-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="sbros-video-content">

              <div className="sbros-video-subtitle">
                <span></span>
                WHAT WE DO
                <span></span>
              </div>

              <h2 className="sbros-video-title">
                Smart Technology
                <br />
                Powerful Business Solutions
              </h2>

              <p className="sbros-video-description">
                At <strong>SBros Tech</strong>, we create innovative digital
                solutions that help businesses grow, improve productivity,
                and build a stronger digital presence.
              </p>

              <div className="sbros-video-features">
                <div className="sbros-video-feature">
                  <span className="sbros-check">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  <div>
                    <h5>Innovative Digital Solutions</h5>
                    <p>
                      Modern technology solutions designed around your
                      business needs.
                    </p>
                  </div>
                </div>

                <div className="sbros-video-feature">
                  <span className="sbros-check">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  <div>
                    <h5>Professional Development</h5>
                    <p>
                      Reliable websites and software built for performance,
                      security, and growth.
                    </p>
                  </div>
                </div>

                <div className="sbros-video-feature">
                  <span className="sbros-check">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  <div>
                    <h5>Complete IT Support</h5>
                    <p>
                      From digital marketing to security systems, we provide
                      complete technology services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="sbros-video-button">
                <Link href="/about-us" className="sbros-video-btn">
                  <span>Discover More</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>

            </div>
          </div>

          {/* RIGHT VIDEO BOX */}
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="sbros-video-wrapper">

              <div className="sbros-video-image">

                {/* Video is always in the page; shown only while playing */}
                <video
                  ref={videoRef}
                  className={`sbros-inline-video${isPlaying ? " is-active" : ""}`}
                  src={VIDEO_SRC}
                  controls
                  playsInline
                  preload="metadata"
                  onEnded={handleEnded}
                  onError={handleError}
                >
                  Your browser does not support video playback.
                </video>

                {/* Preview image + play button (hidden while playing) */}
                {!isPlaying && (
                  <>
                    <img
                      src={PREVIEW_IMG}
                      alt="SBros Tech company video preview"
                      className="sbros-video-preview"
                    />

                    <div className="sbros-video-overlay"></div>

                    <button
                      type="button"
                      className="sbros-play-button"
                      onClick={handlePlay}
                      aria-label="Play company video"
                    >
                      <span className="sbros-play-icon">
                        <i className="fa-solid fa-play"></i>
                      </span>
                    </button>
                  </>
                )}

                {/* Error message (only if the video fails to load) */}
                {isPlaying && hasError && (
                  <div className="sbros-video-error">
                    <p>Video could not be loaded.</p>
                    <button type="button" onClick={() => setIsPlaying(false)}>
                      Go back
                    </button>
                  </div>
                )}

              </div>

              <div className="sbros-video-decoration"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoHomeOne;