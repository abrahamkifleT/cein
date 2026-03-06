import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-main'>
                <div className='footer-col'>
                    <h2>Account</h2>
                    <p>Log in</p>
                    <p>Sign up</p>
                    <p>Redeem a Gift Card</p>
                </div>

                <div className='footer-col'>
                    <h2>Company</h2>
                    <p>About</p>
                    <p>Environmental initiatives</p>
                    <p>Factories</p>
                    <p>DEI</p>
                    <p>Careers</p>
                    <p>International</p>
                    <p>Accessibility</p>
                </div>

                <div className='footer-col'>
                    <h2>Get Help</h2>
                    <p>Help Center</p>
                    <p>Return Policy</p>
                    <p>Shipping Info</p>
                    <p>Bulk Orders</p>
                </div>

                <div className='footer-col'>
                    <h2>Connect</h2>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Affiliates</p>
                    <p>Out Stores</p>
                </div>

                <div className='footer-newsletter'>
                    <input type="text" placeholder="Updates in your inbox..." />
                    <button className='newsletter-btn'>
                        <span>→</span>
                    </button>
                </div>
            </div>

            <div className='footer-bottom-section'>
                <div className='footer-links'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Do Not Sell or Share My Personal Information</p>
                    <p>Cs Supply Chain Transparency</p>
                    <p>Vendor Code of Conduct</p>
                    <p>Sitemap Pages</p>
                    <p>Sitemap Products</p>
                </div>

                <p className='copyright'>Copyright © 2025</p>
            </div>

        </footer>
    )
}

export default Footer