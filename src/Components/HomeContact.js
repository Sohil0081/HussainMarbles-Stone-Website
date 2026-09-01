import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";
import "./HomeContact.css";



const categoryMap = {

    "Sandstone":
        "Sandstone & Texture Stone",

    "Stone-Cladding":
        "Natural Stone Cladding",

    "Stone-Inlay":
        "Marble & Stone Inlay",

    "Stone-Paving":
        "Stone Paving & Cobblestone",

    "Stone-Panel":
        "3D / Decorative Stone Panels",

    "Rocks-Mineral":
        "Rocks & Mineral"

};

function HomeContact() {

    const form = useRef();

    const location = useLocation();

    const [status, setStatus] = useState("");

    const [selectedProduct, setSelectedProduct] = useState("");

    const [errors, setErrors] = useState({
        email: "",
        phone: ""
    });

    const [sending, setSending] = useState(false);


    /* =================================
       CATEGORY MAPPING
    ================================= */



    /* =================================
       HANDLE PRODUCT ENQUIRY
    ================================= */

    useEffect(() => {

        const category =
            location.state?.productCategory;

        if (category) {

            const mappedCategory =
                categoryMap[category];

            if (mappedCategory) {

                setSelectedProduct(mappedCategory);

            }

        }


        /* =================================
           SCROLL TO CONTACT
        ================================= */

        if (location.state?.scrollToContact) {

            setTimeout(() => {

                const contactSection =
                    document.querySelector(".home-contact");

                if (contactSection) {

                    contactSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }, 200);

        }

    }, [location]);


    /* =================================
       VALIDATE FORM
    ================================= */

    const validateForm = () => {

        const formData =
            new FormData(form.current);

        const email =
            formData.get("email").trim();

        const phone =
            formData.get("phone").trim();


        /* =================================
           VALIDATION REGEX
        ================================= */

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        const phoneRegex =
            /^[6-9]\d{9}$/;


        const newErrors = {
            email: "",
            phone: ""
        };


        /* =================================
           EMAIL VALIDATION
        ================================= */

        if (!email) {

            newErrors.email =
                "Email address is required.";

        }
        else if (!emailRegex.test(email)) {

            newErrors.email =
                "Please enter a valid email address.";

        }


        /* =================================
           PHONE VALIDATION
        ================================= */

        if (!phone) {

            newErrors.phone =
                "Phone number is required.";

        }
        else if (!phoneRegex.test(phone)) {

            newErrors.phone =
                "Please enter a valid 10-digit mobile number.";

        }


        setErrors(newErrors);


        return (
            !newErrors.email &&
            !newErrors.phone
        );

    };


    /* =================================
       SEND EMAIL
    ================================= */

    const sendEmail = (e) => {

        e.preventDefault();


        /* =================================
           STOP IF ALREADY SENDING
        ================================= */

        if (sending) {
            return;
        }


        /* =================================
           VALIDATE
        ================================= */

        const isValid =
            validateForm();

        if (!isValid) {

            setStatus("");

            return;

        }


        /* =================================
           START SENDING
        ================================= */

        setSending(true);

        setStatus("Sending...");


        /* =================================
           SEND THROUGH EMAILJS
        ================================= */

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

                    setStatus(
                        "✓ Enquiry sent successfully!"
                    );

                    e.target.reset();

                    setSelectedProduct("");

                    setErrors({
                        email: "",
                        phone: ""
                    });

                    setSending(false);

                },

                (error) => {

                    console.error(
                        "EmailJS Error:",
                        error
                    );

                    setStatus(
                        "Something went wrong. Please try again."
                    );

                    setSending(false);

                }

            );

    };


    return (

        <section className="home-contact">

            <div className="home-contact-inner">


                {/* =================================
                    LEFT CONTENT
                ================================= */}

                <div className="home-contact-content">

                    <span className="home-contact-label">
                        GET IN TOUCH
                    </span>


                    <h2>
                        Find the perfect
                        <br />
                        stone for your space.
                    </h2>


                    <p>
                        Looking for the right marble or natural stone?
                        Tell us what you need and our team will help you
                        find the perfect material for your project.
                    </p>


                    {/* =================================
                        CONTACT DETAILS
                    ================================= */}

                    <div className="home-contact-details">

                        <a
                            href="tel:+918368231122"
                            className="home-contact-detail"
                        >

                            <span className="detail-icon">
                                ☎
                            </span>

                            <span>
                                +91 8368231122
                            </span>

                        </a>


                        <a
                            href="mailto:info@marble.com"
                            className="home-contact-detail"
                        >

                            <span className="detail-icon">
                                ✉
                            </span>

                            <span>
                                info@marble.com
                            </span>

                        </a>

                    </div>


                    {/* =================================
                        GOOGLE MAPS
                    ================================= */}

                    <a
                        href="https://maps.app.goo.gl/ZeQd7iyRR9UQSFZm6?g_st=aw"
                        target="_blank"
                        rel="noreferrer"
                        className="home-direction-button"
                    >

                        <span className="direction-text">
                            Visit Our Showroom
                        </span>


                        <span className="direction-icon">

                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg"
                                alt="Google Maps"
                                onError={(e) => {

                                    e.currentTarget.style.display =
                                        "none";

                                    const fallback =
                                        e.currentTarget
                                            .nextElementSibling;

                                    if (fallback) {

                                        fallback.style.display =
                                            "flex";

                                    }

                                }}
                            />


                            <span className="direction-arrow-fallback">
                                ↗
                            </span>

                        </span>

                    </a>

                </div>


                {/* =================================
                    FORM
                ================================= */}

                <div className="home-contact-form-wrapper">


                    <div className="home-form-heading">

                        <span>
                            SEND AN ENQUIRY
                        </span>

                        <h3>
                            Let's discuss your project.
                        </h3>

                    </div>


                    <form
                        ref={form}
                        className="home-contact-form"
                        onSubmit={sendEmail}
                    >


                        {/* =================================
                            NAME + PHONE
                        ================================= */}

                        <div className="home-form-row">

                            <div className="form-field">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                />

                            </div>


                            <div className="form-field">

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    maxLength="10"
                                    inputMode="numeric"
                                    required
                                />

                                {errors.phone && (

                                    <span className="form-error">
                                        {errors.phone}
                                    </span>

                                )}

                            </div>

                        </div>


                        {/* =================================
                            EMAIL
                        ================================= */}

                        <div className="form-field">

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                            />

                            {errors.email && (

                                <span className="form-error">
                                    {errors.email}
                                </span>

                            )}

                        </div>


                        {/* =================================
                            PRODUCT CATEGORY
                        ================================= */}

                        <select
                            name="product"
                            value={selectedProduct}
                            onChange={(e) =>
                                setSelectedProduct(
                                    e.target.value
                                )
                            }
                            required
                        >

                            <option
                                value=""
                                disabled
                            >
                                Interested In
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


                        {/* =================================
                            MESSAGE
                        ================================= */}

                        <textarea
                            name="message"
                            placeholder="Tell us about your project..."
                            rows="4"
                            required
                        ></textarea>


                        {/* =================================
                            SUBMIT
                        ================================= */}

                        <button
                            type="submit"
                            className="home-contact-submit"
                            disabled={sending}
                        >

                            <span>
                                {sending
                                    ? "Sending..."
                                    : "Send Enquiry"
                                }
                            </span>

                        </button>


                        {/* =================================
                            STATUS
                        ================================= */}

                        {status && (

                            <p className="home-form-status">
                                {status}
                            </p>

                        )}

                    </form>

                </div>

            </div>

        </section>

    );

}

export default HomeContact;