import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

export default function Card(props) {

    const navigate = useNavigate();

    const {
        id,
        title,
        image,
        description,
        rating,
        onClick
    } = props;


    const handleView = () => {
        navigate(`/product/${id}`);
    };


    return (
        <div
            className="post-card"
            onClick={onClick}
        >

            {/* =========================
                PRODUCT IMAGE
            ========================= */}

            <img
                src={
                    image
                        ? image
                        : "https://placehold.co/600x400?text=Image+Not+Available"
                }
                className="post-image"
                alt={title}
                onError={(e) => {
                    e.currentTarget.src =
                        "https://placehold.co/600x400?text=Image+Not+Available";
                }}
            />


            {/* =========================
                CARD BODY
            ========================= */}

            <div className="post-body">

                <h2 className="post-title">
                    {title}
                </h2>


                <p className="post-description">
                    {description}
                </p>


                <p className="post-description">
                    ⭐ {rating}
                </p>


                {id && (

                    <button
                        type="button"
                        className="read-more"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleView();
                        }}
                    >
                        View Details
                    </button>

                )}

            </div>

        </div>
    );
}