import { Link } from 'react-router-dom';
import data from '../../Data/Home1/choose1.json';

const Choose1 = () => {

    const mainContent = {
        
        title:'How We Create Value ',
        Content:'At SBros, we deliver flexible IT solutions tailored to your unique business needs, challenges, and growth goals.',
      
    
        img1:'/assets/img/work/work-img1.png',
        img2:'/assets/img/work/work-img3.png',
        img3:'/assets/img/work/work-img2.png',
      }

    return (
        <div className="work sp">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="heading1">
                  <h2 className="title tg-element-title">{mainContent.title}</h2>
                  <div className="space16"></div>
                  <p data-aos="fade-right" data-aos-duration="700">{mainContent.Content}</p>

                  {data.map((item, i) => (
                  <div key={i} className="single-items" data-aos="fade-right" data-aos-duration="700">
                    <div className="">
                      <div className="icon">
                        <img src={item.img} alt="" />
                      </div>
                    </div>
                    <div className="">
                      <h4><Link to="/service/service-details">{item.title}</Link></h4>
                      <div className="space10"></div>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
                </div>
                
              </div>

              <div className="col-lg-6">
                <div className="work-images">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="image image-anime">
                        <img src={mainContent.img1} alt="" />
                      </div>
                      <div className="image image-anime">
                        <img src={mainContent.img2} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="image image-anime">
                        <img src={mainContent.img3} alt="" />
                      </div>
                    </div>
                  </div>
                  <img src="/assets/img/bg/work-bg.png" alt="" className="bg-image shape-animaiton4" />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Choose1;