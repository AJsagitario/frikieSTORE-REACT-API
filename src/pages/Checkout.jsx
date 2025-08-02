import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = ({cartItems}) => {
    const navigate = useNavigate();
    const [deliveryMethod, setDeliveryMethod] = useState("store");
    const [address, setAddress] = useState("");
    const [showPayment, setShowPayment] = useState(false);
    const [paymentTab, setPaymentTab] = useState("tarjeta");

    const total = cartItems.reduce((sum,item) => sum + item.qty * item.price, 0).toFixed(2);

    const handleConfirm = () => {
        if (deliveryMethod === "delivery" && !address.trim()) {
            alert("Por favor ingrese su dirección antes de confirmar la compra.");
            return;
        }
        setShowPayment(true);
    };

    const handlePagoTarjeta =(e) => {
        e.preventDefault();
        alert("Pago procesado con tarjeta. GRACIAS POR SU COMPRA!!!!")
        navigate("/");
    };
    const handleSubmitPayment=(e) => {
        e.preventDefault();
        alert("Pago procesado. GRACIAS XD")
        navigate("/success");
    };
    return (
        <div className="checkout-container">
            <h2>Resumen de tu Pedido</h2>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <div>
                                <p><strong>{item.title}</strong></p>
                                <p>Cantidad: {item.qty} | Subtotal: ${(item.qty * item.price).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}

                    <h3 className="total-amount">Total: ${total}</h3>
                    <div className="delivery-method">
                        <h4>Método de entrega</h4>
                        <label>
                            <input
                                type="radio"
                                name="delivery"
                                value="store"
                                checked={deliveryMethod === "store"}
                                onChange={() => setDeliveryMethod("store")}
                            /> Recojo en tienda
                        </label>
                        <br />
                        <label>
                            <input
                                type="radio" 
                                name="delivery" 
                                value="delivery"
                                checked={deliveryMethod === "delivery"}
                                onChange={() => setDeliveryMethod("delivery")}
                            /> Envío a domicilio
                        </label>
                        {deliveryMethod === "delivery" && (
                            <div className="address-input">
                                <input 
                                    type="text" 
                                    placeholder="Dirección de envío" 
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        )}
                    </div>
                    <button className="confirm-btn" onClick={handleConfirm}>
                        Confirmar Compra
                    </button>

                    {showPayment && (
                        <div className="payment-section">
                            <h2>Método de Pago</h2>
                            <div className="payment-tabs">
                                <button className={paymentTab === "tarjeta" ? "active": ""} onClick={() => setPaymentTab("tarjeta")}>
                                    <span>TARJETA</span>
                                </button>
                                <button className={paymentTab === "yape" ? "active" : ""} onClick={() => setPaymentTab("yape")}>
                                    <span>YAPE</span>
                                </button>
                                <button className={paymentTab === "transferencia" ? "active" : ""} onClick={() => setPaymentTab("transferencia")}>
                                    <span>TRANSFERENCIA</span>
                                </button>
                            </div>
                            {paymentTab === "tarjeta" && (
                                <form onSubmit={handleSubmitPayment} className="payment-form">
                                    <input type="text" placeholder="Número de tarjeta" required />
                                    <input type="text" placeholder="Nombre en la tarjeta" required />
                                    <input type="text" placeholder="MM/AA" required />
                                    <input type="text" placeholder="CVV" required />
                                    <button type="submit" className="confirm-btn">
                                        PAY WITH CARD
                                    </button>
                                </form>
                            )}
                            {paymentTab === "yape" && (
                                <div className="qr-payment">
                                    <p>Escanea este código QR con Yape o Plin:</p>
                                    <img src="/img/qr-yape.png" alt="QR Yape" width="200" />
                                    <button onClick={handleSubmitPayment} className="confirm-btn">PAGAR</button>
                                </div>    
                            )}
                            {paymentTab === "transferencia" && (
                                <div className="bank-transfer">
                                    <p><strong>Realiza una transferencia bancaria a:</strong></p>
                                    <p><strong>CCI:</strong> 002-123456789012345678</p>
                                    <p><strong>Banco:</strong> BCP</p>
                                    <p><strong>Nombre:</strong> Tienda BabyBliss SAC</p>
                                    <br />
                                    <button onClick={handleSubmitPayment} className="confirm-btn">PAGAR</button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Checkout;