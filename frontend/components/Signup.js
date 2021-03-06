import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Form from './styles/Form'
import Error from './ErrorMessage'

const SIGNUP_MUTATION = gql`
mutation SIGNUP_MUTATION(
  $email: String!, 
  $name: String!, 
  $password: String!){
    signup(email: $email, name: $name, password: $password){
      id
      email
      password
    }
  }
`

class Signup extends Component {
  state = { 
    name: '',
    email: '',
    password: ''
  }
saveToState = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}
  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
      >
        {(signup, {error, loading}) => {
          return(
            <Form method="POST" 
                  onSubmit={async e => {
                    e.preventDefault()
                    const res = await signup();
                    this.SetState({ 
                      name: '',
                      email: '',
                      password: ''
                    })
                  }}
            >
              <fieldset>
                <h2> Sign up for an account</h2>
                <label htmlFor="email">
                  Email
                  <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.saveToState}></input>
                </label>
                <label htmlFor="name">
                  Name
                  <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.saveToState}></input>
                </label>
                <label htmlFor="password">
                  Password
                  <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.saveToState}></input>
                </label>
                <button type="submit">Sign Up</button>
              </fieldset>
            </Form>
          )
        }}
      </Mutation>
      )
    }
  }
  
  export default Signup 