// Next.js use panna na, indha file-oda mela ithai add pannunga:
// 'use client';

import React, { useEffect, useMemo, useRef, useState } from "react";


/* =========================================
   SETTINGS - inga maathina podhum
========================================= */
const LOGO_URL = "/favicon-logo.png"; // unga logo path
const COMPANY_NAME = "SBROS Tech (S) PTE LTD";
const ENTERPRISE_TEXT = "Your Dreams Our Mission";
const VERSION = "v1.0.0";

const TOTAL_TIME = 9500; // preloader total time (ms)
const FADE_TIME = 700;   // fade-out time (ms)

const Preloader = ({ onComplete }) => {
  const letters = COMPANY_NAME.split("");
  const [leaving, setLeaving] = useState(false);

  // parent re-render aanalum timer reset aagaama irukka ref use panrom
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // preloader irukkumbodhu page scroll aagaama lock
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  // Animation full ah mudiyanum + page full ah load aaganum.
  // Rendum mudinja piragu thaan fade-out -> onComplete.
  useEffect(() => {
    let timeUp = false;
    let pageLoaded = document.readyState === "complete";
    let finished = false;
    let doneTimer;

    const tryFinish = () => {
      if (finished || !timeUp || !pageLoaded) return;
      finished = true;
      setLeaving(true);
      doneTimer = setTimeout(() => {
        if (onCompleteRef.current) onCompleteRef.current();
      }, FADE_TIME);
    };

    const timeTimer = setTimeout(() => {
      timeUp = true;
      tryFinish();
    }, TOTAL_TIME - FADE_TIME);

    const onLoad = () => {
      pageLoaded = true;
      tryFinish();
    };
    if (!pageLoaded) window.addEventListener("load", onLoad);

    return () => {
      clearTimeout(timeTimer);
      clearTimeout(doneTimer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  // particles - oru dhadava mattum random generate aagum
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        size: Math.random() * 7 + 3,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 6 + 5,
        color: i % 3 === 0 ? "var(--brand)" : i % 3 === 1 ? "#185A9B" : "#e79200",
      })),
    []
  );

  return (
    <div
      className={`splash-root ${leaving ? "is-leaving" : ""}`}
      role="status"
      aria-live="polite"
    >
      {/* ================= BACKDROP ================= */}
      <div className="splash-backdrop">
        <div className="splash-backdrop-bg" />

        <div className="splash-dotfield splash-dotfield-top" />
        <div className="splash-dotfield splash-dotfield-bottom" />

        {/* TOP LEFT */}
        <div className="splash-shape splash-shape-tl tl-1" />
        <div className="splash-shape splash-shape-tl tl-2" style={{ animationDelay: "250ms" }} />
        <div className="splash-shape splash-shape-tl tl-3" style={{ animationDelay: "500ms" }} />
        <div className="splash-shape splash-shape-tl tl-4" style={{ animationDelay: "750ms" }} />
        <div className="splash-shape splash-shape-tl tl-5" style={{ animationDelay: "1000ms" }} />
        <div className="splash-shape tl-glow" />

        {/* BOTTOM RIGHT */}
        <div className="splash-shape splash-shape-br br-1" />
        <div className="splash-shape splash-shape-br br-2" style={{ animationDelay: "250ms" }} />
        <div className="splash-shape splash-shape-br br-3" style={{ animationDelay: "500ms" }} />
        <div className="splash-shape splash-shape-br br-4" style={{ animationDelay: "750ms" }} />
        <div className="splash-shape br-glow" />
      </div>

      {/* ================= PARTICLES ================= */}
      <div className="splash-particles">
        {particles.map((p, i) => (
          <span
            key={`particle-${i}`}
            className="splash-particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              background: p.color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* ================= GLOW ORBS ================= */}
      <div className="splash-orbs">
        <div className="splash-glow-orb orb-1" />
        <div className="splash-glow-orb orb-2" style={{ animationDelay: "2s" }} />
        <div className="splash-glow-orb orb-3" style={{ animationDelay: "4s" }} />
      </div>

      {/* ================= CENTER ================= */}
      <main className="splash-main">
        <section className="splash-section">
          {/* LOGO */}
          <div className="splash-logo-pop">
            <span className="splash-ring-pulse ring-1" />
            <span className="splash-ring-pulse ring-2" style={{ animationDelay: "700ms" }} />
            <span className="splash-ring-pulse ring-3" style={{ animationDelay: "1400ms" }} />
            <span className="splash-ring-pulse ring-4" style={{ animationDelay: "2100ms" }} />

            <span className="splash-ring-static" />
            <span className="splash-logo-tint" />
            <span className="splash-rotate-glow" />

            <span className="splash-shine">
              <span />
            </span>

            <img
              src={LOGO_URL}
              alt={`${COMPANY_NAME} logo`}
              className="splash-logo-float"
              draggable={false}
            />
          </div>

          {/* COMPANY NAME */}
          <div className="splash-name-wrap">
            <h1 className="splash-company-name" aria-label={COMPANY_NAME}>
              {letters.map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  aria-hidden="true"
                  className="splash-letter"
                  style={{
                    animationDelay: `${1000 + index * 120}ms`,
                    minWidth: letter === " " ? "0.35em" : undefined,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>
          </div>

          {/* UNDERLINE */}
          <div
            className="splash-underline-reveal"
            style={{ animationDelay: `${1000 + letters.length * 120 + 400}ms` }}
          />

          {/* ENTERPRISE SOFTWARE */}
          <p className="splash-subtitle">{ENTERPRISE_TEXT}</p>

          {/* DIVIDER */}
          <div className="splash-divider">
            <span className="line" />
            <span className="diamond" />
            <span className="line" />
          </div>

          {/* LOADING BAR */}
          <div className="splash-bar-container">
            <div className="splash-loading-bar" />
          </div>

          {/* LOADING TEXT */}
          <div className="splash-loading-text">
            <p>Starting workspace</p>
            <span className="splash-dots">
              <span className="splash-dot" style={{ animationDelay: "0ms" }} />
              <span className="splash-dot" style={{ animationDelay: "300ms" }} />
              <span className="splash-dot" style={{ animationDelay: "600ms" }} />
            </span>
          </div>

          {/* VERSION */}
          <span className="splash-version">{VERSION}</span>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="splash-footer-wrap">
        <p className="splash-footer">
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Preloader;