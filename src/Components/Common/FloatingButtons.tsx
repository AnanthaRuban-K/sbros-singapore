import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // Singapore WhatsApp Number
  const phoneNumber = "6590214545";

  const message =
    "Hi, I'm interested in your programs. Can you help me?";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      {/* =========================
          WHATSAPP BUTTON
      ========================== */}
      <a
        href={whatsappLink}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="currentColor"
        >
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.34 7.09L4.9 27.5c-.13.47.31.9.78.77l5.55-1.4A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3zm0 21.75c-1.9 0-3.68-.5-5.23-1.38l-.37-.21-3.5.88.9-3.4-.24-.38A9.72 9.72 0 0 1 6.25 15c0-5.38 4.37-9.75 9.75-9.75S25.75 9.62 25.75 15 21.38 24.75 16 24.75zm5.35-7.32c-.29-.15-1.73-.86-2-.95-.27-.1-.47-.15-.66.15-.2.29-.76.95-.93 1.15-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.02c.15.19 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.61.7.22 1.34.19 1.85.12.56-.08 1.73-.71 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.12-.26-.19-.55-.34z" />
        </svg>
      </a>

      {/* =========================
          SCROLL TO TOP BUTTON
      ========================== */}
      <button
        className={`scroll-to-top ${isVisible ? "show" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} strokeWidth={2} />
      </button>
    </>
  );
};

export default FloatingButtons;