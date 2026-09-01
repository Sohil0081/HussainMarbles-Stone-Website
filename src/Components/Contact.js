import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {

    const form = useRef();

    const [status, setStatus] = useState("");

    const sendEmail = (e) => {

        e.preventDefault();

        setStatus("Sending...");

        emailjs
            .sendForm(
                "service_ocbezqc",
                "template_79oee5f",
                form.current,
                {
                    publicKey: "GYFI6FA8XXVb-xNiG"
                }
            )
            .then(
                () => {

                    setStatus("Enquiry sent successfully!");

                    e.target.reset();

                },
                (error) => {

                    console.error("EmailJS Error:", error);

                    setStatus(
                        "Something went wrong. Please try again."
                    );

                }
            );
    };


    return (

        <div className="contact-page">

            {/* =========================
                CONTACT HERO
            ========================= */}

            <section className="contact-hero">

                <div className="contact-hero-content">

                    <span className="contact-label">
                        CONTACT US
                    </span>

                    <h1>
                        Let's create
                        <br />
                        something timeless.
                    </h1>

                    <p>
                        Have a project in mind? Talk to us about marble,
                        natural stone and the perfect material for your space.
                    </p>

                </div>

            </section>


            {/* =========================
                CONTACT SECTION
            ========================= */}

            <section className="contact-section">

                {/* Left Side */}

                <div className="contact-info">

                    <span className="contact-label">
                        GET IN TOUCH
                    </span>

                    <h2>
                        We'd love to
                        <br />
                        hear from you.
                    </h2>

                    <p>
                        Whether you are designing a home, office, hotel or
                        commercial space, our team can help you find the
                        right marble and natural stone.
                    </p>


                    {/* Contact Details */}

                    <div className="contact-details">

                        <div className="contact-item">

                            <div className="contact-icon">
                                ✉
                            </div>

                            <div>
                                <span>Email</span>

                                <a href="mailto:info@marble.com">
                                    info@marble.com
                                </a>
                            </div>

                        </div>


                        <div className="contact-item">

                            <div className="contact-icon">
                                ☎
                            </div>

                            <div>
                                <span>Phone</span>

                                <a href="tel:+919876543210">
                                    +91 98765 43210
                                </a>
                            </div>

                        </div>


                        <div className="contact-item">

                            <div className="contact-icon">
                                📍
                            </div>

                            <div>

                                <span>
                                    Visit Us
                                </span>

                                <p>
                                    Marble Market, Kishangarh,
                                    Rajasthan, India
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =========================
                    RIGHT SIDE - FORM
                ========================= */}

                <div className="contact-form-container">

                    <form
                        ref={form}
                        className="contact-form"
                        onSubmit={sendEmail}
                    >

                        {/* Name + Phone */}

                        <div className="form-row">

                            <div className="form-group">

                                <label>
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Phone
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone"
                                    required
                                />

                            </div>

                        </div>


                        {/* Email */}

                        <div className="form-group">

                            <label>
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />

                        </div>


                        {/* Product */}

                        <div className="form-group">

                            <label>
                                Interested In
                            </label>

                            <select
                                name="product"
                                required
                            >

                                <option value="">
                                    Select a product
                                </option>
                                <option value="Sandstone & Texture Stone">
                                    Sandstone & Texture Stone
                                </option>

                                <option value="Natural Stone Cladding">
                                    Natural Stone Cladding
                                </option>

                                <option value="Marble & Stone Inlay">
                                    Marble & Stone Inlay
                                </option>

                                <option value="Stone Paving & Cobblestone">
                                    Stone Paving & Cobblestone
                                </option>

                                <option value="3D / Decorative Stone Panels">
                                    3D / Decorative Stone Panels
                                </option>

                                <option value="Rocks & Mineral">
                                    Rocks & Mineral
                                </option>

                            </select>

                        </div>


                        {/* Message */}

                        <div className="form-group">

                            <label>
                                Message
                            </label>

                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Tell us about your project..."
                                required
                            ></textarea>

                        </div>


                        {/* Submit */}

                        <button
                            type="submit"
                            className="contact-button"
                        >
                            Send Enquiry
                        </button>


                        {/* Status */}

                        {status && (

                            <p className="form-status">
                                {status}
                            </p>

                        )}

                    </form>

                </div>

            </section>


            {/* =========================
                MAP / VISIT SECTION
            ========================= */}

            <section className="visit-section">

                <div className="visit-content">

                    <span className="contact-label">
                        VISIT OUR SHOWROOM
                    </span>

                    <h2>
                        See the stone
                        <br />
                        in person.
                    </h2>

                    <p>
                        Visit our showroom to explore marble slabs,
                        natural stones and finishes up close.
                    </p>

                    <a
                        href="https://maps.app.goo.gl/ZeQd7iyRR9UQSFZm6?g_st=aw"
                        target="_blank"
                        rel="noreferrer"
                        className="map-button"
                    >
                        Get Directions
                    </a>

                </div>

            </section>


            {/* =========================
                BOTTOM CTA
            ========================= */}

            <section className="contact-cta">

                <span className="contact-label">
                    HAVE A PROJECT?
                </span>

                <h2>
                    Let's build something
                    <br />
                    beautiful together.
                </h2>

                <a
                    href="mailto:info@marble.com"
                    className="cta-button"
                >
                    Contact Us
                </a>

            </section>

        </div>
    );
}

export default Contact;