import {BiArrowBack} from 'react-icons/bi'

import './index.css'

const EmojiRulesSet = props => {
  const {history} = props

  return (
    <div className="emoji-rules-main">
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
      <div className="middle-main">
        <div className="icon-sec">
          <img
            src="https://res.cloudinary.com/dssaftaaa/image/upload/v1719818493/Asset_1_4x_1_1_lvscn0.png"
            alt="emoji game"
            className="emoji game"
          />
          <h1 className="emoji-rules-name">Emoji Game</h1>
        </div>

        <div className="rules-container">
          <h1 className="emoji-rules-text">Rules</h1>
          <ul className="emoji-rules-ul">
            <li className="emoji-rules-li">
              User should be able to see the list of Emojis
            </li>
            <li className="emoji-rules-li">
              When the user clicks any one of the Emoji for the first time, then
              the count of the score should be incremented by 1 and the List of
              emoji cards should be shuffled.
            </li>
            <li className="emoji-rules-li">
              This process should be repeated every time the user clicks on an
              emoji card
            </li>
            <li className="emoji-rules-li">
              When the user clicks on all Emoji cards without clicking any of it
              twice, then the user will win the game
            </li>
            <li className="emoji-rules-li">
              When the user clicks on the same Emoji for the second time, then
              the user will lose the game.
            </li>
            <li className="emoji-rules-li">
              Once the game is over, the user will be redirected to the results
              page.
            </li>
          </ul>
          <button
            type="button"
            className="emoji-start-play-btn"
            onClick={() => history.push('/emoji-game-home')}
          >
            Start Playing
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmojiRulesSet
