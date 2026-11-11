import { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../Data/sercicePage.json';

// =====================================================
// SBROS TECH FAQ DATA
// =====================================================

const faqGroups = [
  {
    title: 'General',
    items: [
      {
        q: 'What IT services do SBros Tech provide?',
        a: (
          <>
            SBros Tech provide a variety of IT services in Singapore. These
            include ERP solutions, software development, web development, IT
            networking and trading. We provide solutions to help you with
            various business requirements. Speak to{' '}
            <Link to="/contact-us" className="faq2__link">
              our team
            </Link>{' '}
            to see what solution would be best for you.
          </>
        ),
      },
      {
        q: 'How can IT services help improve productivity?',
        a: 'IT services can help simplify your processes, improve communication, manage information and reduce manual tasks. Using the correct technology solutions will help your business run more efficiently.',
      },
      {
        q: 'How do I choose the right IT services?',
        a: 'Identify what issues you have within your business, what you need and what your goals are. Choose technology solutions to fit these needs.',
      },
      {
        q: 'Can I use multiple IT services from one technology company?',
        a: 'Yes! You can look into using multiple services such as ERP software, bespoke software development, web development and IT networking.',
      },
    ],
  },
  {
    title: 'ERP Solutions & Software Development',
    items: [
      {
        q: 'Do SBros Tech provide ERP solutions and bespoke software development?',
       a: (
    <>
      Yes! SBros Tech provide ERP solutions and bespoke software development
      to help streamline your processes and simplify your business. Speak to{' '}
      <Link to="/contact-us" className="faq2__link">
        SBros Tech
      </Link>{' '}
      for help with your requirements.
    </>
       )
      },
      {
        q: 'What are the benefits of using ERP software?',
        a: 'ERP software can help manage various operations within your business, organise your business information and streamline processes to help you make informed decisions.',
      },
      {
        q: 'What is the difference between ERP software and bespoke software development?',
        a: 'ERP software is used to manage various functions within your business whereas bespoke software is created to help with specific requirements.',
      },
      {
        q: 'Why would I need bespoke software development?',
        a: 'Bespoke software can help manage specific processes within your business, overcome any issues and use features tailored to your specific requirements.',
      },
    ],
  },
  {
    title: 'Web Development & IT Networking',
    items: [
      {
        q: 'Does SBros Tech provide web development and IT networking?',
        a: (
    <>
      Yes! SBros Tech provide professional web development and IT networking
      solutions to help you create an online presence, keep your systems
      secure and help your business run efficiently. Speak to{' '}
      <Link to="/contact-us" className="faq2__link">
        our team
      </Link>{' '}
      for more information on your project requirements.
    </>
  ),
      },
      {
        q: 'Why is professional web development important?',
        a: 'Professional web development will help you create an online presence, show off your services, improve user experience and engage with potential customers.',
      },
      {
        q: 'How will IT networking help my business?',
        a: 'IT networking will help connect your computers, devices and systems. This will help your business communicate, share information and help your business run smoothly.',
      },
      {
        q: 'What should I consider when looking for IT networking solutions?',
        a: 'Consider keeping your network secure, what connectivity you require, how well it will run, infrastructure and if it will help your business expand in the future.',
      },
    ],
  },
  {
    title: 'Trading Solutions',
    items: [
      {
        q: 'What trading solutions does SBros Tech provide?',
       a: (
    <>
      Yes! SBros Tech provide professional web development and IT networking
      solutions to help you create an online presence, keep your systems
      secure and help your business run efficiently. Speak to{' '}
      <Link to="/contact-us" className="faq2__link">
        our team
      </Link>{' '}
      for more information on your project requirements.
    </>
  ),
      },
      {
        q: 'How can trading solutions help my business grow?',
        a: 'Trading solutions can help connect your business to opportunities, improve processes and help your business run efficiently.',
      },
      {
        q: 'How can I find reliable trading opportunities?',
        a: 'Consider what requirements you have within your business, what opportunities are available in the market, if your suppliers are reliable, what processes you have in place and any potential risks.',
      },
      {
        q: 'Can I look into trading solutions alongside other IT services?',
        a: 'Yes! You can look into our trading solutions alongside our ERP, software development, web development and IT networking depending on your requirements.',
      },
    ],
  },
];

// =====================================================
// SERVICE 6 COMPONENT
// =====================================================

const Service6 = () => {
  const [activeGroup, setActiveGroup] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const selectGroup = (i) => {
    setActiveGroup(i);
    setOpenFaq(0);
  };

  const toggleFaq = (i) => {
    setOpenFaq((current) => (current === i ? null : i));
  };

  const current = faqGroups[activeGroup];

  return (
    <div className="servcie2 service-page-sec">
      <div className="space100"></div>

      <div className="container">
        {/* INTRO */}
        {/* INTRO */}
<div className="row justify-content-center" id="our-services">
  <div className="col-lg-10">
    <div className="svc-intro">
      <span className="svc-intro__eyebrow">What We Do</span>

      <h2>
        Services offered by <span>SBros Tech</span>
      </h2>

      <p>
        At SBros Tech we provide trusted IT services in Singapore. We have a
        range of services including ERP solutions, software development, web
        development, IT networking and trading to help you simplify your
        business operations, increase productivity and help your business
        grow. We use a combination of technology and business knowledge to
        provide practical solutions.
      </p>

      <ul className="svc-intro__chips">
        {data.map((item, i) => (
          <li key={i}>
            <Link to={item.btnLink}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
        <div className="space60"></div>

        {/* SERVICE CARDS */}
        {/* SERVICE CARDS */}
<div className="row svc-cards justify-content-center">
  {data.map((item, i) => (
    <div key={i} className="col-lg-4 col-md-6 svc-cards__col">
      <article className="svc-card">
        <span className="svc-card__num">
          {String(i + 1).padStart(2, '0')}
        </span>

        <div className="svc-card__icon">
          <img src={item.icon} alt={item.title} />
        </div>

        <h3 className="svc-card__title">{item.title}</h3>

        <p className="svc-card__desc">{item.desc}</p>

        <Link
          to={item.btnLink}
          className="svc-card__link"
          aria-label={`Learn more about ${item.title}`}
        >
          Learn more
          <i className="bi bi-arrow-right"></i>
        </Link>
      </article>
    </div>
  ))}
</div>

        <div className="space60"></div>

        {/* FAQ - TAB MODEL */}
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="faq2">
              <div className="faq2__head">
                <span className="faq2__eyebrow">FAQ</span>
                <h2>Frequently Asked Questions</h2>
                <p>
                  Quick answers to common questions about our IT services in Singapore.
                </p>
              </div>

              <div className="faq2__layout">
                {/* Left: categories */}
                <div className="faq2__tabs" role="tablist" aria-label="FAQ categories">
                  {faqGroups.map((g, gi) => (
                    <button
                      key={gi}
                      type="button"
                      role="tab"
                      aria-selected={activeGroup === gi}
                      className={`faq2__tab ${activeGroup === gi ? 'is-active' : ''}`}
                      onClick={() => selectGroup(gi)}
                    >
                      <span className="faq2__num">
                        {String(gi + 1).padStart(2, '0')}
                      </span>
                      <span className="faq2__tab-text">
                        <strong>{g.title}</strong>
                        {/* <small>{g.items.length} questions</small> */}
                      </span>
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  ))}
                </div>

                {/* Right: questions */}
                <div className="faq2__panel" key={activeGroup} role="tabpanel">
                  <h3 className="faq2__panel-title">{current.title}</h3>

                  {current.items.map((item, ii) => {
                    const isOpen = openFaq === ii;
                    return (
                      <div
                        className={`faq2__item ${isOpen ? 'is-open' : ''}`}
                        key={ii}
                      >
                        <button
                          type="button"
                          className="faq2__q"
                          aria-expanded={isOpen}
                          onClick={() => toggleFaq(ii)}
                        >
                          <span>{item.q}</span>
                          <span className="faq2__icon" aria-hidden="true"></span>
                        </button>
                        <div className="faq2__a">
                          <div>
                            <p>{item.a}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space30"></div>

        {/* CALL TO ACTION */}
        {/* CALL TO ACTION */}
<div className="row justify-content-center">
  <div className="col-lg-11">
    <div className="svc-cta">
      <div className="svc-cta__text">
        <h2>Need the right IT solutions for your business?</h2>
        <p>
          Use our reliable IT services to improve your business. We provide ERP,
          software development, web development, IT networking and trading
          solutions. If you have specific requirements speak to our team to find
          the right technology solution for you.
        </p>
      </div>

      <div className="svc-cta__actions">
        <Link to="/contact-us" className="svc-cta__btn svc-cta__btn--solid">
          Get In Touch
          <i className="bi bi-arrow-right"></i>
        </Link>

      </div>
    </div>
  </div>
</div>
      </div>

      <div className="space100"></div>
    </div>
  );
};

export default Service6;