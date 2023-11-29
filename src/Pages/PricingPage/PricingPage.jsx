
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51OHgzUEnXXQGodr3epFypSCxxaPtWtV8iOcyu4JJThIrsjsQ9XRlxWgRvSmvMuURmt5u2aGELf4KaM4brjT1TczH00zjTJyEHp"
);

import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const PricingPage = () => {
    return (
      <div>
        <h1>Prising Page</h1>
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    );
};

export default PricingPage;