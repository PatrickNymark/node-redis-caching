import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookActions } from '../../actions';
import './style.css';

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ''
    }
  }

  handleChange = (e) => {
    const initialValue = e.target.value.length;
    this.setState({
       [e.target.name]: e.target.value 
    });

    if(this.state.search.length > 0 && this.state.search.length % 2 === 0) {
      this.handleSubmit(e);
    }

    if(initialValue < this.state.search.length) {
      if(this.state.search.length % 2 === 0 || initialValue === 0) {
        this.handleSubmit(e);
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { search } = this.state;
    this.props.dispatch(bookActions.searchBooks(search))  
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline pt-4 pb-4">
        <input onChange={this.handleChange} className="form-control search-input" name="search" type="text" placeholder="Enter search" />
        <button type="submit" className="ml-2 btn btn-small btn-primary search-button">Search</button>
      </form>
    )
  }
}


const connectedSearch = connect()(Search);
export { connectedSearch as Search }; 