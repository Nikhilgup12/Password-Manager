import './index.css'

const PasswordItem = props => {
  const {passwordDetail, isCheckPassword, passwordDelete} = props
  const {website, name, password, initialClassname, id} = passwordDetail
  const letter = name.slice(0, 1)
  const onDeletePassword = () => {
    passwordDelete(id)
  }
  return (
    <li className="password-each-item">
      <div className={`password-letter ${initialClassname}`}>
        <p className="password-first-letter"> {letter} </p>
      </div>
      <div>
        <p className="password-website-name"> {website} </p>
        <p className="password-user-name"> {name} </p>
        {isCheckPassword ? (
          <p className="password-user-password"> {password} </p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            className="password-star-image"
            alt="stars"
          />
        )}
      </div>
      <button
        className="password-delete-btn"
        onClick={onDeletePassword}
        type="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete-logo"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default PasswordItem
