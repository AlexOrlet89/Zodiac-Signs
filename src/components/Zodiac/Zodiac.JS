import React from 'react';
import './Zodiac.css';

export default function Zodiac(props) {
  return <div className='Zodiac' 
//   style={{ backgroundImage: `src/${props.name}.png` }}
  >
    <img alt= {`${props.name}`} src={`${process.env.PUBLIC_URL}/assets/${props.name}.png`} />
    <h4>{`${props.name}`}</h4>
    <p>{`Dates: ${props.dates}`}</p>
  </div>;
}

{/* <img src={`${process.env.PUBLIC_URL}/zodiac_images/${props.name}.png`} /> */}
// C:\Users\Alexo\my documents\alchemy\Zodiac-Signs\src\aquarius.png
// C:\Users\Alexo\my documents\alchemy\Zodiac-Signs\src\components\Zodiac\Zodiac.js
// src\aries.png