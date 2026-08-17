import { Link } from "react-router-dom";
import Slider from "react-slick";
import data from '../../Data/Home1/project1.json';
import SectionTitle from "../Common/SectionTitle";


const Project1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }; 

    return (
        <div className="project sp">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto text-center">
                <div className="heading1">
                    <SectionTitle
                        SubTitle=""
                        Title="Our Clients"
                    ></SectionTitle>
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="row">
              <div className="project-slider cs_slider_gap_30">
                <Slider {...settings}>
                {data.map((item, i) => (
                <div key={i} className="single-slider">
                  <div className="slider-img">
                    <img src={item.img} alt="" />
                  </div>
                  
                </div>
                ))}
                </Slider>

              </div>


              </div>
            </div>
          </div>
    );
};

export default Project1;