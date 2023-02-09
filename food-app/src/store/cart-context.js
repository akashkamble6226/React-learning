import React from "react";

const cartContext = React.createContext({
  items: [],
  cost: 0,
  addCartItem: (item) => {},
  removeCartItem: (id) => {},
});

export default cartContext;
