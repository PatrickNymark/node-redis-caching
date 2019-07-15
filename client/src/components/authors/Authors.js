import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { authorActions } from '../../actions';
import './style.css';

class Authors extends Component {
  componentWillMount() {
    this.props.dispatch(authorActions.getAllAuthors());
  }

  render() {
    const { authors, loading } = this.props;

    return (
      <div className="container text-center">
        <h1 className="mt-5 mb-5">Authors</h1>
        {loading && <img className="spinner" src={require('../images/Spinner.svg')} alt=""></img>}
        {!loading && <div className="row mx-md-n5">
          {authors.map(author => {
            return (
              <div className="col-4" key={author._id}>
                <div className="card card-authors">
                  <div className="card-body">
                    <h5 className="card-title">First Name: {author.firstName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Last Name: {author.lastName}</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui non illo ipsum dolorem voluptatibus aliquam itaque sequi dolor, laudantium corporis?</p>
                    <Link to="#" className="card-link">See author</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div> }
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { loading, authors, errors } = state.authors;
  return {
      loading,
      authors,
      errors
  };
}

const connectedAuthors = connect(mapStateToProps)(Authors);
export { connectedAuthors as Authors }; 