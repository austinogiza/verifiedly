import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import { GlobalStyles } from './styles/GlobalStyles'

const App = () => {
  return (
<>
<Router>
  <GlobalStyles/>
<Switch>

<Route path='/' exact component={Home}/>
</Switch>
</Router>
</>
  )
}

export default App
