import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="main-container-header">
    <h1 className="games-text">Games</h1>
    <ul className="cards-container">
      <Link to="/emoji-game" className="nav-link">
        <li className="game-container">
          <img
            src="https://res.cloudinary.com/dssaftaaa/image/upload/v1719818493/Asset_1_4x_1_1_lvscn0.png"
            className="emoji-logo"
            alt="emoji game"
          />
          <p className="text">Emoji Game</p>
        </li>
      </Link>

      <Link to="/memory-matrix" className="nav-link">
        <li className="game-container">
          <p className="text">Memory Matrix</p>
          <img
            src="https://res.cloudinary.com/dssaftaaa/image/upload/v1719837086/memory_ujfxjc.png"
            className="matrix-logo"
            alt="memory matrix"
          />
        </li>
      </Link>

      <Link to="/rock-paper-scissor" className="nav-link">
        <li className="game-container">
          <p className="text">Rock Paper Scissor</p>
          <img
            src="https://res.cloudinary.com/dssaftaaa/image/upload/v1719837191/Group_7469_twj7ed.png"
            className="rps-logo"
            alt="rock paper scissor"
          />
        </li>
      </Link>

      <Link to="/card-flip-memory-game" className="nav-link">
        <li className="game-container">
          <img
            src="https://res.cloudinary.com/dssaftaaa/image/upload/v1719838744/animals_jvbha3.png"
            className="animalscard-logo"
            alt="card flip memory game"
          />
        </li>
      </Link>
    </ul>
  </div>
)

export default Home
