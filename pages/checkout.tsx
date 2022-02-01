import { NextPage } from "next";
import { CheckoutError } from "../components/checkout-error";
import { NavBar } from "../components/nav-bar";

const Checkout: NextPage = () => {
  return (
    <div>
      <NavBar />
      <CheckoutError />
    </div>
  );
};
export default Checkout;
