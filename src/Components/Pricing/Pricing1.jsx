import { useNavigate } from "react-router-dom";


const plans = [
  {
    name: "Basic",
    billing: "Monthly",
    price: "SGD 49",
    tagline: "Entry-level plan for small teams.",
    meta: ["Up to 10 users", "10 GB storage"],
    features: ["Up to 10 users", "10 GB storage", "Email support"],
    popular: false,
  },
  {
    name: "Enterprise",
    billing: "Monthly",
    price: "SGD 499",
    tagline: "For large multi-department organizations.",
    meta: ["Up to 500 users", "1 TB storage"],
    features: [
      "Up to 500 users",
      "1 TB storage",
      "Dedicated support",
      "SSO",
      "Custom SLA",
    ],
    popular: true,
  },
  {
    name: "Pro",
    billing: "Monthly",
    price: "SGD 149",
    tagline: "For growing companies.",
    meta: ["Up to 50 users", "100 GB storage"],
    features: [
      "Up to 50 users",
      "100 GB storage",
      "Priority support",
      "API access",
    ],
    popular: false,
  },
  {
    name: "Pro Max",
    billing: "Monthly",
    price: "SGD 499",
    tagline: "fdsdddfdfdssvsfff",
    meta: ["Up to 99 users", "55 GB storage"],
    features: ["Up to 99 users"],
    popular: false,
  },
];

function PlanCard({ plan, onSubscribe }) {
  return (
    <div
      className={`plan-card${
        plan.popular ? " plan-card--popular" : ""
      }`}
    >
      {plan.popular && (
        <span className="plan-card__badge">
          <span className="plan-card__badge-icon">&#9813;</span>
          Most Popular
        </span>
      )}

      <div className="plan-card__header">
        <h3 className="plan-card__name">{plan.name}</h3>
        <span className="plan-card__billing">{plan.billing}</span>
      </div>

      <div className="plan-card__price">
        {plan.price}
        <span className="plan-card__price-suffix">/mo</span>
      </div>

      <p className="plan-card__tagline">{plan.tagline}</p>

      <div className="plan-card__meta">
        {plan.meta.map((line, index) => (
          <div key={`${line}-${index}`}>{line}</div>
        ))}
      </div>

      <ul className="plan-card__features">
        {plan.features.map((feature, index) => (
          <li key={`${feature}-${index}`}>
            <span className="plan-card__check">&#10003;</span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`plan-card__cta${
          plan.popular ? " plan-card__cta--popular" : ""
        }`}
        onClick={() => onSubscribe(plan)}
      >
        Subscribe
      </button>
    </div>
  );
}

const Pricing = () => {
  const navigate = useNavigate();

 const handleSubscribe = (plan) => {
  navigate("/PricingCard1", {
    state: {
      plan,
    },
  });
};

  return (
    <section className="pricing">
      <div className="pricing__eyebrow">PRICING</div>

      <h2 className="pricing__title">
        Choose your plan
      </h2>

      <div className="pricing__grid">
        {plans.map((plan) => (
          <PlanCard
            key={plan.name}
            plan={plan}
            onSubscribe={handleSubscribe}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;