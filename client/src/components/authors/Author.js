import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { authorService } from '../../services';

class Author extends Component {
  state = {
    author: {},
    loading: true
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    authorService.getAuthorById(id).then(author => {
      this.setState({
        author,
        loading: false
      })
    })
  }

  render() {
    const { author, loading } = this.state; 
    return (
      <div className="container">
        <h1 className="mt-5 mb-5 text-center">Author</h1>
        {loading && <div className="text-center">
          <img className="spinner" src={require('../images/Spinner.svg')} alt=""/>
        </div> }
        {!loading && <div className="card card-book">
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{author.firstName + ' ' + author.lastName}</h6>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui non illo ipsum dolorem voluptatibus aliquam itaque sequi dolor, laudantium corporis?</p>
          </div>
        </div> }
        <Link to="/authors" className="card-link">&larr; Go Back</Link>
      </div>
    )
  }
}

export default Author;