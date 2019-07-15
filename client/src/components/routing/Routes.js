import React from 'react'
import { Login } from '../auth/Login';
import Register from '../auth/Register';
import { Books } from '../books/Books';
import { Search } from '../search/Search';
import { PrivateRoute } from './PrivateRoute';
import Dashboard from '../Dashboard';
import { Authors } from '../authors/Authors';
import Book from '../books/Book';

const Routes = ({ Route }) => {
  return (
    <div>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/book/:id" component={Book} />
      <Route exact path="/search" component={Search} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/authors" component={Authors} />
    </div>

  )
}

export default Routes;