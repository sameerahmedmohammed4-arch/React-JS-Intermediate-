import React from 'react'
import ShoppingCart from './Components/ShoppingCart'

function App() {
  const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120",

  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=120",
    
    },
  {
    id: 3,
    name: "Sneakers",
    price: 1799,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=120",

   },
  {
    id: 4,
    name: "Laptop",
    price: 45999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=120",
   },
];

  return (
    <div>
      <ShoppingCart products={ products} />
    </div>
  )
}

export default App