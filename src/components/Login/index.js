// Write your JS code here
import {Component} from 'react'
class Login extends Component {
  makeApi = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const fetchedData = await fetch(url, options)
    const data = await fetchedData.json()
    console.log(data)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.makeApi}>
          <h1>Please Login</h1>
          <button type="submit">Login with Simple Creds</button>
        </form>
      </div>
    )
  }
}

export default Login
