import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react'

import Bundles from './components/bundles/Bundles';
import Chairs from './components/chairs/Chair';
import Computers from './components/computers/Computer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Monitor from './components/monitor/Monitor';
import Peripherals from './components/peripherals/Peripherals';
import NavBar from './components/navBar/Navbar'

import actions from './api'
import TheContext from './TheContext'

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

      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chairs" component={Chairs} />
        <Route exact path="/computers" component={Computers} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/monitor" component={Monitor} />
        <Route exact path="/peripherals" component={Peripherals} />
        <Route exact path="/bundles" component={Bundles} />
        {/* Erase and put navbar on every page */}
        <Route exact path="/navbar" component={NavBar} />
      </Switch>

    </div>
  );
}


// return (
//   <TheContext.Provider value={context}>
//     <div className="App">
//       <h1>Hacker Blog </h1>
//       {user?.name && (
//         <div>
//           <p>Welcome {user?.name}</p>
//           <button onClick={handleLogout}>Log out</button>
//         </div>
//       )}

//       < nav >
//         <Link to='/'>Home</Link>
//         <Link to='/blog'>Blog</Link>
//         <Link to='/profile'>Profile</Link>

//       </nav>

//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/blog" component={Blog} />
//         <Route exact path="/profile" component={Profile} />

//       </Switch>

//     </div>
//   </TheContext.Provider >
// );


export default App;
