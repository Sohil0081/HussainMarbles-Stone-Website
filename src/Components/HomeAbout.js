import React from "react";
import { Link } from "react-router-dom";
import "./HomeAbout.css";

function HomeAbout() {
    return (
        <section className="home-about">

            <div className="home-about-inner">

                {/* =========================
                    IMAGE SIDE
                ========================= */}

                <div className="home-about-image">

                    <img
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                        alt="Premium marble interior"
                    />

                    <div className="home-about-image-label">
                        <span>EST.</span>
                        <strong>2010</strong>
                    </div>

                </div>


                {/* =========================
                    CONTENT SIDE
                ========================= */}

                <div className="home-about-content">

                    <span className="home-about-label">
                        ABOUT OUR COMPANY
                    </span>

                    <h2>
                        Crafted by nature.
                        <br />
                        <em>Chosen by you.</em>
                    </h2>

                    <p className="home-about-intro">
                        We bring together the finest marble and natural
                        stones to create spaces that feel timeless,
                        elegant and truly yours.
                    </p>

                    <p className="home-about-description">
                        From carefully selected stone to beautifully
                        finished surfaces, we focus on quality, detail
                        and craftsmanship at every step. Whether you are
                        designing a modern home, luxury hotel or
                        sophisticated commercial space, our collection
                        is made to inspire.
                    </p>


                    {/* =========================
                        STATS
                    ========================= */}

                    <div className="home-about-stats">

                        <div className="home-about-stat">
                            <strong>15+</strong>
                            <span>Years Experience</span>
                        </div>

                        <div className="home-about-stat">
                            <strong>200+</strong>
                            <span>Stone Varieties</span>
                        </div>

                        <div className="home-about-stat">
                            <strong>500+</strong>
                            <span>Projects Delivered</span>
                        </div>

                    </div>


                    {/* =========================
                        BUTTON
                    ========================= */}

                    <Link
                        to="/about"
                        className="home-about-button"
                    >
                        <span>Discover Our Story</span>

                        <span className="home-about-arrow">
                            →
                        </span>
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default HomeAbout;