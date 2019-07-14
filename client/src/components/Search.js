import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookActions } from '../actions';

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ''
    }
  }

  handleChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value 
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { search } = this.state;
    this.props.dispatch(bookActions.searchBooks(search))  
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="search" type="text" placeholder="Enter search" />
        <button type="submit" className="btn btn-small btn-primary">Search</button>
      </form>
    )
  }
}


const connectedSearch = connect()(Search);
export { connectedSearch as Search }; 