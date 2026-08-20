import Slider from "react-slick";
import data from "../../Data/Home1/project1.json";
import SectionTitle from "../Common/SectionTitle";

const Project1 = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,

    slidesToShow: 4,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",

    pauseOnHover: true,
    pauseOnFocus: true,

    swipe: true,
    draggable: true,
    swipeToSlide: true,
    touchMove: true,

    responsive: [
      /* Laptop / Medium screens */
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          speed: 5000,
          autoplaySpeed: 0,
        },
      },

      /* Tablet */
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 5500,
          autoplaySpeed: 0,
        },
      },

      /* Mobile */
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 6000,
          autoplaySpeed: 0,
        },
      },

      /* Small Mobile */
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 5500,
          autoplaySpeed: 0,
        },
      },
    ],
  };

  return (
    <section className="sbros-clients">
      <div className="container">

        {/* Our Clients Heading */}
        <div className="sbros-clients-title-box">
          <SectionTitle
            SubTitle=""
            Title="Our Clients"
          />
        </div>

        {/* Client Logo Slider */}
        <div className="sbros-clients-slider">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div className="sbros-client-slide" key={index}>
                <div className="sbros-client-image">
                  <img
                    src={item.img}
                    alt={`Client ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default Project1;