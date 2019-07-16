import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { authActions } from '../actions';

class Navbar extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(authActions.logout());
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    console.log(this.props)
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" class="navbar-brand" href="#">Redis Caching</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {!isAuthenticated && <li class="nav-item active">
              <Link to="/" class="nav-link">Home<span class="sr-only">(current)</span></Link>
            </li>}
            {isAuthenticated && <li class="nav-item">
              <Link to="/dashboard" class="nav-link">Dashboard</Link>
            </li>}
            <li class="nav-item">
              <Link to="/books" class="nav-link">Books</Link>
            </li> 
            {isAuthenticated && <li class="nav-item">
              <Link to="/authors" class="nav-link">Authors</Link>
            </li>}
            {!isAuthenticated && <li class="nav-item">
              <Link to="/login" class="nav-link">Login</Link> 
            </li>}
            {isAuthenticated && <li class="nav-item">
              <Link onClick={this.handleLogout} to="/" class="nav-link">Logout</Link> 
            </li>}
            {!isAuthenticated &&  <li class="nav-item">
              <Link to="/register" class="nav-link">Register</Link> 
            </li>}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
      auth: state.authentication
  };
}

const connectedNavBar = connect(mapStateToProps)(Navbar);
export {connectedNavBar as Navbar};