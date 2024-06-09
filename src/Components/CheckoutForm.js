import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faAddressCard, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcAmex, faCcMastercard, faCcDiscover } from '@fortawesome/free-brands-svg-icons';
import '../Css/checkoutform.css';

const CheckoutForm = () => {
  return (
    <div className="checkout-container">
      <h2>Checkout Form</h2>
      <div className="container">
        <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
            <div className="input-container">
              <label htmlFor="fname"><FontAwesomeIcon icon={faUser} /> Full Name</label>
              <input type="text" id="fname" name="firstname" placeholder="John Doe" />
            </div>
            <div className="input-container">
              <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email</label>
              <input type="text" id="email" name="email" placeholder="john@example.com" />
            </div>
            <div className="input-container">
              <label htmlFor="adr"><FontAwesomeIcon icon={faAddressCard} /> Address</label>
              <input type="text" id="adr" name="address" placeholder="123 Street, Apt 1" />
            </div>
            <div className="input-container">
              <label htmlFor="city"><FontAwesomeIcon icon={faBuilding} /> City</label>
              <input type="text" id="city" name="city" placeholder="New York" />
            </div>
            <div className="row">
              <div className="col-50">
                <div className="input-container">
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" name="state" placeholder="NY" />
                </div>
              </div>
              <div className="col-50">
                <div className="input-container">
                  <label htmlFor="zip">Zip</label>
                  <input type="text" id="zip" name="zip" placeholder="10001" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-item">
              <span>Product 1</span>
              <span>$10.00</span>
            </div>
            <div className="summary-item">
              <span>Product 2</span>
              <span>$20.00</span>
            </div>
            <div className="summary-item">
              <span>Total</span>
              <span>$30.00</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-50">
            <h3>Payment</h3>
            <div className="input-container">
              <label htmlFor="cname">Name on Card</label>
              <input type="text" id="cname" name="cardname" placeholder="John Doe" />
            </div>
            <div className="input-container">
              <label htmlFor="ccnum">Credit card number</label>
              <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
            </div>
            <div className="icon-container">
              <FontAwesomeIcon icon={faCcVisa} style={{ color: "navy" }} />
              <FontAwesomeIcon icon={faCcAmex} style={{ color: "blue" }} />
              <FontAwesomeIcon icon={faCcMastercard} style={{ color: "red" }} />
              <FontAwesomeIcon icon={faCcDiscover} style={{ color: "orange" }} />
            </div>
            <div className="row">
              <div className="col-50">
                <div className="input-container">
                  <label htmlFor="expmonth">Exp Month</label>
                  <input type="text" id="expmonth" name="expmonth" placeholder="MM" />
                </div>
              </div>
              <div className="col-50">
                <div className="input-container">
                  <label htmlFor="expyear">Exp Year</label>
                  <input type="text" id="expyear" name="expyear" placeholder="YYYY" />
                </div>
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" placeholder="CVV" />
            </div>
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Continue to checkout" className="btn" />
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
