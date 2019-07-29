import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { authorActions } from '../../actions';
import { authorService } from '../../services';
import './style.css';
import { Search } from '../search/Search';

class Authors extends Component {
  componentWillMount() {
    this.props.dispatch(authorActions.getAllAuthors());
  }

  handleDelete = (id) => {
    authorService.deleteAuthor(id).then(author => {
      window.location.reload();
    })
  }

  render() {
    const { authors, loading, isAuthenticated } = this.props;

    return (
      <div className="authors-page">
        <div className="header-container text-center">
          <h1 className="authors-header">Authors</h1>
        </div>

        <div className="container text-center">
          <Search searchAction={authorActions.searchAuthors} />
          {loading && <img className="spinner" src={require('../images/Spinner.svg')} alt=""></img>}
          {!loading && <div className="row mx-md-n5">
            {authors.map(author => {
              return (
                <div className="col-4" key={author._id}>
                  <div className="card card-authors">
                    <div className="card-body">
                      {isAuthenticated && 
                        <button onClick={() => this.handleDelete(author._id)} className="delete-book">DELETE</button>
                      }
                      <h5 className="card-title">First Name: {author.firstName}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Last Name: {author.lastName}</h6>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui non illo ipsum dolorem voluptatibus aliquam itaque sequi dolor, laudantium corporis?</p>
                      <Link to={`/author/${author._id}`} className="card-link">See author</Link>
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
  const { loading, authors, errors } = state.authors;
  const { isAuthenticated } = state.authentication;
  return {
      loading,
      authors,
      errors,
      isAuthenticated
  };
}

const connectedAuthors = connect(mapStateToProps)(Authors);
export { connectedAuthors as Authors }; 