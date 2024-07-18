import './index.css'

const CardFlipCardItem = props => {
  const {each, clickCard, compareArray} = props
  const {image, isFlipped, id, name} = each
  const onClickCard = () => {
    if (compareArray.length < 2) {
      clickCard(id)
    }
  }

  return (
    <li>
      <div className="image-container">
        {!isFlipped ? (
          <button onClick={onClickCard} data-testid={name}>
            <img
              src="https://res.cloudinary.com/dssaftaaa/image/upload/v1721109898/foot-print_1_d2rfmk.png"
              alt="flip-img"
              className="image foot-image"
            />
          </button>
        ) : (
          <img src={image} alt={name} className="image animal-image" />
        )}
      </div>
    </li>
  )
}
export default CardFlipCardItem
