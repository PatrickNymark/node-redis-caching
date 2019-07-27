import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bookActions } from '../../actions';
import { bookService } from '../../services';
import { Link } from 'react-router-dom';
import './style.css';
import { Search } from '../search/Search';

export default class Books extends Component {
  componentWillMount() {
    this.props.dispatch(bookActions.getAllBooks());
  }

  handleDelete = (id) => {
    bookService.deleteBook(id).then(book => {
      window.location.reload();
    })
  }

  render() {
    const { loading, books, isAuthenticated } = this.props;
    return (
      <div className="books-page">
        <div className="header-container text-center">
          <h1 className="mb-5 books-header">Books</h1>
        </div>
        <div className="container text-center">
          <Search searchAction={bookActions.searchBooks} />
          {loading && <img className="spinner" src={require('../images/Spinner.svg')} alt=""/> }
          {!loading && <div className="row mx-md-n5">
            {books.length === 0 && <div className="container">
              <h5 className="text-center mt-2">No books found</h5>
            </div> } 
            {books.map(book => {
              return (
                <div className="col-4" key={book._id}>
                  <div className="card card-book">
                    {isAuthenticated && 
                        <button onClick={() => this.handleDelete(book._id)} className="delete-book">DELETE</button>
                    }
                    <img src={book.image} class="card-img-top" alt="..."></img>
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Pages: {book.pages}</h6>
                      <div>
                        <Link to={`/book/${book._id}`} className="card-link">See Book</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div> }
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { loading, books, errors } = state.books;
  const { isAuthenticated } = state.authentication;
  return {
      loading,
      books,
      errors,
      isAuthenticated
  };
}

const connectedBooks = connect(mapStateToProps)(Books);
export { connectedBooks as Books }; 