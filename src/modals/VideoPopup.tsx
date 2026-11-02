"use client";

import React from "react";

interface VideoPopupProps {
  isVideoOpen: boolean;
  setIsVideoOpen: (value: boolean) => void;
  videoSrc?: string;
}

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoSrc = "/assets/images/sbvideo.mp4",
}: VideoPopupProps) => {
  if (!isVideoOpen) return null;

  return (
    <div className="sbros-video-overlay">
      <div className="sbros-video-popup">

        {/* CLOSE BUTTON */}
        <button
          type="button"
          className="sbros-video-close"
          onClick={() => setIsVideoOpen(false)}
          aria-label="Close video"
        >
          ×
        </button>

        {/* LOCAL VIDEO */}
        <video
          className="sbros-local-video"
          controls
          autoPlay
          playsInline
        >
          <source
            src={videoSrc}
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

      </div>
    </div>
  );
};

export default VideoPopup;