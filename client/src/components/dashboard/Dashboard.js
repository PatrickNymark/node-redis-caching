import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './style.css';
import Modal from '../modal/Modal';
import BookForm from '../books/BookForm';
import AuthorForm from '../authors/AuthorForm';

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false
    }
  }

  handleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

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
                <Modal btnText="Create Book" open={this.state.modal} handleModal={this.handleModal}>
                  <BookForm />
                </Modal>
              </div>
            </div>
            <div className="col-6 text-center">
              <div className="dashboard-card">
                <h4 className="text-white mb-4">AUTHORS</h4>
                <Modal btnText="Create Author" open={this.state.modal} handleModal={this.handleModal}>
                  <AuthorForm />
                </Modal> 
              </div>   
            </div>
          </div>
        </div>
      </div>
    )
  }
}
