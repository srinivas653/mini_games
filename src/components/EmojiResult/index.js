import './index.css'

const EmojiResult = props => {
  const {score, clickingPlayAgain} = props
  const onClickPlayAgain = () => {
    clickingPlayAgain()
  }

  return (
    <div className="sesult-card-container">
      {score < 12 ? (
        <img
          src="https://res.cloudinary.com/dssaftaaa/image/upload/v1719921282/Image_qictbs.png"
          className="result-img"
          alt="lose"
        />
      ) : (
        <img
          src="https://res.cloudinary.com/dssaftaaa/image/upload/v1719921451/Image_2_esjpmm.png"
          className="result-img"
          alt="won"
        />
      )}
      <div className="score-container">
        <h1 className="heading">{score < 12 ? 'You Lose' : 'You Won'}</h1>
        <p className="best-Score">Best Score</p>
        <p className="best-Score">Score</p>
        {score < 10 ? (
          <p className="score">0{score}/12</p>
        ) : (
          <p className="score">{score}/12</p>
        )}
        <button className="emoji-result-play-again" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}
export default EmojiResult
