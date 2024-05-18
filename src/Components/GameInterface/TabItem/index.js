import './index.css'

const TabItem = props => {
  const {eachTabobj, showthumbnailwithId, activeTab} = props
  const {tabId, displayText} = eachTabobj

  const onTabClick = () => {
    return showthumbnailwithId(tabId)
  }
  let activeTabClassName = ''

  tabId === activeTab
    ? (activeTabClassName = 'activeTab')
    : (activeTabClassName = 'tab_button')

  return (
    <li key={eachTabobj.tabId}>
      <button type="button" className={activeTabClassName} onClick={onTabClick}>
        {eachTabobj.displayText}
      </button>
    </li>
  )
}

export default TabItem
