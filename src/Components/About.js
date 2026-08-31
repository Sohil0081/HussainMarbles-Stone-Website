import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-page">

            {/* =========================
                About Hero
            ========================= */}

            <section className="about-hero">

                <div className="about-hero-content">

                    <span className="about-label">
                        ABOUT US
                    </span>

                    <h1>
                        Timeless Stone.
                        <br />
                        Exceptional Spaces.
                    </h1>

                    <p>
                        We bring the natural beauty of marble and stone
                        into your spaces with carefully selected materials,
                        elegant finishes and timeless designs.
                    </p>

                </div>

            </section>


            {/* =========================
                Our Story
            ========================= */}

            <section className="about-story">

                <div className="story-image">
                    <img
                        src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
                        alt="Luxury marble interior"
                    />
                </div>


                <div className="story-content">

                    <span className="about-label">
                        OUR STORY
                    </span>

                    <h2>
                        Natural beauty,
                        <br />
                        crafted for life.
                    </h2>

                    <p>
                        Marble is more than a building material.
                        It is a natural expression of character,
                        elegance and craftsmanship.
                    </p>

                    <p>
                        We offer a carefully selected collection of
                        natural marble, sandstone, decorative stone and
                        architectural surfaces for residential and
                        commercial spaces.
                    </p>

                    <p>
                        From classic flooring to statement walls and
                        intricate inlay work, our collection is designed
                        to help transform ordinary spaces into something
                        truly remarkable.
                    </p>

                </div>

            </section>


            {/* =========================
                Why Choose Us
            ========================= */}

            <section className="why-us">

                <div className="section-heading">

                    <span className="about-label">
                        WHY CHOOSE US
                    </span>

                    <h2>
                        Quality you can see.
                    </h2>

                    <p>
                        Every stone has its own character. We help you
                        find the right one for your space.
                    </p>

                </div>


                <div className="features">

                    <div className="feature">
                        <div className="feature-number">
                            01
                        </div>

                        <h3>
                            Premium Quality
                        </h3>

                        <p>
                            Carefully selected marble and natural stone
                            with excellent finish and durability.
                        </p>
                    </div>


                    <div className="feature">
                        <div className="feature-number">
                            02
                        </div>

                        <h3>
                            Natural Beauty
                        </h3>

                        <p>
                            Unique colors, textures and patterns created
                            naturally over thousands of years.
                        </p>
                    </div>


                    <div className="feature">
                        <div className="feature-number">
                            03
                        </div>

                        <h3>
                            Wide Collection
                        </h3>

                        <p>
                            From classic white marble to dramatic stones
                            and decorative surfaces.
                        </p>
                    </div>


                    <div className="feature">
                        <div className="feature-number">
                            04
                        </div>

                        <h3>
                            Expert Selection
                        </h3>

                        <p>
                            We help you choose the right stone according
                            to your design and requirements.
                        </p>
                    </div>

                </div>

            </section>


            {/* =========================
                Our Collection
            ========================= */}

            {/* =========================
    Explore Our Stone Range
========================= */}



            {/* =========================
                Bottom CTA
            ========================= */}

            <section className="about-cta">

                <div>

                    <span className="about-label">
                        LET'S CREATE
                    </span>

                    <h2>
                        Bring your vision
                        <br />
                        to life with stone.
                    </h2>

                    <p>
                        Explore our collection and discover the perfect
                        marble for your next project.
                    </p>

                    <a href="/products" className="cta-button">
                        Explore Collection
                    </a>

                </div>

            </section>

        </div>
    );
}

export default About;