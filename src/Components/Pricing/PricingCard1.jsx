import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const orderId = "PO-F19E85D1C34C";

const customer = {
  name: "jeni",
  email: "14jeni15@gmail.com",
  company: "asfdrfdfd",
};

const defaultPlan = {
  name: "Pro Max",
  price: "SGD 499",
  billing: "Monthly",
};

const TAX_RATE = 0.09;

const parsePrice = (priceStr) =>
  Number(String(priceStr).replace(/[^0-9.]/g, "")) || 0;

const currency = (value) =>
  `SGD ${value.toLocaleString("en-SG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
      <circle
        cx="12"
        cy="8"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4.5 20c1.4-3.6 4.4-5.5 7.5-5.5s6.1 1.9 7.5 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4.5 6.5 12 12.5l7.5-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
      <rect
        x="4"
        y="3.5"
        width="10"
        height="17"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M14 9.5h6v11h-6M7.5 7.5h1M10.5 7.5h1M7.5 10.5h1M10.5 10.5h1M7.5 13.5h1M10.5 13.5h1M7.5 16.5h1M10.5 16.5h1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCard() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <rect
        x="3"
        y="5.5"
        width="18"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M3 9.5h18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconQr() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <rect
        x="3"
        y="3"
        width="7"
        height="7"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect
        x="14"
        y="3"
        width="7"
        height="7"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect
        x="3"
        y="14"
        width="7"
        height="7"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M14 14h3v3h-3zM19 14h2v2h-2zM14 19h2v2h-2zM19 19h2v2h-2z"
        fill="currentColor"
      />
    </svg>
  );
}

const PricingCard1 = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Pricing page-la irundhu selected plan varum
  const plan = location.state?.plan || defaultPlan;

  const planPrice = parsePrice(plan.price);
  const tax = planPrice * TAX_RATE;
  const finalAmount = planPrice + tax;

  const planLabel = `${plan.name} - ${
    plan.billing || "Monthly"
  } billing`;

  const [paymentMethod, setPaymentMethod] = useState("paynow");

  const [billing, setBilling] = useState({
    fullName: customer.name,
    companyName: customer.company,
    mobile: "985632147",
    uen: "",
    block: "",
    unit: "",
    street: "",
    building: "",
    postal: "",
  });

  const handleChange = (field) => (e) => {
    setBilling((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handlePay = (e) => {
    e.preventDefault();

    navigate("/payment", {
      state: {
        order: {
          orderId,
          planLabel,
          planPrice,
          tax,
        },
      },
    });
  };

  return (
    <div className="checkout">
      <header className="checkout__header">
        <h1 className="checkout__title">Checkout</h1>
        <p className="checkout__order-id">
          Order {orderId}
        </p>
      </header>

      <div className="checkout__stack">

        {/* CUSTOMER INFORMATION */}
        <section className="checkout-card">
          <h2 className="checkout-card__title">
            Customer Information
          </h2>

          <ul className="info-list">
            <li>
              <IconUser />
              <span>{customer.name}</span>
            </li>

            <li>
              <IconMail />
              <span>{customer.email}</span>
            </li>

            <li>
              <IconBuilding />
              <span>{customer.company}</span>
            </li>
          </ul>
        </section>


        {/* ORDER SUMMARY */}
        <section className="checkout-card">
          <h2 className="checkout-card__title">
            Order Summary
          </h2>

          <p className="order-summary__plan">
            {planLabel}
          </p>

          <div className="order-summary__rows">
            <div className="order-summary__row">
              <span>Plan price</span>
              <span>{currency(planPrice)}</span>
            </div>

            <div className="order-summary__row">
              <span>Tax</span>
              <span>{currency(tax)}</span>
            </div>
          </div>

          <div className="order-summary__final">
            <span>Final amount</span>

            <span className="order-summary__final-amount">
              {currency(finalAmount)}
            </span>
          </div>

          <p className="order-summary__note">
            Calculated by the server - not editable here.
          </p>
        </section>


        {/* BILLING DETAILS */}
        <section className="checkout-card">

          <h2 className="checkout-card__title">
            Business Billing Details
          </h2>

          <p className="checkout-card__subtitle">
            Used for your invoice - not your account identity.
          </p>

          <div className="form-grid">

            <label className="field field--full">
              <span className="field__label">
                Full name *
              </span>

              <input
                type="text"
                value={billing.fullName}
                onChange={handleChange("fullName")}
              />
            </label>


            <label className="field field--full">
              <span className="field__label">
                Company name *
              </span>

              <input
                type="text"
                value={billing.companyName}
                onChange={handleChange("companyName")}
              />
            </label>


            <label className="field field--full">
              <span className="field__label">
                Mobile number *
              </span>

              <input
                type="tel"
                value={billing.mobile}
                onChange={handleChange("mobile")}
              />
            </label>


            <label className="field field--full">
              <span className="field__label">
                UEN / Business registration no. (optional)
              </span>

              <input
                type="text"
                placeholder="201912345N"
                value={billing.uen}
                onChange={handleChange("uen")}
              />
            </label>


            <label className="field">
              <span className="field__label">
                Block/House no.
              </span>

              <input
                type="text"
                placeholder="12"
                value={billing.block}
                onChange={handleChange("block")}
              />
            </label>


            <label className="field">
              <span className="field__label">
                Unit no.
              </span>

              <input
                type="text"
                placeholder="#03-45"
                value={billing.unit}
                onChange={handleChange("unit")}
              />
            </label>


            <label className="field field--full">
              <span className="field__label">
                Street name
              </span>

              <input
                type="text"
                placeholder="Example Street"
                value={billing.street}
                onChange={handleChange("street")}
              />
            </label>


            <label className="field">
              <span className="field__label">
                Building name
              </span>

              <input
                type="text"
                placeholder="Example Tower"
                value={billing.building}
                onChange={handleChange("building")}
              />
            </label>


            <label className="field">
              <span className="field__label">
                Postal code
              </span>

              <input
                type="text"
                placeholder="123456"
                value={billing.postal}
                onChange={handleChange("postal")}
              />
            </label>

          </div>


          <div className="divider" />


          {/* PAYMENT METHOD */}
          <h3 className="payment-method__title">
            Payment method
          </h3>

          <div className="payment-method__options">

            <button
              type="button"
              className={`payment-option${
                paymentMethod === "card"
                  ? " payment-option--active"
                  : ""
              }`}
              onClick={() => setPaymentMethod("card")}
            >
              <span
                className={`payment-option__radio${
                  paymentMethod === "card"
                    ? " payment-option__radio--checked"
                    : ""
                }`}
              />

              <IconCard />

              <span>Card</span>
            </button>


            <button
              type="button"
              className={`payment-option${
                paymentMethod === "paynow"
                  ? " payment-option--active"
                  : ""
              }`}
              onClick={() => setPaymentMethod("paynow")}
            >
              <span
                className={`payment-option__radio${
                  paymentMethod === "paynow"
                    ? " payment-option__radio--checked"
                    : ""
                }`}
              />

              <IconQr />

              <span>PayNow</span>
            </button>

          </div>


          {/* PAYNOW */}
          {paymentMethod === "paynow" && (
            <div className="paynow-box">

              <p className="paynow-box__hint">
                <IconQr />
                Scan with any PayNow-supported banking app (demo)
              </p>

              <div
                className="paynow-box__qr"
                aria-hidden="true"
              >
                <QrPlaceholder />
              </div>

              <p className="paynow-box__amount">
                {currency(finalAmount)}
              </p>

            </div>
          )}


          <button
            type="button"
            className="pay-button"
            onClick={handlePay}
          >
            Proceed to Pay {currency(finalAmount)}
          </button>


          <p className="checkout__footnote">
            Secure checkout - your account details are used exactly as
            verified during signup.
          </p>

        </section>
      </div>
    </div>
  );
};


function QrPlaceholder() {
  const cells = [];
  const size = 12;

  let seed = 42;

  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {

      const isFinder =
        (row < 3 && col < 3) ||
        (row < 3 && col > size - 4) ||
        (row > size - 4 && col < 3);

      const filled = isFinder
        ? true
        : rand() > 0.55;

      if (filled) {
        cells.push(
          <rect
            key={`${row}-${col}`}
            x={col}
            y={row}
            width="1"
            height="1"
          />
        );
      }
    }
  }

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width="150"
      height="150"
    >
      <rect
        x="0"
        y="0"
        width={size}
        height={size}
        fill="#fff"
      />

      <g fill="#1a1a1a">
        {cells}
      </g>
    </svg>
  );
}

export default PricingCard1;