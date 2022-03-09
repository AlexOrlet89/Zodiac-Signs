import React from 'react';
import './Main.css';
import Zodiac from '../Zodiac/Zodiac';

import { zodiac } from '../../data';

export default function Main() {
  return <main className='main'>
    {zodiac.map((sign) => (
      <Zodiac key={sign.name} name={sign.name} dates={sign.dates} />
    ))}
  </main>;
}
