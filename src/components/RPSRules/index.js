import {BiArrowBack} from 'react-icons/bi'

import './index.css'

const RPSRules = props => {
  const {history} = props

  return (
    <div className="rps-main">
      <div className="back-btn-container">
        <BiArrowBack onClick={() => history.push('/')} />
        <button
          className="back-text"
          type="button"
          onClick={() => history.push('/')}
        >
          Back
        </button>
      </div>
      <div className="rps-middle-main">
        <div className="icon-sec">
          <p className="rps-name">ROCK PAPER SCISSOR</p>
          <img
            src="https://res.cloudinary.com/dssaftaaa/image/upload/v1720273847/Group_7469_1_z1thv9.png"
            alt="rock paper scissor"
            className="rps-game"
          />
        </div>
        <h1 className="rps-rules-text">Rules</h1>
        <div className="rules-container">
          <ul className="emoji-rules-ul">
            <li className="rps-rules-li">
              The game result should be based on user and user opponent choices
            </li>

            <li className="rps-rules-li">
              When the user choice is rock and his opponent choice is rock then
              the result will be <span className="rps-span">IT IS DRAW</span>
            </li>
            <li className="rps-rules-li">
              When the user choice is paper and his opponent choice is rock then
              the result will be YOU WON
            </li>
            <li className="rps-rules-li">
              When the user choice is a scissor and his opponent choice is rock
              then the result will be YOU LOSE
            </li>
            <li className="rps-rules-li">
              When the user choice is paper and his opponent choice is paper
              then the result will be IT IS DRAW
            </li>
            <li className="rps-rules-li">
              When the user choice is scissors and his opponent choice is paper
              then the result will be YOU WON
            </li>
            <li className="rps-rules-li">
              When the user choice is rock and his opponent choice is scissors
              then the result will be YOU WON
            </li>
            <li className="rps-rules-li">
              When the user choice is paper and his opponent choice is scissors
              then the result will be YOU LOSE
            </li>
            <li className="rps-rules-li">
              When the user choice is scissors and his opponent choice is
              scissors then the result will be IT IS DRAW
            </li>
            <li className="rps-rules-li">
              When the result is YOU WON, then the count of the score should be
              incremented by 1
            </li>
            <li className="rps-rules-li">
              When the result is IT IS DRAW, then the count of the score should
              be the same
            </li>
            <li className="rps-rules-li">
              When the result is YOU LOSE, then the count of the score should be
              decremented by 1
            </li>
          </ul>
          <button
            type="button"
            className="emoji-start-play-btn"
            onClick={() => history.push('/rock-paper-scissor-home')}
          >
            Start Playing
          </button>
        </div>
      </div>
    </div>
  )
}

export default RPSRules
