import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

const initialPasswordList = []
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Password extends Component {
  state = {
    passwordList: initialPasswordList,
    isShowPassword: false,
    website: '',
    name: '',
    password: '',
    searchInput: '',
    count: 0,
  }

  onShowPassword = () => {
    this.setState(prevState => ({
      isShowPassword: !prevState.isShowPassword,
    }))
  }

  onWebisteInput = event => {
    this.setState({website: event.target.value})
  }

  onUsernameInput = event => {
    this.setState({name: event.target.value})
  }

  onPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  submitPassword = event => {
    event.preventDefault()
    const {name, password, website} = this.state
    const initialBackground =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newUserDetail = {
      id: uuidv4(),
      website,
      name,
      password,
      initialClassname: initialBackground,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newUserDetail],
      name: ' ',
      password: ' ',
      website: ' ',
      count: prevState.count + 1,
    }))
  }

  searchUsername = event => {
    this.setState({searchInput: event.target.value})
  }

  passwordDelete = id => {
    const {count} = this.state
    const {passwordList} = this.state
    const deletePassword = passwordList.filter(each => each.id !== id)
    this.setState({passwordList: deletePassword, count: count - 1})
  }

  render() {
    const {
      passwordList,
      isShowPassword,
      searchInput,
      count,
      name,
      website,
      password,
    } = this.state
    const searchResult = passwordList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="password-main-container">
        <div className="password-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              className="password-logo"
              alt="app logo"
            />
          </div>
          <div className="password-manager-container">
            <div className="password-detail-container">
              <h1 className="password-main-heading"> Add New Password </h1>
              <form onSubmit={this.submitPassword}>
                <div className="website-input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    className="website-logo"
                    alt=" website"
                  />
                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="website-input"
                    onChange={this.onWebisteInput}
                    value={website}
                  />
                </div>
                <div className="website-input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    className="website-logo"
                    alt="username"
                  />
                  <input
                    type="text"
                    placeholder="Enter username"
                    className="website-input"
                    onChange={this.onUsernameInput}
                    value={name}
                  />
                </div>
                <div className="website-input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    className="website-logo"
                    alt="password"
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="website-input"
                    onChange={this.onPasswordInput}
                    value={password}
                  />
                </div>
                <div className="password-btn">
                  <button className="password-button" type="submit">
                    {' '}
                    Add{' '}
                  </button>
                </div>
              </form>
            </div>
            <div className="passwd-lg">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                className="password-manager-logo"
                alt="password manager"
              />
            </div>
            <div className="passwd-sm">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                className="password-manager-logo"
                alt="password manager"
              />
            </div>
          </div>

          <div className="password-list-main-container">
            <div className="password-search-container">
              <div className="password-count-container">
                <h1 className="user-password-heading"> Your Passwords </h1>
                <div className="password-count">
                  <p> {count} </p>
                </div>
              </div>
              <div className="search-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  className="search-logo"
                  alt="search"
                />
                <input
                  type="text"
                  placeholder="search"
                  className="search-input"
                  onChange={this.searchUsername}
                  value={searchInput}
                />
              </div>
            </div>
            <hr />
            <div className="password-checkbox">
              <input type="checkbox" onClick={this.onShowPassword} />
              <p className="password-show"> show Passwords </p>
            </div>
            <ul className="password-list-container-ul">
              {searchResult.length === 0 ? (
                <div className="noPassword-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    className="no-password-image"
                    alt="no passwords"
                  />
                  <p className="noPassword-para"> No Password </p>
                </div>
              ) : (
                <div className="password-list-container">
                  {searchResult.map(each => (
                    <PasswordItem
                      passwordDetail={each}
                      key={each.id}
                      isCheckPassword={isShowPassword}
                      passwordDelete={this.passwordDelete}
                    />
                  ))}
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Password
