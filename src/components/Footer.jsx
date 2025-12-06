import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer-columns">
                <div className="col-brand">
                    <div className="logo">SoleStyle</div>
                    <p>Your trusted partner for premium footwear that combines style, comfort, and quality craftsmanship.</p>
                    <div className="social-icons">
                        {/* NOTE: If you are using real images/icons, you would import them here */}
                        <a href="#"></a> <a href="#"></a> <a href="#">  </a>
                    </div>
                </div>
                <div className="col">
                    <h4>Shop</h4>
                    <ul>
                        <li><a href="/shop">Men's Shoes</a></li>
                        <li><a href="/shop">Women's Shoes</a></li>
                        <li><a href="/shop">Sale</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">Shipping Info</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
         
            </div>
        </footer>
    );
}

export default Footer;