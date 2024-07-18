import './index.css'

const EmojiCardItem = props => {
  const {details, ClikingImageItem} = props
  const {id, emojiName, emojiUrl} = details
  const onClikingImageItem = () => {
    ClikingImageItem(id)
  }
  return (
    <li className="emoji-item">
      <button onClick={onClikingImageItem}>
        <img src={emojiUrl} alt={emojiName} className="emoji-item-img" />
      </button>
    </li>
  )
}
export default EmojiCardItem
