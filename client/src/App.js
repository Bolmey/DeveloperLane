import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

import Bundles from './components/bundles/Bundles';
import Chairs from './components/chairs/Chair';
import Computers from './components/computers/Computer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Monitor from './components/monitor/Monitor';
import Peripherals from './components/peripherals/Peripherals';
import Navbar from './components/navBar/Navbar'

function App() {

  const [user, setUser] = useState({})
  const context = { user, setUser }

  useEffect(() => {
    console.log("app mounted")
    actions.getUser().then(res => {
      setUser(res.data)
    })

  }, [])

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('token')
  }
  return (
    <div className="App">

      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chairs" component={Chairs} />
        <Route exact path="/computers" component={Computers} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/monitor" component={Monitor} />
        <Route exact path="/peripherals" component={Peripherals} />
        <Route exact path="/bundles" component={Bundles} />
        {/* Erase and put navbar on every page */}
        <Route exact path="/navbar" component={Navbar} />
      </Switch>

    </div>
  );
}

export default App;
