import { useState } from 'react';
export default function Counter() {
  const [count, setCount] = useState(10);

  return (
    <div>
      <p>Compteur : {count}</p>

      {/*   <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button> */}

      <button onClick={() => setCount((x) => x + 1)}>+</button>
      <button onClick={() => setCount((y) => y - 1)}>-</button>

    </div>
  );
}

