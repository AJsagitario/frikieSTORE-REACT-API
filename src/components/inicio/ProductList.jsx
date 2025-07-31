import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";

function ProductList() {
    const [products, setProducts]=useState([]);

    useEffect(() => { //petecion HTTP
        axios.get("https://fakestoreapi.com/products")
        .then(response => setProducts(response.data))
        .catch(error => console.error("Error al obtener el producto: ",error));
    },[]);
    return ( //html de la lista
        <div>
            <h2>LISTA DE PRODUCTOS</h2>
            <div className="product-container">
                {products.map(product => (//recorre cada product y lo muestra en una tarjeta  div
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>Precio: ${product.price}</p>
                        <p>{product.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ProductList;