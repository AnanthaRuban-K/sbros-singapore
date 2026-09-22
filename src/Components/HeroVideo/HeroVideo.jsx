import { useEffect, useRef } from "react";


const HeroVideo = ({ src, poster }) => {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    const video = videoRef.current;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Scroll progress (0 -> 1) drives the expand animation
    let ticking = false;

    const update = () => {
      const { top } = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = reduceMotion
        ? 1
        : Math.min(Math.max((vh - top) / (vh * 0.8), 0), 1);

      frame.style.setProperty("--p", progress.toFixed(3));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    // Play only when visible (saves CPU/battery)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="hero-video" ref={sectionRef}>
      <div className="hero-video__frame" ref={frameRef}>
        <video
          ref={videoRef}
          className="hero-video__media"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </section>
  );
};

export default HeroVideo;