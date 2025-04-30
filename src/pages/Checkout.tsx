import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import "../components/checkout.css";

// 1. Define product structure
interface Product {
  name: string;
  price: number;
  size: string;
  image: string;
}

export const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [expandOrderSummary, setExpandOrderSummary] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  // 2. Load products from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

  // 3. Remove item from cart
  const removeItem = (index: number) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
    window.dispatchEvent(new Event('cartUpdated'));

    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  // 4. Calculate totals
  const subtotal = products.reduce((sum, item) => sum + item.price, 0);
  const tax = +(subtotal * 0.09).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  return (
    <div className="mt-33 md:mt-65 max-w-[150vh] mx-auto">
      <h1 className="page-title md:text-start text-center underline">Complete Your Purchase</h1>

      <div className="checkout-content">
        {/* Left Column - Checkout Form */}
        <div className="checkout-form">
          {/* Shipping Address */}
          <section className="form-section">
            <h2>Shipping Address</h2>
            <form>
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Address" />
              <div className="row">
                <input type="text" placeholder="City" />
                <input type="text" placeholder="ZIP Code" />
              </div>
              <select>
                <option>Country</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
            </form>
          </section>

          {/* Payment Method */}
          <section className="form-section">
            <h2>Payment Method</h2>
            <div className="payment-options">
              <label className={paymentMethod === "credit-card" ? "active" : ""}>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "credit-card"}
                  onChange={() => setPaymentMethod("credit-card")}
                />
                Credit Card
              </label>
              <label className={paymentMethod === "paypal" ? "active" : ""}>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                />
                PayPal
              </label>
              <label className={paymentMethod === "apple-pay" ? "active" : ""}>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "apple-pay"}
                  onChange={() => setPaymentMethod("apple-pay")}
                />
                Apple Pay
              </label>
            </div>

            {paymentMethod === "credit-card" && (
              <div className="card-details">
                <input type="text" placeholder="Card Number" />
                <div className="row">
                  <input type="text" placeholder="MM/YY" />
                  <input type="text" placeholder="CVV" />
                </div>
                <span className="secure-payment">🔒 Secure Payment</span>
              </div>
            )}
          </section>

          <button
            className="toggle-summary"
            onClick={() => setExpandOrderSummary(!expandOrderSummary)}
          >
            {expandOrderSummary ? "Hide Order Summary" : "Show Order Summary"}
          </button>
        </div>

        {/* Right Column - Order Summary */}
        <div className={`order-summary ${expandOrderSummary ? "expanded" : ""}`}>
          

          <div className="order-items">
            {products.length > 0 ? (
              products.map((item, index) => (
                <div className="item" key={index}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <p>Size: {item.size}</p>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(index)
                      
                    }
                    style={{
                      marginLeft: "auto",
                      background: "transparent",
                      border: "none",
                      color: "red",
                      cursor: "pointer"
                    }}
                   
                  >
                    <Trash2 size={25} color="gray"></Trash2> 
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-lg font-bold">Your cart is empty.</p>
            )}
          </div>

          <div className="order-totals">
            <div className="row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="row">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="promo-code">
            <input type="text" placeholder="Promo Code" />
            <button>Apply</button>
          </div>
          <button className="place-order-btn">Place Order</button>
          <div className="trust-badges">
            <span>🔒 Secure Checkout</span>
            <span>✓ Free Returns</span>
          </div>
        </div>
      </div>
    </div>
  );
};
