import cssClasses from "./Cart.module.css";
import Model from "./Modal";

const Cart = (props) => {
  const CartItems = (
    <ul className={cssClasses['cart-items']}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Model onClose={props.onClose}>
      {CartItems}

      <div className={cssClasses.total}>
        <span>Total Amount</span>
        <span>34.64</span>
      </div>

      <div className={cssClasses.actions}>
        <button className={cssClasses['button--alt']} onClick={props.onClose}>Close</button>
        <button className={cssClasses.button}>Order</button>

      </div>
    </Model>
  );
};

export default Cart;
