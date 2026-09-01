import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {

    const form = useRef();

    const [status, setStatus] = useState("");

    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        email: "",
        product: "",
        message: ""
    });


    /* =================================
       VALIDATION
    ================================= */

    const validateForm = (formData) => {

        const newErrors = {
            name: "",
            phone: "",
            email: "",
            product: "",
            message: ""
        };

        let isValid = true;


        /* NAME */

        const name = formData.name.trim();

        if (!name) {

            newErrors.name = "Please enter your name.";
            isValid = false;

        } else if (name.length < 2) {

            newErrors.name = "Name must contain at least 2 characters.";
            isValid = false;

        } else if (!/^[a-zA-Z\s.'-]+$/.test(name)) {

            newErrors.name = "Please enter a valid name.";
            isValid = false;

        }


        /* PHONE */

        const phone = formData.phone.trim();

        // Accepts:
        // 9876543210
        // +919876543210
        // +91 9876543210
        // 09876543210

        const cleanPhone = phone.replace(/[\s-]/g, "");

        if (!phone) {

            newErrors.phone = "Please enter your phone number.";
            isValid = false;

        } else if (!/^(\+91|91|0)?[6-9]\d{9}$/.test(cleanPhone)) {

            newErrors.phone =
                "Please enter a valid 10-digit Indian phone number.";

            isValid = false;

        }


        /* EMAIL */

        const email = formData.email.trim();

        const emailRegex =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email) {

            newErrors.email = "Please enter your email address.";
            isValid = false;

        } else if (!emailRegex.test(email)) {

            newErrors.email =
                "Please enter a valid email address.";

            isValid = false;

        }


        /* PRODUCT */

        if (!formData.product) {

            newErrors.product =
                "Please select a product.";

            isValid = false;

        }


        /* MESSAGE */

        const message = formData.message.trim();

        if (!message) {

            newErrors.message =
                "Please enter your message.";

            isValid = false;

        } else if (message.length < 10) {

            newErrors.message =
                "Message must contain at least 10 characters.";

            isValid = false;

        }


        setErrors(newErrors);

        return isValid;
    };


    /* =================================
       SEND EMAIL
    ================================= */

    const sendEmail = async (e) => {

        e.preventDefault();

        setStatus("");

        const formData = {

            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            product: e.target.product.value,
            message: e.target.message.value

        };


        /* =================================
           VALIDATE BEFORE EMAILJS
        ================================= */

        const isValid = validateForm(formData);

        if (!isValid) {

            setStatus(
                "Please correct the highlighted fields."
            );

            return;
        }


        /* =================================
           SEND EMAIL
        ================================= */

        setStatus("Sending...");


        try {

            await emailjs.sendForm(

                "service_ocbezqc",

                "template_79oee5f",

                form.current,

                {
                    publicKey: "GYFI6FA8XXVb-xNiG"
                }

            );


            /* =================================
               SUCCESS
            ================================= */

            setStatus(
                "✓ Enquiry sent successfully!"
            );


            e.target.reset();


            setErrors({

                name: "",
                phone: "",
                email: "",
                product: "",
                message: ""

            });


        } catch (error) {

            console.error(
                "EmailJS Error:",
                error
            );


            setStatus(
                "Something went wrong. Please try again."
            );

        }

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


                {/* =========================
                    LEFT SIDE
                ========================= */}

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


                    {/* CONTACT DETAILS */}

                    <div className="contact-details">


                        {/* EMAIL */}

                        <div className="contact-item">

                            <div className="contact-icon">
                                ✉
                            </div>

                            <div>

                                <span>
                                    Email
                                </span>

                                <a href="mailto:info@marble.com">
                                    info@marble.com
                                </a>

                            </div>

                        </div>


                        {/* PHONE */}

                        <div className="contact-item">

                            <div className="contact-icon">
                                ☎
                            </div>

                            <div>

                                <span>
                                    Phone
                                </span>

                                <a href="tel:+918368231122">
                                    +91 8368231122
                                </a>

                            </div>

                        </div>


                        {/* ADDRESS */}

                        <div className="contact-item">

                            <div className="contact-icon">
                                📍
                            </div>

                            <div>

                                <span>
                                    Visit Us
                                </span>

                                <p>
                                    NH 148A, Arjan Garh, Aya Nagar,
                                    Delhi 110047
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
                        noValidate
                    >


                        {/* =========================
                            NAME + PHONE
                        ========================= */}

                        <div className="form-row">


                            {/* NAME */}

                            <div className="form-group">

                                <label>
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    autoComplete="name"
                                    required
                                />

                                {errors.name && (

                                    <small className="form-error">
                                        {errors.name}
                                    </small>

                                )}

                            </div>


                            {/* PHONE */}

                            <div className="form-group">

                                <label>
                                    Phone
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone"
                                    autoComplete="tel"
                                    inputMode="numeric"
                                    maxLength="15"
                                    required
                                />

                                {errors.phone && (

                                    <small className="form-error">
                                        {errors.phone}
                                    </small>

                                )}

                            </div>

                        </div>


                        {/* =========================
                            EMAIL
                        ========================= */}

                        <div className="form-group">

                            <label>
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                autoComplete="email"
                                required
                            />

                            {errors.email && (

                                <small className="form-error">
                                    {errors.email}
                                </small>

                            )}

                        </div>


                        {/* =========================
                            PRODUCT
                        ========================= */}

                        <div className="form-group">

                            <label>
                                Interested In
                            </label>

                            <select
                                name="product"
                                defaultValue=""
                                required
                            >

                                <option
                                    value=""
                                    disabled
                                >
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

                            {errors.product && (

                                <small className="form-error">
                                    {errors.product}
                                </small>

                            )}

                        </div>


                        {/* =========================
                            MESSAGE
                        ========================= */}

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

                            {errors.message && (

                                <small className="form-error">
                                    {errors.message}
                                </small>

                            )}

                        </div>


                        {/* =========================
                            SUBMIT
                        ========================= */}

                        <button
                            type="submit"
                            className="contact-button"
                            disabled={status === "Sending..."}
                        >

                            {status === "Sending..."
                                ? "Sending..."
                                : "Send Enquiry"
                            }

                        </button>


                        {/* =========================
                            STATUS
                        ========================= */}

                        {status && (

                            <p
                                className={
                                    status.includes("successfully")
                                        ? "form-status success"
                                        : "form-status"
                                }
                            >
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