import React from 'react'
import { Login } from '../auth/Login';
import Register from '../auth/Register';
import { Books } from '../Books';
import { Search } from '../Search';
import { PrivateRoute } from './PrivateRoute';
import Dashboard from '../Dashboard';
import Authors from '../Authors';

const Routes = ({ Route }) => {
  return (
    <div>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/search" component={Search} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/authors" component={Authors} />
    </div>

  )
}

export default Routes;