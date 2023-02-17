import './index.css'

const Browseritem = props => {
  const {historyList, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-items">
      <div className="history-container">
        <div className="time-con">
          <p>{timeAccessed}</p>
        </div>
        <div className="middle-con">
          <img src={logoUrl} className="logo-image" alt="domain logo" />
          <p className="title-para">{title}</p>
          <p>{domainUrl}</p>
        </div>
        <div className="delete-con">
          <button
            type="button"
            className="button"
            data-testid="delete"
            onClick={onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-image"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default Browseritem
