import React from 'react';
import '../Css/checkoutform.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faAddressCard, faBuilding } from '@fortawesome/free-solid-svg-icons'; // Import the necessary icons
import { faCcVisa, faCcAmex, faCcMastercard, faCcDiscover } from '@fortawesome/free-brands-svg-icons';


const CheckoutForm = () => {
  const visa = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Visa_2014_logo_detail.svg/1200px-Visa_2014_logo_detail.svg.png';
  const mastercard = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png';

  return (
    <div>
    <h2>Checkout Form</h2>
   
    <div class="row">
      <div class="col-75">
        <div class="container">
          <form action="/action_page.php">
          
            <div class="row">
              <div class="col-50">
                <h3>Billing Address</h3>
                <label for="fname"><FontAwesomeIcon icon={faUser} /> </label>
                <input type="text" id="fname" name="firstname" />
                <label for="email"><FontAwesomeIcon icon={faEnvelope} /> </label>
                <input type="text" id="email" name="email"/>
                <label for="adr"><FontAwesomeIcon icon={faAddressCard} /></label>
                <input type="text" id="adr" name="address" />
                <label for="city"><FontAwesomeIcon icon={faBuilding} /> </label>
                <input type="text" id="city" name="city" />
    
                <div class="row">
                  <div class="col-50">
                    <label for="state">State</label>
                    <input type="text" id="state" name="state" />
                  </div>
                  <div class="col-50">
                    <label for="zip">Zip</label>
                    <input type="text" id="zip" name="zip" />
                  </div>
                </div>
              </div>
    
              <div class="col-50">
                <h3>Payment</h3>
                <label for="fname">Accepted Cards</label>
                <div class="icon-container">
                <FontAwesomeIcon icon={faCcVisa} style={{color:"navy"}} />
                <FontAwesomeIcon icon={faCcAmex} style={{color:"blue"}} />
<FontAwesomeIcon icon={faCcMastercard} style={{color:"red"}} />
<FontAwesomeIcon icon={faCcDiscover} style={{color:"orange"}} />
                </div>
                <label for="cname">Name on Card</label>
                <input type="text" id="cname" name="cardname"/>
                <label for="ccnum">Credit card number</label>
                <input type="text" id="ccnum" name="cardnumber" />
                <label for="expmonth">Exp Month</label>
                <input type="text" id="expmonth" name="expmonth" />
                <div class="row">
                  <div class="col-50">
                    <label for="expyear">Exp Year</label>
                    <input type="text" id="expyear" name="expyear" />
                  </div>
                  <div class="col-50">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" />
                  </div>
                </div>
              </div>
              
            </div>
           
            <input type="submit" value="Continue to checkout" class="btn"/>
          </form>
        </div>
      </div>
    
    </div>
    </div>
  );
}

export default CheckoutForm;
