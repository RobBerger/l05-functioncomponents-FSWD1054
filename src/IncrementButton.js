import React, { useState } from 'react';

function IncrementButton() {
  const [dollars, setDollars] = useState(0);

  return (<div>
    <button onClick={() => setDollars(dollars + 1)}>Increment</button>
    <span> ${dollars}</span>
  </div>)
}

export default IncrementButton