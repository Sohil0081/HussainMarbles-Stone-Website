import React from "react";
import "./WhatsAppButton.css";

function WhatsAppButton() {

    const phoneNumber = "919876543210";

    const message =
        "Hello, I am interested in your marble and natural stone products. Please share more details.";

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Contact us on WhatsApp"
        >

            {/* Online indicator */}
            <span className="whatsapp-status"></span>

            {/* Icon */}
            <span className="whatsapp-icon">

                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0
                        C5.5 0 .18 5.32.18 11.87
                        c0 2.09.55 4.13 1.59 5.93L.08 24
                        l6.34-1.66a11.86 11.86 0 0 0 5.63 1.43h.01
                        c6.55 0 11.87-5.32 11.87-11.87
                        0-3.17-1.24-6.15-3.41-8.42z
                        M12.06 21.76h-.01
                        a9.84 9.84 0 0 1-5.02-1.37l-.36-.21
                        -3.76.98 1-3.67-.23-.38
                        a9.86 9.86 0 1 1 8.38 4.65z"
                    />

                    <path
                        d="M17.57 14.26c-.3-.15-1.77-.87-2.04-.97
                        -.27-.1-.47-.15-.67.15
                        -.2.3-.77.97-.94 1.17
                        -.17.2-.35.22-.65.07
                        -.3-.15-1.26-.46-2.4-1.48
                        -.89-.79-1.49-1.77-1.66-2.07
                        -.17-.3-.02-.46.13-.61
                        .13-.13.3-.35.45-.52
                        .15-.17.2-.3.3-.5
                        .1-.2.05-.37-.02-.52
                        -.07-.15-.67-1.62-.92-2.22
                        -.24-.58-.49-.5-.67-.51
                        h-.57c-.2 0-.52.07-.79.37
                        -.27.3-1.04 1.02-1.04 2.49
                        s1.07 2.89 1.22 3.09
                        c.15.2 2.1 3.21 5.09 4.5
                        .71.31 1.26.49 1.69.63
                        .71.23 1.35.2 1.86.12
                        .57-.08 1.77-.72 2.02-1.42
                        .25-.7.25-1.3.17-1.42
                        -.07-.12-.27-.2-.57-.35z"
                    />
                </svg>

            </span>


            {/* Text */}
            <span className="whatsapp-content">

                <span className="whatsapp-small">
                    QUICK ENQUIRY
                </span>

                <span className="whatsapp-main">
                    Chat with us
                </span>

            </span>


            {/* Arrow */}
            <span className="whatsapp-arrow">
                →
            </span>

        </a>
    );
}

export default WhatsAppButton;