import { NextPage } from "next";
import { CheckoutError } from "../components/checkout-error";

const Checkout: NextPage = () => {
  return (
    <div>
      <CheckoutError />
    </div>
  );
};
export default Checkout;
