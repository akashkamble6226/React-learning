import cartContext from "./cart-context";

const CartProvider = (props) => {
  const addCartItemHandler = (item) => {};
  const removeCartItemHandler = (id) => {};
    
  const Cartcontext = {
    item: [],
    cost: 0,
    addCartItem: addCartItemHandler,
    removeCartItem: removeCartItemHandler,
  };

  return <cartContext.Provider>{props.children}</cartContext.Provider>;
};

export default CartProvider;
