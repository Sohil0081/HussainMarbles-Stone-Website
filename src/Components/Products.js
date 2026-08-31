import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import "./Products.css";

function Products({ type = "All" }) {

    const { type: urlType } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const response = await fetch("public/Products.json");
                const data = await response.json();

                setProducts(data);

            } catch (error) {

                console.error("Error fetching products:", error);

            }

        };

        fetchProducts();

    }, []);


    // =========================
    // SELECTED TYPE
    // =========================

    const selectedType = urlType || type;


    // =========================
    // COLLECTION NAMES
    // =========================

    const collectionNames = {

        "Texture-Stone": "Texture Stone",

        "Stone-Cladding": "Stone Cladding",

        "Sone-Cladding": "Stone Cladding",

        "Stone-Inlay": "Stone Inlay",

        "Stone-Paving": "Stone Paving",

        "Rock-Mineral": "Rock & Mineral"

    };


    // =========================
    // HEADING
    // =========================

    const heading =
        selectedType === "All"
            ? "Our Designs"
            : `${collectionNames[selectedType] || selectedType} Collection`;


    // =========================
    // FILTER
    // =========================

    const filteredProducts = products
        .filter(product => {

            if (selectedType === "All") {
                return true;
            }

            return product.category === selectedType;

        })
        .sort((a, b) => b.rating - a.rating);


    return (

        <div className="products-page">

            {/* =========================
                HEADER
            ========================= */}

            <div className="products-header">

                <span className="products-label">
                    OUR COLLECTION
                </span>

                <h1>
                    {heading}
                </h1>

                <p>
                    Discover our carefully selected collection of
                    premium natural stone and marble designs.
                </p>

            </div>


            {/* =========================
                PRODUCTS
            ========================= */}

            <div className="products-section">

                <div className="products-grid">

                    {filteredProducts.map(product => (

                        <div
                            className="product-area"
                            key={product.id}
                        >

                            <Card
                                id={product.id}
                                name={product.name}
                                origin={product.origin}
                                image={product.image}
                                rating={product.rating}
                                price={product.price}
                                description={product.description}
                            />

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default Products;