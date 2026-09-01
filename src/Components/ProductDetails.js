
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchProduct = async () => {

            try {

                const response = await fetch("/Products.json");

                if (!response.ok) {
                    throw new Error("Failed to load Products.json");
                }

                const data = await response.json();

                const foundProduct = data.find(
                    item => item.id === Number(id)
                );

                setProduct(foundProduct || null);

            } catch (error) {

                console.error("Error fetching product:", error);
                setProduct(null);

            } finally {

                setLoading(false);

            }

        };

        fetchProduct();

    }, [id]);


    /* =========================
       LOADING
    ========================= */

    if (loading) {

        return (
            <div className="product-loading">
                Loading product...
            </div>
        );

    }


    /* =========================
       PRODUCT NOT FOUND
    ========================= */

    if (!product) {

        return (
            <div className="product-loading">
                <h2>Product Not Found</h2>
            </div>
        );

    }


    return (

        <div className="product-details">

            <div className="product-details-container">


                {/* =========================
                    PRODUCT IMAGE
                ========================= */}

                <div className="product-details-image">

                    <img
                        src={product.image}
                        alt={product.title}
                    />

                </div>


                {/* =========================
                    PRODUCT INFORMATION
                ========================= */}

                <div className="product-details-content">

                    <span className="product-category">
                        {product.category}
                    </span>


                    <h1>
                        {product.title}
                    </h1>


                    {/* Rating */}

                    <div className="product-rating">
                        ⭐ {product.rating}
                    </div>


                    {/* Description */}

                    <p className="product-description">
                        {product.description}
                    </p>


                    {/* Price */}

                    <div className="product-price">

                        {product.price}

                        {product.unit && (
                            <span>
                                / {product.unit}
                            </span>
                        )}

                    </div>


                    {/* =========================
                        PRODUCT DETAILS
                    ========================= */}

                    <div className="product-info">

                        <div>
                            <strong>Quality</strong>
                            <span>{product.Quality}</span>
                        </div>

                        <div>
                            <strong>Design</strong>
                            <span>{product.Design}</span>
                        </div>

                        <div>
                            <strong>Color</strong>
                            <span>{product.Color}</span>
                        </div>

                        <div>
                            <strong>Finish</strong>
                            <span>{product.Finish}</span>
                        </div>

                        <div>
                            <strong>Origin</strong>
                            <span>{product.Origin}</span>
                        </div>

                        <div>
                            <strong>Material</strong>
                            <span>{product.Material}</span>
                        </div>

                        <div>
                            <strong>Best For</strong>
                            <span>{product["Best For"]}</span>
                        </div>

                        <div>
                            <strong>Availability</strong>
                            <span className="availability">
                                {product.Availability}
                            </span>
                        </div>

                    </div>


                    {/* =========================
                        ENQUIRE BUTTON
                    ========================= */}

                    <button
                        className="contact-button"
                        onClick={() =>
                            navigate("/", {
                                state: {
                                    scrollToContact: true,
                                    productCategory: product.category,
                                    productName: product.title
                                }
                            })
                        }
                    >
                        Enquire Now
                    </button>

                </div>

            </div>

        </div>

    );
}

export default ProductDetails;