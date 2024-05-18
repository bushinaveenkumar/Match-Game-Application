import {Component} from 'react'
import TabItem from './TabItem'
import ThumbnailItem from './ThumbnailItem'
import './index.css'

class GameInterface extends Component {
  constructor() {
    super()
    this.state = {
      activeTab: 'FRUIT',
      activeThumbobjindex: 0,
    }
  }

  componentDidMount() {
    this.clearIntervalId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.clearIntervalId)
  }

  tick = () => {
    const {decreasetime} = this.props
    decreasetime()
  }

  showthumbnailwithId = id => {
    return this.setState({activeTab: id})
  }

  generaterandomMatchImage = () => {
    const {imagesList} = this.props
    const randomnum = Math.ceil(Math.random() * (imagesList.length - 1))
    this.setState({activeThumbobjindex: randomnum})
  }

  isMatched = id => {
    const {activeThumbobjindex} = this.state
    const {increaseScore, changeGameMode, imagesList} = this.props

    if (imagesList[activeThumbobjindex].id === id) {
      increaseScore()
      this.generaterandomMatchImage()
    } else {
      changeGameMode()
    }
  }

  render() {
    const {activeTab, activeThumbobjindex} = this.state

    const {tabsList, imagesList} = this.props

    const filteredthumbnailsList = imagesList.filter(
      eachthumbnail => eachthumbnail.category === activeTab,
    )

    return (
      <div className="gi-bg">
        <div className="matchImgCont">
          <img
            src={imagesList[activeThumbobjindex].imageUrl}
            alt="match"
            className="matchImg"
          />
        </div>
        <ul className="tabsCont">
          {tabsList.map(eachTabobj => {
            const tabid = eachTabobj.tabId
            return (
              <TabItem
                key={tabid}
                eachTabobj={eachTabobj}
                showthumbnailwithId={this.showthumbnailwithId}
                activeTab={activeTab}
              />
            )
          })}
        </ul>

        <ul className="thumbnailscont">
          {filteredthumbnailsList.map(eachthumb => (
            <ThumbnailItem
              key={eachthumb.id}
              eachthumb={eachthumb}
              isMatched={this.isMatched}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GameInterface
