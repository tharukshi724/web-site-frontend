import React from 'react';
import './styles/checkoutform.css'

const CheckoutForm = () => {
  return (
    <div className="checkout-page">
      <h1 className="checkout-title">Checkout</h1>
      <div className="notification">
        <p>"Coupon" has been added to your cart. <button>View Cart</button></p>
      </div>
      <form className="checkout-form">
        <div className="billing-details">
          <h2>Billing details</h2>
          <div className="input-group">
            <label>First Name *</label>
            <input type="text" required />
          </div>
          <div className="input-group">
            <label>Last Name *</label>
            <input type="text" required />
          </div>
          <div className="input-group">
            <label>Country / Region *</label>
            <input type="text" required />
          </div>
          <div className="input-group">
            <label>Street address *</label>
            <input type="text" placeholder="House number and street name" required />
          </div>
          <div className="input-group">
            <label>Town / City *</label>
            <input type="text" required />
          </div>
          <div className="input-group">
            <label>State *</label>
            <input type="text" required />
          </div>
          <div className="input-group">
            <label>ZIP Code *</label>
            <input type="text" required />
          </div>
          <div className="input-group">
            <label>Phone *</label>
            <input type="tel" required />
          </div>
          <div className="input-group">
            <label>Email Address *</label>
            <input type="email" required />
          </div>
          <div className="input-group">
            <label>Create account password *</label>
            <input type="password" required />
          </div>
        </div>
        <div className="additional-info">
          <h2>Additional information</h2>
          <div className="input-group">
            <label>Order notes (optional)</label>
            <textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
          </div>
        </div>
        <div className="order-summary">
          <h2>Your order</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Premium x 1</td>
                <td>$20.00</td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td>$20.00</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>$20.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="payment-method">
          <h2>Credit/Debit Cards</h2>
          <div className="input-group">
            <label>Card number</label>
            <input type="text" placeholder="1234 1234 1234 1234" required />
          </div>
          <div className="input-group">
            <label>Expiration</label>
            <input type="text" placeholder="MM / YY" required />
          </div>
          <div className="input-group">
            <label>CVC</label>
            <input type="text" placeholder="CVC" required />
          </div>
          <button type="submit" className="submit-btn">Sign up now</button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
