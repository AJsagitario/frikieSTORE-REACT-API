import React from "react";


const Cart = ({cartItems, onRemove, onClose, onCheckout}) => {
    return (
        <div style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            width: "320px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            padding: "16px",
            zIndex: 1000,
            maxHeight: "80vh",
            overflow: "auto"
        }}>
            <h2 style={{textAlign: "center", marginBottom:"12px"}}>🛒 Carrito</h2>
            {cartItems.length === 0 ? (
                <p style={{textAlign: "center"}}>El coche esta vacio XD</p>       
            ) : (
                <>
                {cartItems.map((item) => (
                    <div key={item.id} style={{
                        borderBottom: "1px solid #ccc",
                        paddingBottom: "8px",
                        marginBottom: "8px",
                        color: "#333"
                        }}>
                            <img 
                            src={item.image} 
                            alt={item.title} 
                            style={{
                                width: "60px",
                                height: "60px",
                                objectFit: "contain",
                                marginBottom: "8px"
                            }}
                            />
                        <p style={{color: "#333"}}><strong>{item.title}</strong></p>
                        <p style={{color: "#333"}}>Cantidad: {item.qty}</p>
                        <p style={{color: "#333"}}>Precio: ${item.price}</p>
                        <button onClick={() => onRemove(item.id)}
                            style={{
                                backgroundColor: "#e74c3c",
                                color: "#fff",
                                border: "none",
                                padding: "6px 10px",
                                borderRadius: "4px",
                                cursor: "pointer"
                            }}
                            >
                                Eliminar
                        </button>
                    </div>
                ))}
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "12px", gap: "10px"}}>
                    <button onClick={onClose} style={{
                        backgroundColor: "#3498db",
                        color: "#fff",
                        border: "none",
                        padding: "8px 10px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        flex: 1
                    }}>
                        Seguir comprando
                    </button>
                    <button onClick={onCheckout} style={{
                        backgroundColor: "#27ae60",
                        color: "#fff",
                        border: "none",
                        padding: "8px 10px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        flex: 1
                    }}>
                        GO con la compra
                    </button>
                </div>
                </>
            )}
        </div>
    );
};

export default Cart;