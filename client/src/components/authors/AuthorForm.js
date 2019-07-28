import React, { Component } from 'react'
import { authorService } from '../../services';
import { history } from '../../helpers';
import './style.css';

export default class AuthorForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: 0
    }
  }

  handleChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value 
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const authorData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };

    authorService.createAuthor(authorData).then(author => {
      history.push('/authors')
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="container author-form">
        <h1>Add Author</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col-6">
              <div className="form-group">
                <label className="float-left">First Name</label>
                <input 
                  name="firstName" 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter first name"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label className="float-left">Last Name</label>
                <input 
                  name="lastName" 
                  type="text" 
                  className="form-control" 
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <button className="mt-2 btn btn-block form-btn">Submit</button>
        </form>
      </div>
    )
  }
}
