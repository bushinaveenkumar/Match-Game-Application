import './index.css'

const ThumbnailItem = props => {
  const {eachthumb, isMatched} = props
  const onClickthumbImg = () => isMatched(eachthumb.id)

  return (
    <li>
      <button className="thumbnail-button" onClick={onClickthumbImg}>
        <img
          src={eachthumb.thumbnailUrl}
          alt="thumbnail"
          className="thumbnailImg"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
