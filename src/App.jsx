import './index.css'

export default function App() {

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
        <secion className="card-grid">
          <div className="grid-row">
            <div className="card">?</div>
            <div className="card">?</div>
            <div className="card">?</div>
            <div className="card">?</div>
          </div>
          <div className="grid-row">
            <div className="card">?</div>
            <div className="card">?</div>
            <div className="card">?</div>
            <div className="card">?</div>
          </div>
          <div className="grid-row">
            <div className="card">?</div>
            <div className="card">?</div>
            <div className="card">?</div>
            <div className="card">?</div>
          </div>
          <div className="grid-row">
            <div className="card">?</div>
            <div className="card">?</div>
            <div className="card">?</div>
            <div className="card">?</div>
          </div>
        </secion>
      </main>

      <footer>
        <button className="reset-btn">Reset Game</button>
      </footer>
    </div>
  )
}

