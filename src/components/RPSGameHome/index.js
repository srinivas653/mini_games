import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import RulesModel from '../RulesModel'
import {rpsRulesSet1} from '../AllGameRules'
import RPSItem from '../RPSitem'
import './index.css'

const choicesList = [
  {
    id: 'rock',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'scissor',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'paper',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RPSGameHome extends Component {
  state = {
    showModel: false,
    score: 0,
    isPlaying: true,
    computerChoice:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    computerChoiceAlt: '',
    status: 'loss',
    playerChoice:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    playerChoiceAlt: '',
  }

  onClickShowModel = () => {
    this.setState(prevState => ({showModel: !prevState.showModel}))
  }

  onClickRPS = id => {
    const randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0 && id === 'paper') {
      this.setState({
        status: 'IT IS DRAW',
        computerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',

        playerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
        computerChoiceAlt: 'paper',
        playerChoiceAlt: 'paper',
        isPlaying: false,
        randomNum,
      })
    } else if (randomNum === 0 && id === 'scissor') {
      this.setState(prevState => ({
        status: 'YOU WON',
        computerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
        playerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
        computerChoiceAlt: 'paper',
        playerChoiceAlt: 'scissor',
        score: prevState.score + 1,
        isPlaying: false,
        randomNum,
      }))
    } else if (randomNum === 0 && id === 'rock') {
      this.setState(prevState => ({
        status: 'YOU LOSE',
        computerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
        playerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
        computerChoiceAlt: 'paper',
        playerChoiceAlt: 'rock',
        score: prevState.score - 1,
        isPlaying: false,
        randomNum,
      }))
    } else if (randomNum === 1 && id === 'scissor') {
      this.setState(prevState => ({
        status: 'IT IS DRAW',
        computerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
        playerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
        computerChoiceAlt: 'scissor',
        playerChoiceAlt: 'scissor',
        score: prevState.score,
        isPlaying: false,
        randomNum,
      }))
    } else if (randomNum === 1 && id === 'rock') {
      this.setState(prevState => ({
        status: 'YOU WON',
        computerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
        playerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
        computerChoiceAlt: 'scissor',
        playerChoiceAlt: 'rock',
        score: prevState.score + 1,
        isPlaying: false,
        randomNum,
      }))
    } else if (randomNum === 1 && id === 'paper') {
      this.setState(prevState => ({
        status: 'YOU LOSE',
        computerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
        playerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
        computerChoiceAlt: 'scissor',
        playerChoiceAlt: 'paper',
        score: prevState.score - 1,
        isPlaying: false,
        randomNum,
      }))
    } else if (randomNum === 2 && id === 'rock') {
      this.setState(prevState => ({
        status: 'IT IS DRAW',
        computerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
        playerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
        computerChoiceAlt: 'rock',
        playerChoiceAlt: 'rock',
        score: prevState.score,
        isPlaying: false,
        randomNum,
      }))
    } else if (randomNum === 2 && id === 'paper') {
      this.setState(prevState => ({
        status: 'YOU WON',
        computerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
        playerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
        computerChoiceAlt: 'rock',
        playerChoiceAlt: 'paper',
        score: prevState.score + 1,
        isPlaying: false,
        randomNum,
      }))
    } else if (randomNum === 2 && id === 'scissor') {
      this.setState(prevState => ({
        status: 'YOU LOSE',
        computerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
        playerChoice:
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
        computerChoiceAlt: 'rock',
        playerChoiceAlt: 'scissor',
        score: prevState.score - 1,
        isPlaying: false,
        randomNum,
      }))
    }
  }

  renderPlayingView = () => {
    const {showModel} = this.state
    return (
      <div>
        <Link to='/rock-paper-scissor'>
          <BiArrowBack className='arrow' />
          <button>Back</button>
        </Link>
        <button onClick={this.onClickShowModel} data-testid='close'>
          Rules
        </button>
        <RulesModel
          show={showModel}
          clickcloseModel={this.onClickShowModel}
          rules={rpsRulesSet1}
        />
        <h1>ROCK PAPER SCISSOR</h1>
        <h1>Let’s pick</h1>

        <div className='ul-items'>
          {choicesList.map(each => (
            <RPSItem each={each} id={each.id} clickingItem={this.onClickRPS} />
          ))}
        </div>
      </div>
    )
  }

  onClickPlayAgain = () => {
    this.setState({isPlaying: true})
  }

  renderResultView = () => {
    const {
      score,
      playerChoice,
      computerChoice,
      status,
      computerChoiceAlt,
      playerChoiceAlt,
    } = this.state
    return (
      <div>
        <h1>ROCK PAPER SCISSOR</h1>
        <div className='container1'>
          <div>
            <h1>Rock Paper Scissor</h1>
          </div>
          <div>
            {status === 'YOU WON' && (
              <img
                src='https://res.cloudinary.com/dssaftaaa/image/upload/v1720312071/Group_7618_1_ylkkgl.png'
                alt='won emoji'
              />
            )}
            {status === 'YOU LOSE' && (
              <img
                src='https://res.cloudinary.com/dssaftaaa/image/upload/v1720312310/Group_7618_2_vcbqo9.png'
                alt='lose emoji'
              />
            )}
            {status === 'IT IS DRAW' && (
              <img
                src='https://res.cloudinary.com/dssaftaaa/image/upload/v1720312379/Group_7618_3_w2ruk3.png'
                alt='draw emoji'
              />
            )}
          </div>
          <div>
            <p>Score</p>
            <p>{score}</p>
          </div>
        </div>
        <div className='container1'>
          <div>
            <p>you</p>
            <img src={playerChoice} className='image' alt={playerChoiceAlt} />
          </div>
          <div>
            {status === 'YOU WON' && (
              <img
                src='https://res.cloudinary.com/dssaftaaa/image/upload/v1720312758/Emoji_2_vvlluf.png'
                alt='Smiling face with star eyes'
              />
            )}
            {status === 'YOU LOSE' && (
              <img
                src='https://res.cloudinary.com/dssaftaaa/image/upload/v1720312903/Emoji_4_wgm57u.png'
                alt='Face without mouth'
              />
            )}
            {status === 'IT IS DRAW' && (
              <img
                src='https://res.cloudinary.com/dssaftaaa/image/upload/v1720312877/Emoji_3_jg0dbo.png'
                alt='Face without mouth'
              />
            )}
            <p>{status}</p>
            <button onClick={this.onClickPlayAgain} type='button'>
              Play Again
            </button>
          </div>
          <div>
            <p>Opponent</p>
            <img
              src={computerChoice}
              className='image'
              alt={computerChoiceAlt}
            />
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isPlaying} = this.state
    return (
      <div className='rps-game-home'>
        {isPlaying ? this.renderPlayingView() : this.renderResultView()}
      </div>
    )
  }
}
export default RPSGameHome
