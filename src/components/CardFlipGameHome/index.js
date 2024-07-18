import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import RulesModel from '../RulesModel'
import {flipRulesSet1} from '../AllGameRules'
import CardFlipCardItem from '../CardFlipCardItem'
import CardFlipResult from '../CardFlipResult'

import './index.css'

/* const reactFlip = (
  <ReactCardFlip
    isFlipped={isFlipped}
    flipDirection="vertical"
    id={id}
    className="flip-image-container"
  >
    <button onClick={onClickCard}>
      <img
        src="https://res.cloudinary.com/dssaftaaa/image/upload/v1721109898/foot-print_1_d2rfmk.png"
        alt="flip-img"
        className="image foot-image"
      />
    </button>

    <img src={image} alt={name} className="image animal-image" />
  </ReactCardFlip>
) */

const cardsData = [
  {
    id: 0,
    isFlipped: false,
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    id: 1,
    isFlipped: false,
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    id: 2,
    isFlipped: false,
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    id: 3,
    isFlipped: false,
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    id: 4,
    isFlipped: false,
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    id: 5,
    isFlipped: false,
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    id: 6,
    isFlipped: false,
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    id: 7,
    isFlipped: false,
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    id: 8,
    isFlipped: false,
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    id: 9,
    isFlipped: false,
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
  {
    id: 10,
    isFlipped: false,
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    id: 11,
    isFlipped: false,
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    id: 12,
    isFlipped: false,
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    id: 13,
    isFlipped: false,
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    id: 14,
    isFlipped: false,
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    id: 15,
    isFlipped: false,
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    id: 16,
    isFlipped: false,
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    id: 17,
    isFlipped: false,
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    id: 18,
    isFlipped: false,
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    id: 19,
    isFlipped: false,
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
]

class CardFlipGameHome extends Component {
  state = {
    isplaying: true,
    suffledCards: [],
    showModel: false,
    cardflipcount: 0,
    minutes: 2,
    dispalyseconds: 0,
    score: 0,
    seconds: 120,
    compareArray: [],
  }

  componentDidMount() {
    this.getsuffledCards()
    this.setTimeInteval()
  }

  updateTime = () => {
    const {seconds} = this.state
    const minutes = Math.floor(seconds / 60)
    const remainingsSeconds = seconds % 60
    this.setState({minutes, dispalyseconds: remainingsSeconds})
  }

  chechingIsGameOver = inteval => {
    const {dispalyseconds, minutes, score} = this.state
    if ((minutes === 0 && dispalyseconds === 0) || score === 10) {
      this.setState({isplaying: false})
      clearInterval(inteval)
    }
  }

  setTimeInteval = () => {
    const {seconds, isplaying} = this.state
    const inteval = setInterval(() => {
      this.setState(
        prevState => ({
          seconds: prevState.seconds - 1,
        }),
        this.updateTime(),
      )
      this.chechingIsGameOver(inteval)
    }, 1000)
  }

  getsuffledCards = () => {
    const suffledList = cardsData.sort(() => Math.random() - 0.5)
    this.setState({suffledCards: suffledList})
  }

  onClickShowModel = () => {
    this.setState(prevState => ({showModel: !prevState.showModel}))
  }

  flipCardAfter2Seconds = () => {
    const {suffledCards, compareArray} = this.state
    const newsuffledCards = suffledCards.map(obj =>
      obj.id === compareArray[1] || obj.id === compareArray[0]
        ? {...obj, isFlipped: false}
        : obj,
    )
    this.setState({suffledCards: newsuffledCards})
  }

  compareTwoItems = () => {
    const {compareArray, suffledCards, score, cardflipcount} = this.state
    if (compareArray.length === 2) {
      const firstImage = suffledCards.find(obj => obj.id === compareArray[0])
      const secondImage = suffledCards.find(obj => obj.id === compareArray[1])
      if (firstImage.name === secondImage.name) {
        const newsuffledCards = suffledCards.map(obj =>
          obj.id === compareArray[1] || obj.id === compareArray[0]
            ? {...obj, isFlipped: true}
            : obj,
        )
        this.setState(
          {
            suffledCards: newsuffledCards,
            cardflipcount: cardflipcount + 1,
            compareArray: [],
            score: score + 1,
          },
          this.chechingIsGameOver,
        )
      } else {
        const newsuffledCards = suffledCards.map(obj =>
          obj.id === compareArray[1] || obj.id === compareArray[0]
            ? {...obj, isFlipped: false}
            : obj,
        )
        const inteval = setInterval(() => {
          clearInterval(inteval)
          this.setState({
            compareArray: [],
            suffledCards: newsuffledCards,
          })
        }, 2000)
        this.setState({cardflipcount: cardflipcount + 1})
      }
    }
  }

  onClickCard = id => {
    const {suffledCards, cardflipcount, compareArray} = this.state

    const newsuffledCards = suffledCards.map(obj =>
      obj.id === id ? {...obj, isFlipped: true} : obj,
    )
    this.setState(
      {
        suffledCards: newsuffledCards,
        compareArray: [...compareArray, id],
      },
      this.compareTwoItems,
    )
  }

  gamecardsContainer = () => {
    const {suffledCards, compareArray} = this.state
    return (
      <div className="card-flip-card-container">
        <ul className="cards-ul">
          {suffledCards.map(each => (
            <CardFlipCardItem
              each={each}
              key={each.id}
              clickCard={this.onClickCard}
              compareArray={compareArray}
            />
          ))}
        </ul>
      </div>
    )
  }

  updatedvalue = value => {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`
  }

  renderPlayingView = () => {
    const {showModel, cardflipcount, minutes} = this.state
    const {dispalyseconds, score} = this.state
    return (
      <div className="card-Flip-Container">
        <div className="back-rules-container">
          <Link to="/card-flip-memory-game">
            <div className="back-container">
              <BiArrowBack />
              <p>Back</p>
            </div>
          </Link>
          <div>
            <button onClick={this.onClickShowModel} type="button">
              Rules
            </button>
            <RulesModel
              show={showModel}
              clickcloseModel={this.onClickShowModel}
              rules={flipRulesSet1}
            />
          </div>
        </div>
        <div className="display">
          <h1 className="game-heading">Card-Flip Memory Game</h1>
        </div>
        <div className="display">
          <div className="card-flip-game-container">
            <div className="score-time-container">
              <p>Card flip count - {this.updatedvalue(cardflipcount)}</p>
              <p>
                {this.updatedvalue(minutes)}:{this.updatedvalue(dispalyseconds)}
              </p>
              <p>Score - {this.updatedvalue(score)}</p>
            </div>
            {this.gamecardsContainer()}
          </div>
        </div>
      </div>
    )
  }

  rePlayGame = () => {
    this.getsuffledCards()
    this.setTimeInteval()
  }

  onclickPlayAgain = () => {
    this.setState(
      {
        isplaying: true,
        suffledCards: [],
        showModel: false,
        cardflipcount: 0,
        minutes: 2,
        dispalyseconds: 0,
        score: 0,
        seconds: 120,
        compareArray: [],
      },
      this.rePlayGame,
    )
  }

  renderResultView = () => {
    const {isplaying, score, cardflipcount} = this.state
    return (
      <div>
        <CardFlipResult
          cardflipcount={cardflipcount}
          score={score}
          clickPlayAgain={this.onclickPlayAgain}
        />
      </div>
    )
  }

  render() {
    const {isplaying} = this.state
    return (
      <div>
        {isplaying ? this.renderPlayingView() : this.renderResultView()}
      </div>
    )
  }
}
export default CardFlipGameHome
