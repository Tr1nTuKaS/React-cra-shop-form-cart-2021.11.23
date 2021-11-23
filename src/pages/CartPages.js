import { useState } from "react";
import Step1 from "../components/checkout/Step1";
import Step2 from "../components/checkout/Step2";
import { useCartCtx } from "../store/CartContect";

//
// display all cart items from context in a list
function CartPage() {
  const [buyStep, setBuyStep] = useState(0);
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
    cardNo: "",
  });

  const cartCtx = useCartCtx();
  const weHaveItems = !!cartCtx.cartItems.length;
  return (
    <main>
      <h1>Cart page</h1>
      {!weHaveItems && <h2>Cart empty</h2>}
      {weHaveItems && buyStep === 0 && (
        <section>
          <h2>Items in cart</h2>
          {cartCtx.cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - {item.price}
            </li>
          ))}
          <br />
          <button onClick={() => setBuyStep(1)}>Buy now</button>
        </section>
      )}
      {buyStep === 1 && <Step1 setStep={setBuyStep} />}
      {buyStep === 2 && <Step2 />}
    </main>
  );
}

export default CartPage;
