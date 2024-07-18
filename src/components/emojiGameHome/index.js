import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import './index.css'
import EmojiCardItem from '../EmojiCardItem'
import EmojiResult from '../EmojiResult'
import RulesModel from '../RulesModel'
import {emojiRulesSet} from '../AllGameRules'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class emojiGameHome extends Component {
  state = {
    isPlaying: true,
    topScore: 0,
    suffledemojisList: emojisList,
    score: 0,
    clickedEmojis: [],
    showModel: false,
  }

  componentDidMount() {
    this.getEmojiTopScore()
    this.suffledEmojiList()
  }

  suffledEmojiList = () => {
    const {suffledemojisList} = this.state
    const suffledList = suffledemojisList.sort(() => Math.random() - 0.5)
    this.setState({suffledemojisList: suffledList})
  }

  getEmojiTopScore = () => {
    const score = localStorage.getItem('emojiTopScore')
    if (score === null) {
      this.setState({topScore: 0})
    } else {
      this.setState({topScore: score})
    }
  }

  onClikingImageItem = id => {
    const {clickedEmojis, score} = this.state
    const imojiItdIsIncludes = clickedEmojis.includes(id)
    if (!imojiItdIsIncludes) {
      if (score === 11) {
        const localscore = localStorage.getItem('emojiTopScore')
        if (localscore === null || localscore <= score) {
          localStorage.setItem('emojiTopScore', 12)
          this.setState({isPlaying: false, topScore: 12, score: 12})
        } else {
          this.setState(
            prevState => ({
              clickedEmojis: [...prevState.clickedEmojis, id],
              score: prevState.score + 1,
              isPlaying: false,
            }),
            this.suffledEmojiList,
          )
        }
      } else {
        this.setState(
          prevState => ({
            clickedEmojis: [...prevState.clickedEmojis, id],
            score: prevState.score + 1,
          }),
          this.suffledEmojiList,
        )
      }
    } else {
      const localscore = localStorage.getItem('emojiTopScore')
      if (localscore === null || localscore < score) {
        localStorage.setItem('emojiTopScore', score)
        this.setState({isPlaying: false, topScore: score})
      } else {
        this.setState({isPlaying: false})
      }
    }
  }

  onClickShowModel = () => {
    this.setState(prevState => ({showModel: !prevState.showModel}))
  }

  renderPlaying = () => {
    const {suffledemojisList, showModel} = this.state
    return (
      <div className="emojiGameHome-gamming-container">
        <div className="back-rules-container">
          <Link to="/emoji-game" className="link">
            <div className="emojiGameHome-back">
              <BiArrowBack className="back-arrow" />
              <p className="gaming-back">Back</p>
            </div>
          </Link>
          <div>
            <button
              onClick={this.onClickShowModel}
              className="rules-btn"
              type="button"
            >
              Rules
            </button>
            <RulesModel
              show={showModel}
              clickcloseModel={this.onClickShowModel}
              rules={emojiRulesSet}
            />
          </div>
        </div>
        <ul className="emoji-ul">
          {suffledemojisList.map(each => (
            <EmojiCardItem
              key={each.id}
              details={each}
              ClikingImageItem={this.onClikingImageItem}
            />
          ))}
        </ul>
      </div>
    )
  }

  onclickingPlayAgain = () => {
    this.setState({
      isPlaying: true,
      score: 0,
      clickedEmojis: [],
    })
  }

  renderResultCard = () => {
    const {score} = this.state
    return (
      <div>
        <EmojiResult
          score={score}
          clickingPlayAgain={this.onclickingPlayAgain}
        />
      </div>
    )
  }

  render() {
    const {score, topScore, isPlaying} = this.state
    return (
      <div className="emojiGameHome-bg-container">
        <div className="emojiGameHome-headerImg">
          <div className="emojiGameHome-logo-co">
            <img
              src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1710237234/wink_1_ipcfyz.png"
              className="header-logo-img"
              alt="emoji logo"
            />
            <h1 className="header-text">Emoji Game</h1>
          </div>
          {isPlaying && (
            <div className="header-score-container">
              <p className="Score-text">Top Score: {topScore}</p>
              <p className="Score-text">Score: {score}</p>
            </div>
          )}
        </div>
        {isPlaying ? this.renderPlaying() : this.renderResultCard()}
      </div>
    )
  }
}
export default emojiGameHome
