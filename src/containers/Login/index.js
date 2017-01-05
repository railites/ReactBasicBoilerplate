import React, { Component } from 'react'
import { FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router'

class Login extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5 className="form-signin-heading">Please Enter your details</h5>
          <FormControl
            type="text"
            placeholder="Email/Phone"
            onChange={e => this.setState({email: e.target.value})}
          />

          <FormControl
            type="password"
            placeholder="Password"
            onChange={e => this.setState({password: e.target.value})}
          />

          <Button
            bsStyle="warning"
            className="btn btn-orange"
            type="submit">
            Login <i className="fa fa-angle-double-right"></i>
          </Button>
        </form>
        Don't have Account? <Link to="/registration">Create Account?</Link>
      </div>
    )
  }
}

export default Login
