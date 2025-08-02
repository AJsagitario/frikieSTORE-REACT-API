import { useState } from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";


function App(){
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const addToCart= (product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty +1} : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return ( //definir lo que se va a mostrar en pantalla
    <>
      <Routes>
        <Route path="/success" element={<Success />} />

        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        
        <Route path="/" element= {
          <>
            <div 
              style={{
                position: "fixed",
                top: "20px",
                right: showCart ? "340px": "20px",
                zIndex: 2000,
                transition: "right 0.3s"
              }}
            >
              <button
                onClick={() => setShowCart(!showCart)}
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
                🛒 ({cartItems.reduce((sum,item)=> sum+item.qty, 0)})
              </button>
            </div>

            <Home onAddToCart={addToCart} />

            {showCart && (
              <Cart
                cartItems={cartItems}
                onRemove={removeFromCart}
                onClose={() => setShowCart(false)}
                onCheckout={() => navigate("/checkout")} 
              />
            )}
          </>
        }
        />
      </Routes>
    </>
  );
}
export default App;
