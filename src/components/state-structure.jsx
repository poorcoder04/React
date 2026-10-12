import { useState } from 'react';


export default function ShoppingCart() {
  const [item, setItem] = useState('Running Shoes');
  const [quantity, setQuantity] = useState(1);
  const [pricePerItem, setPricePerItem] = useState(100);

  function handleQuantityChange(newQty) {
    setQuantity(newQty);
  }

  return (
    <div>
      <h2>{item}</h2>
      <p>Price: ${pricePerItem}</p>
      <input 
        type="number" 
        value={quantity} 
        onChange={(e) => handleQuantityChange(Number(e.target.value))} 
      />
      <p>Total: ${quantity*pricePerItem}</p>
    </div>
  );
}