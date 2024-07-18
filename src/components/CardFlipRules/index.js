import {BiArrowBack} from 'react-icons/bi'

import './index.css'

const CardFlipRules = props => {
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
          <img
            src="https://res.cloudinary.com/dssaftaaa/image/upload/v1719838744/animals_jvbha3.png"
            alt="card flip memory game"
            className="rps-game"
          />
        </div>
        <h1 className="rps-rules-text">Rules</h1>
        <div className="rules-container">
          <ul className="emoji-rules-ul">
            <li className="rps-rules-li">
              When the game is started, the users should be able to see the list
              of Cards that are shuffled and turned face down.
            </li>

            <li className="rps-rules-li">
              When a user starts the game, the user should be able to see the
              Timer running.
            </li>
            <li className="rps-rules-li">The Timer starts from 2 Minutes.</li>
            <li className="rps-rules-li">
              If the two cards have the same image, they remain face up. If not,
              they should be flipped face down again after a short 2 seconds.
            </li>
            <li className="rps-rules-li">
              Users should be able to compare only two cards at a time.
            </li>
            <li className="rps-rules-li">
              When the user is not able to find all the cards before the timer
              ends then the game should end and redirect to the Time Up Page.
            </li>
            <li className="rps-rules-li">
              If the user finds all the matching cards before the timer ends,
              then the user should be redirected to the results page.
            </li>
          </ul>
          <button
            type="button"
            className="emoji-start-play-btn"
            onClick={() => history.push('/card-flip-home')}
          >
            Start Playing
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardFlipRules
