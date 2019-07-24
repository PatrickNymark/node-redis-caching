import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './style.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-page">
        <div className="dashboard-container">
          <h1 className="mb-5 text-center dashboard-header">Dashboard</h1>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-6 text-center">
              <div className="dashboard-card">
                <h4 className="text-white mb-4">BOOKS</h4>
                <Link to="#" className="btn dashboard-button">Create Book</Link>
              </div>
            </div>
            <div className="col-6 text-center">
              <div className="dashboard-card">
                <h4 className="text-white mb-4">AUTHORS</h4>
                <Link to="#" className="btn dashboard-button">Create Author</Link>
              </div>   
            </div>
          </div>
        </div>
      </div>
    )
  }
}
