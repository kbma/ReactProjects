//src/components/ProductCard.jsx
import { useState } from 'react';
export default function ProductCard(props) {
 
    const [count, setCount] = useState(0);
 
    return (
        <div>
            <p>Product Name: {props.name}</p>
            <p>Price: {props.price} TND </p>
            <p>Quantity: {count} </p>
            <button onClick={() => setCount(count + 1)}>Acheter</button>
            <hr />
        </div>
    );
 
}
 
