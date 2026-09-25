import { useEffect, useRef } from "react";


const HeroVideo = ({ src, poster }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const startVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Video autoplay blocked:", error);
      }
    };

    video.addEventListener("loadeddata", startVideo);
    startVideo();

    return () => {
      video.removeEventListener("loadeddata", startVideo);
      video.pause();
    };
  }, [src]);

  return (
    <section className="hero-video">
      <video
        ref={videoRef}
        className="hero-video__media"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="hero-video__overlay"></div>
      <div className="hero-video__bottom-fade"></div>
    </section>
  );
};

export default HeroVideo;