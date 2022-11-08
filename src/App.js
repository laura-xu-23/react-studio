import "./App.css";
import { useState, useEffect } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0); 

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (item) => setCart([...cart, item]);

  const items = bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
  <div className="BakeryItem" key={index}>
    <img src={item.image} width={500}/>
    <p>{item.name}: ${item.price}</p>
    <p>{item.description}</p>
    <button onClick={() => addToCart(item)}>Add to Cart</button>
  </div>
  ))

  const cartItems = cart.map((item, index) => (
    <div key={index}>
      <p>{item.name}: ${item.price}</p>
    </div>
  ));

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      {items}
      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {cartItems}
        <b>Total: ${cartTotal}</b>
      </div>
    </div>
  );
}

export default App;
