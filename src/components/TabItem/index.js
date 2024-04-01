// Write your code here
import './index.css'

const TabItem = props => {
  const {id, tabName, tabSelected, isActive} = props
  const isActiveClass = isActive ? 'active' : ''

  const selectedTab = () => {
    tabSelected(id)
  }

  return (
    <li>
      <button
        onClick={selectedTab}
        type="button"
        key={id}
        id={id}
        className={`button ${isActiveClass}`}
      >
        {tabName}
      </button>
      <hr className={`line ${isActiveClass}`} />
    </li>
  )
}

export default TabItem
