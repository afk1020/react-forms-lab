import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:'',
      password:''
    };
  }
  handleChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handleChange2 = event => {
    this.setState({
      password:event.target.value
    })
  }
 handleSubmit = event => {
   event.preventDefault ();

   if(!this.state.username || !this.state.password) 
    return 
      this.props.handleLogin(this.state)

 }
  render() {
    return (
      <form onSubmit ={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handleChange} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleChange2} id="password" name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
