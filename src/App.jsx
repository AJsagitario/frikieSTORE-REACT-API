import { useState } from "react";
import Home from "./pages/Home";
import Cart from "./components/Cart";

function App(){
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart= (product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
        item.id === product.id ? { ...item, qty:item.qty +1} : item
      );
      }
      return [...prev, {...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return ( //definir lo que se va a mostrar en pantalla
    <div>
      <div style={{
        position: "fixed", top: "20px", right: showCart ? "340px": "20px", zIndex: 2000, transition: "right 0.3s"
      }}>
        <button onClick={() => setShowCart(!showCart)}
          style={{
            background: "#2ecc71",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            fontSize: "16px",
            borderRadius: "8px",
            cursor: "pointer"
          }}
          >
            🛒 ({cartItems.length})
        </button>
      </div>
      <Home onAddToCart={addToCart} />
      {showCart && (
        <Cart
            cartItems={cartItems}
            onRemove={removeFromCart}
            onClose={() => setShowCart(false)} 
        />
      )}
    </div>
  );
}
export default App;
