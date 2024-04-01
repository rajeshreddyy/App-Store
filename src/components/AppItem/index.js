// Write your code here
import './index.css'

const AppItem = props => {
  const {id, appImgUrl, appName} = props
  return (
    <li key={id} className="app-container">
      <img alt={appName} src={appImgUrl} className="app-img" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
