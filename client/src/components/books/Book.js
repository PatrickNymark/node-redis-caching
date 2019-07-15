import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Book extends Component {
  state = {
    book: {},
    loading: true
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/books/${id}`).then(response => {
      this.setState({
        book: response.data,
        loading: false
      })
    })
  }
  render() {
    const { book, loading } = this.state; 
    return (
      <div className="container">
        <h1 className="mt-5 mb-5 text-center">Book</h1>
        {loading && <div className="text-center">
          <img className="spinner" src={require('../images/Spinner.svg')} alt=""/>
        </div> }
        {!loading && <div className="card card-book">
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{book.title}</h6>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui non illo ipsum dolorem voluptatibus aliquam itaque sequi dolor, laudantium corporis?</p>
          </div>
        </div> }
        <Link to="/books" className="d-block">&larr; Go Back</Link>
      </div>
    )
  }
}

export default Book;
