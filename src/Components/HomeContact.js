import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./HomeContact.css";

function HomeContact() {

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

                    setStatus("✓ Enquiry sent successfully!");

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
                            href="tel:+919876543210"
                            className="home-contact-detail"
                        >

                            <span className="detail-icon">
                                ☎
                            </span>

                            <span>
                                +91 98765 43210
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
                        GOOGLE MAPS BUTTON
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

                                    e.currentTarget.style.display = "none";

                                    const fallback =
                                        e.currentTarget.nextElementSibling;

                                    if (fallback) {
                                        fallback.style.display = "flex";
                                    }

                                }}
                            />

                            {/* FALLBACK ARROW */}
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
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                required
                            />
                        </div>


                        {/* =================================
                            EMAIL
                        ================================= */}

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                        />


                        {/* =================================
                            PRODUCT
                        ================================= */}

                        <select
                            name="product"
                            defaultValue=""
                            required
                        >

                            <option value="" disabled>
                                Interested In
                            </option>

                            <option value="White Marble">
                                White Marble
                            </option>

                            <option value="Brown Marble">
                                Brown Marble
                            </option>

                            <option value="Pink Marble">
                                Pink Marble
                            </option>

                            <option value="Black Marble">
                                Black Marble
                            </option>

                            <option value="Green Marble">
                                Green Marble
                            </option>

                            <option value="Golden Marble">
                                Golden Marble
                            </option>

                            <option value="Natural Stone">
                                Natural Stone
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
                        >

                            <span>
                                Send Enquiry
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