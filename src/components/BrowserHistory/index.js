import './index.css'

const BrowserHistory = props => {
  const {eachItem, deleteListItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  function onDeleteItem() {
    deleteListItem(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <div className="item-content-container">
        <img src={logoUrl} className="item-logo" alt="domain logo" />
        <div className="text-container">
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button type="button" id="delete" onClick={onDeleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
