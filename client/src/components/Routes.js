import React from 'react'
import { Login } from './Login';
import Register from './Register';

const Routes = ({ Route }) => {
  return (
    <div>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </div>

  )
}

export default Routes;