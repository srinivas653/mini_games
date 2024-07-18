import './index.css'

const MemoryMatrixGridItem = props => {
  const {
    eachItem,
    gridSize,
    isIntevalStart,
    randomArray,
    clikingGrid,
    clickedWrongGrid,
  } = props
  const {id, isClicked, wrongClicked} = eachItem
  const isRandomGrid = randomArray.includes(id)

  if (wrongClicked) {
    const inteval = setInterval(() => {
      clearInterval(inteval)
      clickedWrongGrid()
    }, 1000)
  }

  const onClickGrid = () => {
    clikingGrid(id)
  }
  const stledComponent1 = {
    height: gridSize,
    width: gridSize,
    backgroundColor: '#f0f0f0',
  }
  const stledComponent2 = {
    height: gridSize,
    width: gridSize,
    backgroundColor: '#467AFF',
  }
  const stledComponent3 = {
    height: gridSize,
    width: gridSize,
    backgroundColor: '#EF4444',
  }

  let classStle = {}
  if (isRandomGrid) {
    if ((isIntevalStart || isClicked) && !wrongClicked) {
      classStle = stledComponent2
    } else {
      classStle = stledComponent1
    }
  } else if (wrongClicked) {
    classStle = stledComponent3
  } else {
    classStle = stledComponent1
  }

  const renderIntervalBoxes = (
    <li>
      <button
        className="gridIttem"
        onClick={onClickGrid}
        data-testid={isRandomGrid ? 'highlighted' : 'notHighlighted'}
        type="button"
      >
        <p style={classStle} />
      </button>
    </li>
  )

  const renderBoxes = (
    <li>
      <button
        className="gridIttem"
        onClick={onClickGrid}
        data-testid={isRandomGrid ? 'highlighted' : 'notHighlighted'}
        type="button"
      >
        <p style={classStle} />
      </button>
    </li>
  )

  return (
    <li>
      {isIntevalStart ? (
        <button
          className="gridIttem"
          data-testid={isRandomGrid ? 'highlighted' : 'notHighlighted'}
          type="button"
        >
          <p style={classStle} />
        </button>
      ) : (
        <button
          className="gridIttem"
          onClick={onClickGrid}
          data-testid={isRandomGrid ? 'highlighted' : 'notHighlighted'}
          type="button"
        >
          <p style={classStle} />
        </button>
      )}
    </li>
  )
}
export default MemoryMatrixGridItem
