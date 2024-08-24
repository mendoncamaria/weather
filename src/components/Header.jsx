// import React from 'react'

import { useState, useEffect } from 'react';
import { getTime, getToday } from '../helper/utils';

function Header() {
  const date = getToday();
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{time}</p>
      <p>{date}</p>
    </div>
  );
}

export default Header;
