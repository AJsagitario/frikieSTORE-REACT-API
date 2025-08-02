import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

export default function Success() {
    return (
        <div className="success-container"> 
            <h1 className="success-title">¡Compra Exitosa! 🎉</h1>
            <p className="success-message">Gracias por tu compra. Te enviaremos una confirmación a tu correo.</p>
            <img src="https://i.ibb.co/zJfCPcB/success.png" alt="success" className="success-image" />
            <br />
            <Link to="/">
                <button className="success-button">Volver al Inicio</button>
            </Link>
        </div>
    );
}