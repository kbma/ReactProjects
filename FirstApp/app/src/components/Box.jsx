// src/design/Box.jsx
import React from 'react';
 
const boxStyle = {
  backgroundColor: 'lightgreen',
  padding: '15px',
  borderRadius: '10px',
  textAlign: 'center'
};
 
export default function Box() {
  return (
    <div style={boxStyle}>
      <h2>Box avec style objet JS</h2>
      <p>On peut réutiliser cet objet dans plusieurs composants.</p>
    </div>
  );
}
 
