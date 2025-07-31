import React from "react";
import "./ProductCard.css";

//recibe  2 props
const ProductCard = ({ product, onAddToCart}) => {
    const {image, title, price, category, rating}=product;//extraer atributos del  producto para usar
    return (
        <div className="product-card">
        <img src={product.image} alt={product.title} className="product-img" />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">Categoría: {category}</p>
        <p className="product-price">Precio: ${price}</p>
        <p className="product-rating">⭐ {rating.rate} ({rating.count} reviews)</p>
        <button onClick={() => onAddToCart(product)} className="add-btn">Añadir al carrito</button>
        </div>
    );
};

export default ProductCard;