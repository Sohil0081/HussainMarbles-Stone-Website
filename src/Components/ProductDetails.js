import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [product, setProduct] = useState(null);

    useEffect(() => {

        const fetchProduct = async () => {

            try {

                const response = await fetch("/Products.json");

                const data = await response.json();

                const foundProduct = data.find(
                    item => item.id === Number(id)
                );

                setProduct(foundProduct);

            } catch (error) {

                console.error(
                    "Error fetching product:",
                    error
                );

            }

        };

        fetchProduct();

    }, [id]);


    // Loading
    if (!product) {

        return (
            <div className="product-loading">
                Product not found
            </div>
        );

    }


    return (

        <>

            <div className="product-details">

                {/* Back Button */}

                <button
                    className="back-button"
                    onClick={() => navigate(-1)}
                >
                    ← Back
                </button>


                <div className="product-details-container">


                    {/* Image */}

                    <div className="product-details-image">

                        <img
                            src={product.image}
                            alt={product.name}
                        />

                    </div>


                    {/* Information */}

                    <div className="product-details-content">

                        <span className="product-category">
                            {product.category}
                        </span>


                        <h1>
                            {product.name}
                        </h1>


                        <div className="product-rating">

                            ⭐ {product.rating}

                        </div>


                        <p className="product-description">

                            {product.description}

                        </p>


                        <div className="product-price">

                            ₹{product.price}

                            <span>
                                / {product.unit}
                            </span>

                        </div>


                        <div className="product-info">

                            <div>
                                <strong>Quality</strong>
                                <span>{product.quality}</span>
                            </div>


                            <div>
                                <strong>Design</strong>
                                <span>{product.design}</span>
                            </div>


                            <div>
                                <strong>Color</strong>
                                <span>{product.color}</span>
                            </div>


                            <div>
                                <strong>Finish</strong>
                                <span>{product.finish}</span>
                            </div>


                            <div>
                                <strong>Origin</strong>
                                <span>{product.origin}</span>
                            </div>


                            <div>
                                <strong>Material</strong>
                                <span>{product.material}</span>
                            </div>


                            <div>
                                <strong>Best For</strong>
                                <span>{product.best_for}</span>
                            </div>


                            <div>
                                <strong>Availability</strong>

                                <span>
                                    {product.inStock
                                        ? "In Stock"
                                        : "Out of Stock"}
                                </span>

                            </div>

                        </div>


                        <button className="contact-button">
                            Enquire Now
                        </button>

                    </div>

                </div>

            </div>

        </>

    );

}

export default ProductDetails;