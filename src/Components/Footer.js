import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="site-footer">

            {/* Main Footer */}
            <div className="footer-main">

                <div className="footer-container">

                    {/* Brand */}
                    <div className="footer-brand">

                        <Link to="/" className="footer-logo">
                            Hussain<span>Marble & Stones</span>
                        </Link>

                        <p>
                            Premium marble, stone and elegant surfaces crafted
                            to bring timeless beauty to your spaces.
                        </p>

                        <div className="footer-socials">

                            <a href="/" aria-label="Facebook">
                                f
                            </a>

                            <a href="/" aria-label="Instagram">
                                ◎
                            </a>

                            <a href="/" aria-label="WhatsApp">
                                ☎
                            </a>

                            <a href="/" aria-label="LinkedIn">
                                in
                            </a>

                        </div>

                    </div>


                    {/* Quick Links */}
                    <div className="footer-column">

                        <h4>QUICK LINKS</h4>

                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/products">Collections</Link>
                        <Link to="/contact">Contact</Link>

                    </div>


                    {/* Collections */}
                    <div className="footer-column">

                        <h4>COLLECTIONS</h4>

                        <Link to="/products">White Marble</Link>
                        <Link to="/products">Italian Marble</Link>
                        <Link to="/products">Granite</Link>
                        <Link to="/products">Stone Inlay</Link>

                    </div>


                    {/* Contact */}
                    <div className="footer-column footer-contact">

                        <h4>GET IN TOUCH</h4>

                        <p>
                            <span>📍</span>
                            New Delhi, India
                        </p>

                        <p>
                            <span>✉</span>
                            info@marblecraft.com
                        </p>

                        <p>
                            <span>☎</span>
                            +91 98765 43210
                        </p>

                    </div>

                </div>

            </div>


            {/* Bottom Bar */}
            <div className="footer-bottom">

                <div className="footer-bottom-inner">

                    <p>
                        © {new Date().getFullYear()} MarbleCraft.
                        All Rights Reserved.
                    </p>

                    <div className="footer-bottom-links">
                        <a href="/">Privacy Policy</a>
                        <span>|</span>
                        <a href="/">Terms & Conditions</a>
                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;