import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ClientDashboard from './ClientDashboard';
import AdminDashboard from './AdminDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/client-dashboard" component={ClientDashboard} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        {/* Add routes for other pages in your application */}
        <Route exact path="/" component={SignIn} /> {/* Default to Sign In */}
      </Switch>
    </Router>
  );
}

export default App;
