import React from "react";
import styles from "./Cart.module.css";


const Cart = ({cartItems, onRemove, onClose, onCheckout}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>🛒 Carrito</h2>
            {cartItems.length === 0 ? (
                <p className={styles.empty}>El coche esta vacio XD</p>       
            ) : (
                <>
                {cartItems.map((item) => (
                    <div key={item.id} className={styles.item}>
                            <img 
                            src={item.image} 
                            alt={item.title} 
                            className={styles.cartItemImage}
                            />
                        <p><strong>{item.title}</strong></p>
                        <p>Cantidad: {item.qty}</p>
                        <p>Precio: ${item.price}</p>
                        <button onClick={() => onRemove(item.id)} className={styles.btnRemove}>
                            Eliminar
                        </button>
                    </div>
                ))}
                <div className={styles.actions}>
                    <button onClick={onClose} className={styles.btnContinue}>
                        Seguir comprando
                    </button>
                    <button onClick={onCheckout} className={styles.btnCheckout}>
                        GO con la compra
                    </button>
                </div>
                </>
            )}
        </div>
    );
};

export default Cart;