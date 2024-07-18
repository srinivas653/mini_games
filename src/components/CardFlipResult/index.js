import './index.css'

const CardFlipResult = props => {
  const {cardflipcount, score, clickPlayAgain} = props
  const onClickPlayAgain = () => {
    clickPlayAgain()
  }
  return (
    <div className="result-container">
      {score === 10 ? (
        <img
          src="https://res.cloudinary.com/dssaftaaa/image/upload/v1721126942/2x_orz434.png"
          className="result-image"
          alt="grinning face with big eyes"
        />
      ) : (
        <img
          src="https://res.cloudinary.com/dssaftaaa/image/upload/v1721127003/05_Pokerface_owqiaj.png"
          className="result-image"
          alt="neutral face"
        />
      )}
      <h1>{score === 10 ? 'Congratulations!' : 'Better luck next time!'}</h1>
      <p>No.of Flips - {cardflipcount}</p>
      <h1>
        {score === 10
          ? 'You matched all of the cards in record time'
          : 'You did not match all of the cards in record time'}
      </h1>
      <button onClick={onClickPlayAgain}>Play Again</button>
    </div>
  )
}
export default CardFlipResult
