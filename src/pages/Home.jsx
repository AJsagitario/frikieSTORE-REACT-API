import React, {useEffect, useState} from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const Home = ({onAddToCart}) => {
    //crear estado para guardar los productos
    const [products, setProducts] = useState([]);

    //se ejecutar una vez al cargar la pagina
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")//peticion GET a la api
        .then(res => setProducts(res.data))//se guarda el producto en el estado creado
        .catch(err => console.error("Error al cargar productos: ",err));

    }, []);
    return (
        <div style={{padding: "40px",background: "#1e1e1e", minHeight:"100vh"}}>
            <h1 style={{color:"#f5f5f5", textAlign:"center", marginBottom:"30px"}}>
                Tienda Frikie</h1>                                                 
            <div style={{display: "flex", flexWrap: "wrap",justifyContent:"center", gap:"20px"}}>
                {products.map(prod => (
                    <ProductCard key={prod.id} product={prod} onAddToCart={onAddToCart}/>
                ))}
            </div>
        </div>
    );
};
export default Home;