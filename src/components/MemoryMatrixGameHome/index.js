import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import RulesModel from '../RulesModel'
import {memoryRuleSet1} from '../AllGameRules'
import MemoryMatrixGridItem from '../MemoryMatrixGridItem'
import MemoryMatrixResult from '../MemoryMtarixResult'

import './index.css'

class MemoryMatrixGameHome extends Component {
  state = {
    isPlaying: true,
    gameLevel: 1,
    boxesArray: [],
    randomArray: [],
    isIntevalStart: true,
    showModel: false,
    gridSize: '100px',
    clickedGridItem: [],
    gameStarted: false,
  }

  componentDidMount = () => {
    this.getBoxesArray()
    this.setinterval()
    this.getGridSize()
  }

  getGridSize = () => {
    const {gameLevel} = this.state
    let boxWidth = ''
    switch (gameLevel) {
      case 1:
        boxWidth = '100px'
        break
      case 2:
        boxWidth = '70px'
        break
      case 3:
        boxWidth = '60px'
        break
      case 4:
        boxWidth = '50px'
        break
      case 5:
        boxWidth = '40px'
        break
      case 6:
        boxWidth = '35px'
        break
      case 7:
        boxWidth = '25px'
        break
      case 8:
        boxWidth = '35px'
        break
      case 9:
        boxWidth = '30px'
        break
      case 10:
        boxWidth = '27px'
        break
      case 11:
        boxWidth = '25px'
        break
      case 12:
        boxWidth = '24px'
        break
      case 13:
        boxWidth = '23px'
        break
      case 14:
        boxWidth = '22px'
        break
      case 15:
        boxWidth = '21px'
        break
      case 16:
        boxWidth = '20px'
        break
      default:
        boxWidth = ''
    }
    this.setState({gridSize: boxWidth})
  }

  setAterInterval = () => {
    const {gameLevel, clickedGridItem, randomArray} = this.state
    const time = 1000 * (gameLevel + 2)
    const inteval2 = setInterval(() => {
      clearInterval(inteval2)
      if (clickedGridItem.length !== randomArray.length) {
        this.setState({isPlaying: false})
      }
    }, time)
  }

  setinterval = () => {
    const {gameLevel} = this.state
    const time = 1000 * (gameLevel + 2)
    console.log(time)
    const inteval = setInterval(() => {
      this.setState({isIntevalStart: false})
      clearInterval(inteval)
      this.setAterInterval()
    }, time)
  }

  getBoxesArray = () => {
    const {gameLevel} = this.state
    if (gameLevel === 16) {
      this.setState({isPlaying: false})
    }
    const N = gameLevel + 2
    const newBoxesArray = []
    const newRandomArray = []
    const noOfBoxes = N * N
    for (let i = 0; i < noOfBoxes; i += 1) {
      newBoxesArray.push({id: i, wrongClicked: false, isClicked: false})
      const l = newRandomArray.length
      const randomNum = Math.floor(Math.random() * noOfBoxes)
      if (l < N && !newRandomArray.includes(randomNum)) {
        newRandomArray.push(randomNum)
      }
    }
    this.setState({boxesArray: newBoxesArray, randomArray: newRandomArray})
  }

  onClickShowModel = () => {
    this.setState(prevState => ({showModel: !prevState.showModel}))
  }

  updateDetails = () => {
    this.setinterval()
    this.getGridSize()
    this.getBoxesArray()
  }

  clikingGrid = id => {
    const {randomArray, boxesArray, clickedGridItem, gameLevel} = this.state
    const isNumberIncludes = randomArray.includes(id)
    let newBoxesArray = []
    clickedGridItem.push(id)
    if (isNumberIncludes) {
      newBoxesArray = boxesArray.map(obj =>
        obj.id === id ? {...obj, isClicked: true} : obj,
      )
    } else {
      newBoxesArray = boxesArray.map(obj =>
        obj.id === id ? {...obj, isClicked: true, wrongClicked: true} : obj,
      )
    }
    if (isNumberIncludes && clickedGridItem.length === randomArray.length) {
      this.setState(
        prevState => ({
          gameLevel: prevState.gameLevel + 1,
          isIntevalStart: true,
          clickedGridItem: [],
          randomArray: [],
        }),
        this.updateDetails,
      )
    } else {
      this.setState({boxesArray: newBoxesArray})
    }
  }

  clickedWrongGrid = () => {
    this.setState({isPlaying: false})
  }

  renderPlayingView = () => {
    const {
      gameLevel,
      showModel,
      boxesArray,
      gridSize,
      isIntevalStart,
      randomArray,
    } = this.state
    return (
      <div className="mm-container1">
        <div>
          <Link to="/memory-matrix">
            <div className="mm-container1">
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
              rules={memoryRuleSet1}
            />
          </div>
        </div>
        <div>
          <h1>Memory Matrix</h1>
          <p>Level - {gameLevel}</p>
          <ul className="ul">
            {boxesArray.map(each => (
              <MemoryMatrixGridItem
                eachItem={each}
                key={each.id}
                gridSize={gridSize}
                isIntevalStart={isIntevalStart}
                randomArray={randomArray}
                clikingGrid={this.clikingGrid}
                clickedWrongGrid={this.clickedWrongGrid}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  playAgain = () => {
    this.setState(
      {
        isPlaying: true,
        gameLevel: 1,
        boxesArray: [],
        randomArray: [],
        isIntevalStart: true,
        showModel: false,
        gridSize: '100px',
        clickedGridItem: [],
        gameStarted: false,
      },
      this.updateDetails,
    )
  }

  renderResultView = () => {
    const {gameLevel} = this.state
    return (
      <div>
        <MemoryMatrixResult gameLevel={gameLevel} playAgain={this.playAgain} />
      </div>
    )
  }

  render() {
    const {isPlaying} = this.state
    return (
      <div className="mm-container">
        {isPlaying ? this.renderPlayingView() : this.renderResultView()}
      </div>
    )
  }
}
export default MemoryMatrixGameHome
