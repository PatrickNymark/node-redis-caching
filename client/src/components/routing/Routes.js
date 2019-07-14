import React from 'react'
import { Login } from '../auth/Login';
import Register from '../auth/Register';
import { Books } from '../Books';
import { Search } from '../Search';

const Routes = ({ Route }) => {
  return (
    <div>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/search" component={Search} />
    </div>

  )
}

export default Routes;