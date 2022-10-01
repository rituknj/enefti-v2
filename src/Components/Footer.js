import React from "react";
import "./Footer.css";
import {BsDiscord, BsTwitter} from 'react-icons/bs';
import {FaFacebookF, FaLinkedinIn, FaInstagramSquare} from 'react-icons/fa';

export default function Footer() {
  return (
    <section style={{background:'#000000', color:'#fff'}} className="footer-section">
      <div className="container footer-bot">
        <div className="row footer">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <h4>Our Address</h4>
            <p>
              4 Grand Central Terminal New York, NY 10 City name, CA 90896 USA.
              contact@example.com
            </p>
            <div className="footer-social-media">
                <ul className="ul-footer-icons">
                    <li className="footer-icons"><BsDiscord/></li>
                    <li className="footer-icons"><FaFacebookF/></li>
                    <li className="footer-icons"><BsTwitter/></li>
                    <li className="footer-icons"><FaLinkedinIn/></li>
                    <li className="footer-icons"><FaInstagramSquare/></li>
                </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <h5>Useful Links</h5>
            <div>
            <ul id="menu-marketplace" class="menu"><li id="menu-item-6029" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6029"><a href="https://enefti.modeltheme.com/product-category/avid-lines/">Collectibles</a></li>
<li id="menu-item-6030" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6030"><a href="https://enefti.modeltheme.com/product-category/azuki/">Photography</a></li>
<li id="menu-item-6031" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6031"><a href="https://enefti.modeltheme.com/product-category/chimera-by-mpkoz/">Trading Cards</a></li>
<li id="menu-item-6547" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6547"><a href="https://enefti.modeltheme.com/product-category/coolmans-universe/">Virtual Worlds</a></li>
</ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <h5>Our Policy</h5>
            <div>
                <ul>
                    <li>Help Center</li>
                    <li>My Collections</li>
                    <li>Platform Status</li>
                    <li>Newsletter</li>
                </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <h5>Stay Informed By Newsletter</h5>
            <p>*Subscribe to our newsletter to receive early discount offers and updates.</p>
            <div>
                <input placeholder="Enter your email" className="email" type='email'></input>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <p>Copyright by ModelTheme. All Rights Reserved.</p>

            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <p className="footer-para">Elite Author on ThemeForest.</p>
            </div>

        </div>

      </div>

    </section>
  );
}
