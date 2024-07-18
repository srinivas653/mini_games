import {Line} from 'rc-progress'
import './index.css'

const memoryResultIcons = [
  {
    id: 1,
    url:
      'https://res.cloudinary.com/dssaftaaa/image/upload/v1720855138/mbrczpgkmowyfxrfe6d2.png',
    alt: 'neutral face',
  },
  {
    id: 2,
    url:
      'https://res.cloudinary.com/dssaftaaa/image/upload/v1720854093/sca4rn4xfiofcu13pr7h.png',
    alt: 'grimacing face',
  },
  {
    id: 3,
    url:
      'https://res.cloudinary.com/dssaftaaa/image/upload/v1720855288/2x_vxhozp.png',
    alt: 'slightly smiling face',
  },
  {
    id: 4,
    url:
      'https://res.cloudinary.com/dssaftaaa/image/upload/v1720855354/2x_ate4xy.png',
    alt: 'grinning face with big eyes',
  },
  {
    id: 5,
    url:
      'https://res.cloudinary.com/dssaftaaa/image/upload/v1720855426/2x_gpixnb.png',
    alt: 'grinning face with smiling eyes',
  },
  {
    id: 6,
    url:
      'https://res.cloudinary.com/dssaftaaa/image/upload/v1720855685/2x_xy6js0.png',
    alt: 'beaming face with smiling eyes',
  },
  {
    id: 7,
    url:
      'https://res.cloudinary.com/dssaftaaa/image/upload/v1720855735/2x_xdpz3j.png',
    alt: 'grinning face',
  },
  {
    id: 8,
    url:
      'https://res.cloudinary.com/dssaftaaa/image/upload/v1720855791/isf3cusw69la9fynkism.png',
    alt: 'smiling face with sunglasses',
  },
]

const gameLevels = ['Level 1', 'Level 5', 'Level 10', 'Level 15']

const MemoryMatrixResult = props => {
  const {gameLevel, playAgain} = props
  const onClickPlayAgain = () => {
    playAgain()
  }
  const presentGameLevel = gameLevel - 1
  const completedGameLevel = ((gameLevel - 1) / 15) * 10
  return (
    <div>
      <div className="container1">
        {memoryResultIcons.map(icon => (
          <img
            src={icon.url}
            alt={icon.alt}
            key={icon.id}
            className="memory-status-icon"
          />
        ))}
      </div>
      <div className="container1">
        <Line
          percent={completedGameLevel * 10}
          strokeWidth={1}
          trailWidth={10}
          strokeColor="rgba(70, 122, 255, 1)"
        />
      </div>
      <div className="container1">
        <p>Level 1</p>
        <p>Level 5</p>
        <p>Level 10</p>
        <p>Level 15</p>
      </div>

      <h1>Congratulations</h1>
      <h1>You have reached level {presentGameLevel}</h1>
      <button onClick={onClickPlayAgain} type="button">
        Play Again
      </button>
    </div>
  )
}
export default MemoryMatrixResult
