import { useState } from "react";
import Card from "./components/Card.jsx";
import './index.css'

export default function App() {
  
  // flippedCards - the current list of flipped cards, starts out as an empty array
  // setFlippedCards - updates that list
  const [flippedCards, setFlippedCards] = useState([]);

  function handleCardClick(cardId) {
    // what is the purpose of unpacking contents in array?
    setFlippedCards([...flippedCards, cardId])
  }

  return (
    <div className="app">
      <header>
        <h2 className="game-title">Memory Card Game</h2>
        <div className="score-board">
          <span>Moves: 0</span>
          <span>Matches: 0/12</span>
        </div>
      </header>

      <main>
        <section className="card-grid">
          <div className="grid-row">

            {/* each prop here becomes available as props.id, props.value etc in Card.jsx */}
            {/* to be able to use props, component must:
            1. be used as JSX tag - <Card />
            2. must pass values - <Card id={1} />
            3. child must accept props - function Card(props) or function Card({ id }) 
            */}
            <Card id={1} value="🎯" isFaceUp={flippedCards.includes(1)} onClick={handleCardClick} />
            <Card id={2} value="🎯" isFaceUp={flippedCards.includes(2)} onClick={handleCardClick} />
            <Card id={3} value="🎲" isFaceUp={flippedCards.includes(3)} onClick={handleCardClick} />
            <Card id={4} value="🎲" isFaceUp={flippedCards.includes(4)} onClick={handleCardClick} />
          </div>
        </section>
      </main>

      <footer>
        <button className="reset-btn">Reset Game</button>
      </footer>
    </div>
  )
}

