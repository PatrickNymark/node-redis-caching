import React, { Component } from 'react'
import { bookService } from '../../services';
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
      errors: {}
    }
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
    };

    bookService.createBook(bookData).then(response => {
      history.push('/books')
    }).catch(err => {
      this.setState({
      errors: err
    })})
  }

  render() {
    console.log(this.state)
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
                <input 
                  name="author" 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter author id"
                  onChange={this.handleChange}
                />
              </div> 
            </div>
          </div>
          <button className="mt-2 btn btn-block form-btn">Submit</button>
        </form>
      </div>
    )
  }
}
