"use client";

import { useEffect, useRef } from "react";
import data from "../../Data/Home1/project1.json";

const Project1 = () => {
  const trackRef = useRef(null);
  const positionRef = useRef(0);
  const animationRef = useRef(null);

  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startPositionRef = useRef(0);

  if (!data?.length) return null;

  // Duplicate logos for infinite scrolling
  const logos = [...data, ...data, ...data];

  const getWidth = () => {
    if (!trackRef.current) return 0;

    return trackRef.current.scrollWidth / 3;
  };

  const normalize = (position) => {
    const width = getWidth();

    if (!width) return position;

    while (position <= -width) {
      position += width;
    }

    while (position >= 0) {
      position -= width;
    }

    return position;
  };

  const updatePosition = () => {
    if (!trackRef.current) return;

    trackRef.current.style.transform =
      `translate3d(${positionRef.current}px, 0, 0)`;
  };

  // Continuous movement
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (time) => {
      const delta = time - lastTime;

      lastTime = time;

      if (!draggingRef.current) {
        positionRef.current -= (150 * delta) / 1000;

        positionRef.current =
          normalize(positionRef.current);

        updatePosition();
      }

      animationRef.current =
        requestAnimationFrame(animate);
    };

    animationRef.current =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Drag start
  const handlePointerDown = (e) => {
    draggingRef.current = true;

    startXRef.current = e.clientX;

    startPositionRef.current =
      positionRef.current;

    e.currentTarget.setPointerCapture(
      e.pointerId
    );
  };

  // Drag movement
  const handlePointerMove = (e) => {
    if (!draggingRef.current) return;

    const distance =
      e.clientX - startXRef.current;

    positionRef.current =
      normalize(
        startPositionRef.current + distance
      );

    updatePosition();
  };

  // Drag end
  const handlePointerUp = (e) => {
    draggingRef.current = false;

    positionRef.current =
      normalize(positionRef.current);

    updatePosition();

    try {
      e.currentTarget.releasePointerCapture(
        e.pointerId
      );
    } catch {}
  };

  return (
    <section className="clients-section">

      {/* Heading */}

      <div className="clients-heading">
        <span className="clients-line"></span>

        <h2>Our Clients</h2>

        <span className="clients-line"></span>
      </div>

      {/* Logo Slider */}

      <div className="clients-marquee">

        <div
          ref={trackRef}
          className="clients-track"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >

          {logos.map((item, index) => (
            <div
              className="client-logo"
              key={`${item.img}-${index}`}
            >
              <img
                src={item.img}
                alt={`Client ${index + 1}`}
                draggable="false"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Project1;