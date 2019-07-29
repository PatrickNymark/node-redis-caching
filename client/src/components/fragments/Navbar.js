import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { authActions } from '../../actions';

class Navbar extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(authActions.logout());
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand" href="#">Redis Caching</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {!isAuthenticated && <li className="nav-item active">
              <Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
            </li>}
            {isAuthenticated && <li className="nav-item">
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
            </li>}
            <li className="nav-item">
              <Link to="/books" className="nav-link">Books</Link>
            </li> 
            {isAuthenticated && <li className="nav-item">
              <Link to="/authors" className="nav-link">Authors</Link>
            </li>}
            {!isAuthenticated && <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link> 
            </li>}
            {isAuthenticated && <li className="nav-item">
              <Link onClick={this.handleLogout} to="/" className="nav-link">Logout</Link> 
            </li>}
            {!isAuthenticated &&  <li className="nav-item">
              <Link to="/register" className="nav-link">Register</Link> 
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