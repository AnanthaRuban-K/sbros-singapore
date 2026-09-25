import { useEffect, useRef } from "react";

const HeroVideo = ({ src, poster }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;

        const playVideo = async () => {
            try {
                await video.play();
            } catch (error) {
                console.log("Video autoplay waiting:", error);
            }
        };

        playVideo();

        const handleLoadedData = () => {
            playVideo();
        };

        video.addEventListener("loadeddata", handleLoadedData);

        return () => {
            video.removeEventListener(
                "loadeddata",
                handleLoadedData
            );

            video.pause();
        };
    }, [src]);

    return (
        <section className="sbros-showcase">

            {/* =====================================================
                CINEMATIC VIDEO
            ===================================================== */}

            <div className="sbros-showcase-video-wrap">

                {/* Decorative glow */}
                <div className="sbros-video-glow glow-one"></div>
                <div className="sbros-video-glow glow-two"></div>


                <div className="sbros-showcase-video">

                    {/* ================= VIDEO ================= */}

                    <video
                        ref={videoRef}
                        src={src}
                        poster={poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    />


                    {/* ================= DARK CINEMATIC OVERLAY ================= */}

                    <div className="sbros-video-shade"></div>


                    {/* ================= MOVING LIGHT ================= */}

                    <div className="sbros-video-light"></div>


                    {/* ================= DIGITAL GRID ================= */}

                    <div className="sbros-video-grid"></div>


                    {/* ================= TOP LABEL ================= */}

                    {/* <div className="sbros-video-top-label">

                        <span className="live-dot"></span>

                        <span>
                            SBROS TECHNOLOGY
                        </span>

                    </div> */}


                    {/* ================= TOP RIGHT ================= */}

                    {/* <div className="sbros-video-corner">

                        <span>DIGITAL</span>
                        <span>ECOSYSTEM</span>

                    </div> */}


                    {/* ================= BOTTOM CONTENT ================= */}

                    <div className="sbros-video-bottom-content">

                        {/* <div className="sbros-video-title">

                            <span>
                                INTELLIGENT TECHNOLOGY
                            </span>

                            <h3>
                                Connecting
                                <br />

                                <strong>
                                    business & technology.
                                </strong>
                            </h3>

                        </div> */}


                        <div className="sbros-video-description">

                            <div className="description-line"></div>

                            {/* <p>
                                Powerful digital experiences,
                                connected systems and smarter
                                business operations.
                            </p> */}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default HeroVideo;