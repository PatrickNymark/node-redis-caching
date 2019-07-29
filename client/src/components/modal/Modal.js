import React, { Component } from 'react'
import './style.css';

export default class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  handleModal = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.handleModal} className="btn dashboard-button">{this.props.btnText}</button>
        {open &&  
          <div className={open ? 'modal' : 'modal-close'}>
            <div className="container">
              <div className={open ? 'modal-open' : 'modal-close'}>
                <span onClick={this.handleModal} className="close">&times;</span>
                {this.props.children}
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

