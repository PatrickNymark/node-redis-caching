import React from 'react'
import { Login } from '../auth/Login';
import Register from '../auth/Register';
import { Books } from '../books/Books';
import { Search } from '../search/Search';
import { PrivateRoute } from './PrivateRoute';
import Dashboard from '../dashboard/Dashboard';
import { Authors } from '../authors/Authors';
import Book from '../books/Book';
import Author from '../authors/Author';

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
      <PrivateRoute exact path="/author/:id"  component={Author} />
    </div>

  )
}

export default Routes;