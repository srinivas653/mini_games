import './index.css'

const RPSItem = props => {
  const {each, clickingItem} = props
  const {id, imageUrl} = each
  const onClickItem = () => {
    clickingItem(id)
  }
  let testid = ''
  if (id === 'rock') {
    testid = 'rockButton'
  } else if (id === 'paper') {
    testid = 'paperButton'
  } else if (id === 'scissor') {
    testid = 'scissorButton'
  }
  return (
    <button onClick={onClickItem} data-testid={testid} button>
      <img src={imageUrl} className="image" alt={id} />
    </button>
  )
}
export default RPSItem
