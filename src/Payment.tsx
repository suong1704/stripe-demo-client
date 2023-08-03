import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "./App.css";

const stripePromise = loadStripe(
  "pk_test_51NWFEyId7kYMA7WH2bDotlRcdhnaIKitqZYJXQJUhtNvWRSidhKazsrtByvTYJsMj9U66LpWYbyigMWjdSHWtFbP00ZtmzXZd6"
  // "pk_live_51NWFEyId7kYMA7WHNB2WDasWUu2Ye5R9qMYEEr8HFY2GDd1ThgzOIGaZPh851VBZMxvls4LABPQdLrHa4XVa5Q8K005lPqAMSx"
);

export default function Payment() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 2000 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={{ clientSecret }} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
