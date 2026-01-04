import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer-columns">
                
                {/* 1. Brand, Description, and Legal Info Column (Larger) */}
                <div className="col-brand">
                    <div className="logo">SoleStyle</div>
                    <p>Your trusted partner for premium footwear that combines style, comfort, and quality craftsmanship.</p>
                    
                    {/* PLACED THE LEGAL/COPYRIGHT INFO HERE as it relates to the brand */}
                    <div className="legal-info">
                        <a href="#">Privacy Policy</a> | &copy;2025 all rights reserved.
                    </div>
                    
                    <div className="social-icons">
                        {/* NOTE: If you are using real images/icons, you would import them here */}
                        <a href="#"></a> <a href="#"></a> <a href="#">  </a>
                    </div>
                </div>

                {/* 2. Contact Us Column (Cleaner) */}
                <div className="col">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>Purok 6, Batong Malake, Los Banos Laguna</li>
                        <li>Email: <a href="mailto:vgil03198@gmail.com">vgil03198@gmail.com</a></li>
                        <li>Phone: (63) 9467018480</li>
                    </ul>
                </div>
                
            </div>
            
            {/* The separate footer-bottom div is removed since its content is now inside .col-brand */}
        </footer>
    );
}

export default Footer;