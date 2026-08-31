import React from "react";
import "./CategoryCard.css";

export default function CategoryCard({ name, image, onClick }) {
    return (
        <div className="category-card">

            <div className="category-image-box">
                <img
                    src={image}
                    alt={name}
                    className="category-image"
                    onError={(e) => {
                        e.currentTarget.src =
                            "https://via.placeholder.com/600x400?text=Stone";
                    }}
                />
            </div>

            <div className="category-card-body">

                <h2>{name}</h2>

                <button
                    className="category-btn"
                    onClick={onClick}
                >
                    View Designs
                </button>

            </div>

        </div>
    );
}