import {BiArrowBack} from 'react-icons/bi'

import './index.css'

const MemoryMatrixRules = props => {
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
          <h1 className="rps-name">Memory Matrix</h1>
          <img
            src="https://res.cloudinary.com/dssaftaaa/image/upload/v1719837086/memory_ujfxjc.png"
            alt="memory matrix"
            className="rps-game"
          />
        </div>
        <h1 className="rps-rules-text">Rules</h1>
        <div className="rules-container">
          <ul className="emoji-rules-ul">
            <li className="rps-rules-li">
              In each level of the Game, Users should be able to see the Grid
              with (N X N) size starting from 3 and the grid will highlight N
              cells in Blue, the N highlighted cells will be picked randomly.
            </li>

            <li className="rps-rules-li">
              The highlighted cells will remain N seconds for the user to
              memorize the cells. At this point, the user should not be able to
              perform any action.
            </li>
            <li className="rps-rules-li">
              After N seconds, the grid will clear the N highlighted cells.
            </li>
            <li className="rps-rules-li">
              At N seconds, the user can click on any cell. Clicking on a cell
              that was highlighted before it will turn blue. Clicking on the
              other cells that were not highlighted before then will turn to
              red.
            </li>
            <li className="rps-rules-li">
              The user should be promoted to the next level if they guess all N
              cells correctly in one attempt.
            </li>
            <li className="rps-rules-li">
              The user should be taken to the results page if the user clicks on
              the wrong cell.
            </li>
            <li className="rps-rules-li">
              If the user completed all the levels, then the user should be
              taken to the results page.
            </li>
          </ul>
          <button
            type="button"
            className="emoji-start-play-btn"
            onClick={() => history.push('/memory-matrix-home')}
          >
            Start Playing
          </button>
        </div>
      </div>
    </div>
  )
}

export default MemoryMatrixRules
