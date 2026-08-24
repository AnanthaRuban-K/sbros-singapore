import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


const defaultOrder = {
  orderId: "PO-A6ED4FE078A1",
  planLabel: "Basic - Monthly billing",
  planPrice: 49.0,
  tax: 4.41,
};

const currency = (value) =>
  `SGD ${value.toLocaleString("en-SG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" width="50" height="50" fill="none">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 12.3l2.6 2.6L16.2 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state?.order || defaultOrder;
  const finalAmount = order.planPrice + order.tax;

  return (
    <div className="payment">
      <header className="payment__header">
        <h1 className="payment__title">Checkout</h1>
        <p className="payment__order-id">Order {order.orderId}</p>
      </header>

      <div className="payment__stack">
        {/* Order Summary */}
        <section className="payment-card">
          <h2 className="payment-card__title">Order Summary</h2>
          <p className="payment-summary__plan">{order.planLabel}</p>

          <div className="payment-summary__rows">
            <div className="payment-summary__row">
              <span>Plan price</span>
              <span>{currency(order.planPrice)}</span>
            </div>
            <div className="payment-summary__row">
              <span>Tax</span>
              <span>{currency(order.tax)}</span>
            </div>
          </div>

          <div className="payment-summary__final">
            <span>Final amount</span>
            <span className="payment-summary__final-amount">
              {currency(finalAmount)}
            </span>
          </div>
          <p className="payment-summary__note">
            Calculated by the server - not editable here.
          </p>
        </section>

        {/* Success panel */}
        <section className="success-card">
          <div className="success-card__icon">
            <IconCheck />
          </div>

          <h2 className="success-card__title">Payment successful (demo)</h2>

          <p className="success-card__text">
            {currency(finalAmount)} for order {order.orderId} has been marked
            as paid.
            <br />
            Your company workspace has been set up.
          </p>

          <button
            type="button"
            className="success-card__cta"
            onClick={() => navigate("/login")}
          >
            Log in to your dashboard
          </button>
        </section>
      </div>
    </div>
  );
}