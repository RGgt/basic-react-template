import { useState } from 'react';

function ClicksCounter() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <button onClick={onClick}>Clicks: {count} </button>
    </>
  );
}

export { ClicksCounter };
