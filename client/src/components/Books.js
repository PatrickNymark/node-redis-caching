import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bookActions } from '../actions';
import { Link } from 'react-router-dom';
import './style.css';
import { Search } from './Search';

export default class Books extends Component {
  componentWillMount() {
    this.props.dispatch(bookActions.getAllBooks());
  }

  render() {
    return (
      <div className="container text-center">
        <h1 className="mt-5 mb-5">BOOKS</h1>
        <Search />
        <div className="row mx-md-n5">
          {this.props.books.map(book => {
            return (
              <div className="col-4" key={book._id}>
                <div className="card card-book">
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Pages: {book.pages}</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui non illo ipsum dolorem voluptatibus aliquam itaque sequi dolor, laudantium corporis?</p>
                    <Link to="#" className="card-link">See Book</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { loading, books, errors } = state.books;
  return {
      loading,
      books,
      errors
  };
}

const connectedBooks = connect(mapStateToProps)(Books);
export { connectedBooks as Books }; 