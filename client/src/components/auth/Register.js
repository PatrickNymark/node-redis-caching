import React, { Component } from 'react';
import { authService } from '../../services';
import { history } from '../../helpers';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

    }

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value 
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            authService.register(email, password).then(user => {
              history.push('/login')
            }).catch(err => {
              this.setState({
                errors: err
              })
            })
        }
    }

    render() {
        const { loading, errors } = this.props;
        const { email, password, submitted } = this.state;
        return (
            <div className="container">
                <div className="login-form-wrapper">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <h2 className="text-center">REGISTER</h2>
                        {errors && <div class="alert alert-danger text-center" role="alert">
                            {errors}
                        </div>}
                        <div className="form-group">
                            <label className="float-left" htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="email" 
                                value={email} 
                                onChange={this.handleChange} 
                            />
                        </div>
                        <div className="form-group">
                            <label className="float-left" htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                name="password" 
                                value={password} 
                                onChange={this.handleChange} 
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block">Register</button>
                            {loading &&
                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loader" />
                            }
                        </div>
                    </form>
                </div> 
            </div>
        );
    }
}

export default Register;