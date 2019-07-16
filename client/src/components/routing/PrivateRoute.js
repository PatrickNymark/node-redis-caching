import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, roles, ...rest }) => (
    <Route {...rest} render={props => {
        // check for auth
        if(!auth.isAuthenticated) {
            return <Redirect to="/login" />
        } 

        // is authenticated
        return <Component {...props} />
    }} />
)

function mapStateToProps(state) {
    return {
        auth: state.authentication
    }
}

const connectedPrivateRoute = withRouter(connect(mapStateToProps)(PrivateRoute));
export { connectedPrivateRoute as PrivateRoute };
