import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Author extends Component {
  state = {
    book: {}
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/books/${id}`).then(response => {
      this.setState({
        book: response.data
      })
    })
  }
  render() {
    const { book } = this.state; 
    return (
      <div className="container">
        <h1 className="mt-5 mb-5 text-center">Book</h1>
        <div className="card card-book">
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{book.title}</h6>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui non illo ipsum dolorem voluptatibus aliquam itaque sequi dolor, laudantium corporis?</p>
          </div>
        </div>
        <Link to="/books" className="card-link">&larr; Go Back</Link>

      </div>
    )
  }
}

export default Author;