import { useState } from "react";

export default function Card() {
  const [isFaceUp, setIsFaceUp] = useState(false);

  function handleClick() {
    setIsFaceUp(!isFaceUp);
    console.log(`Card isFaceUp: ${isFaceUp}`);
  }

  return (
    <div className="card" onClick={handleClick}>?</div>
  )
}