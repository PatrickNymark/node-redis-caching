import React, { Component } from 'react'
import { bookService, authorService } from '../../services';
import { history } from '../../helpers';
import './style.css';

export default class BookForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      pages: 0,
      genre: '',
      author: '',
      image: '',
      errors: {},
      authors: []
    }
  }

  componentWillMount() {
    authorService.getAllAuthors(true).then(authors => {
      this.setState({
        authors
      })
    })
  }

  handleChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value 
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const bookData = {
      title: this.state.title,
      genre: this.state.genre,
      pages: this.state.pages,
      image: this.state.image,
      author: this.state.author
    };

    bookService.createBook(bookData).then(response => {
      history.push('/books')
    })
  }

  render() {
    return (
      <div className="container p-5">
        <h1>Add Book</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="float-left">Title</label>
            <input 
              name="title" 
              type="text" 
              className="form-control" 
              placeholder="Enter title"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-row">
            <div className="col-6">
              <div className="form-group">
                <label className="float-left">Image</label>
                <input 
                  name="image" 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter image url"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label className="float-left">Pages</label>
                <input 
                  name="pages" 
                  type="number" 
                  className="form-control" 
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-6">
              <div className="form-group">
                <label className="float-left">Genre</label>
                <input 
                  name="genre" 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter genre"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label className="float-left">Author</label>
                <select className="form-control" onChange={this.handleChange} value={this.state.author} name="author">
                  {this.state.authors.map(author => {
                    return <option key={author.id} value={author.id}>{author.name}</option>
                  })}
                </select>
              </div> 
            </div>
          </div>
          <button className="mt-2 btn btn-block form-btn">Submit</button>
        </form>
      </div>
    )
  }
}
