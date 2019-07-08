import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" class="navbar-brand" href="#">Redis Caching</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" class="nav-link">Home <span class="sr-only">(current)</span></Link>
            </li>
              <li class="nav-item">
                <Link  to="/books" class="nav-link">Books</Link>
              </li> 
              <li class="nav-item">
                <Link to="/login" class="nav-link">Login</Link> 
              </li>
              <li class="nav-item">
                <Link to="/register" class="nav-link">Register</Link> 
              </li>
          </ul>
        </div>
      </nav>
    )
  }
}
