import React from "react";
import { useState } from "react";

function ShoppingCart({ products }) {
 const [cart, setCart] = useState(
    products.map((product) => ({
      ...product,
      quantity: 1,
    }))
  );
  
  
  const increase = (id) => {
    setCart(cart.map((product) => 
        id === product.id ? { ...product, quantity: Math.min(10,product.quantity + 1) } : product
    ));
  }

  const decrease = (id) => {
    setCart(cart.map((product) => 
        id === product.id ? { ...product, quantity: Math.max(1,product.quantity) - 1 }  : product
    ));
  }

  const deleteProduct = (id) => {
    setCart(cart.filter((product) =>
      id !== product.id 
    ))
  }


  const subTotal = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const discount = subTotal >= 10000 ? subTotal * (1 / 10) : 0;

  const shipping = subTotal >= 5000   ? 0 : 40;

  const total = subTotal-discount+shipping;
 

  return (
    <div>
      <nav>
        <div className="logo">
          <span> 🛍️ ShopCart</span>
        </div>
        <div className="nav-details">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="cart-icon">
          <span>🛒</span>
           <sub style={{ fontWeight: "bold",fontSize: "15px",position:"relative",right:"3px",color:"white"}}>+{cart.length}</sub>
        </div>
      </nav>
      <hr />
      <main className="container">
        <h1>Your Cart</h1>
        <p>{cart.length} items in your cart</p>
        <div className="layout">
          <section className="cart-section">
            <div className="cart-header">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span></span>
              {cart.map((product) => {
                return (
                  <div key={product.id}>
                    <div className="product-info">
                      <img src={product.image} alt={product.name} />
                      <div className="name-price">
                        <h3>{product.name}</h3>
                        {/* <p>{product.price}</p> */}
                      </div>
                    </div>
                     <p>₹{product.price}</p>
                    <div className="quantity">
                      <button onClick={() => decrease(product.id)}>-</button>
                      <span>{product.quantity}</span>
                      <button onClick={() => increase(product.id)}>+</button>
                    </div>
                   
                    <p>₹{product.price * product.quantity}</p>
                    
                    <button onClick={() =>
                      deleteProduct(product.id)
                    }>🗑️</button>
                  </div>
                );
              })}
            </div>
            <button>⬅ Continue Shopping</button>
          </section>
          <section className="order-summary">
            <h2>Order Summary</h2>
            <div className="subtotal" >
              <span>Subtotal ({cart.length})items</span>
              <span>₹{subTotal.toFixed(2)}</span>
            </div>
            <div className="discount" >
              <span>Discount</span>
              <span> ₹{discount.toFixed(2)}</span>
            </div>
            <div  className="shipping">
              <span>Shipping</span>
              <span>₹{shipping.toFixed(2)}</span>
            </div>
            <hr />
            <div className="total">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <button>Proceed to Checkout</button>
            <div>
              <span>🛡️🛡️Secure Checkout🛡️🛡️</span>
              <p>100% secure payment</p>
            </div>
          </section>
          
        </div>
      </main>
    </div>
  );
}

export default ShoppingCart;