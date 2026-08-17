import data from '../../Data/Home1/award1.json';

const Award1 = () => {
  return (
    <div className="services-wrapper">
      <div className="container">
        <div className="services-running">
          <div className="services-track">

            {data.map((item, i) => (
              <div className="service-item" key={i}>
                {item.title}
              </div>
            ))}

            {/* Duplicate for seamless continuous scrolling */}
            {data.map((item, i) => (
              <div className="service-item" key={`duplicate-${i}`}>
                {item.title}
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Award1;