import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/Navbar';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Alert from './components/Alert/Alert';

import Computer from './components/computers/Computer';
import Monitor from './components/monitor/Monitor';
import Peripherals from './components/peripherals/Peripherals';
// import Computer from './components/computers/Computer';
// import Computer from './components/computers/Computer';
// import Computer from './components/computers/Computer';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken.js';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Fragment className='App'>
        <NavBar />
        <Route exact path='/' component={Home} />
        <section className='ccontainer'>
          <Alert />
          <Switch>
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/peripherals' component={Peripherals} />
            <Route exact path='/monitors' component={Monitor} />
            {/* <Route exact path='/chairs' component={Chair} />
            <Route exact path='/bundles' component={Bundles} /> */}
            <Route exact path='/computers' component={Computer} />
          </Switch>
        </section>
      </Fragment>
    </Provider>
  );
};

export default App;
