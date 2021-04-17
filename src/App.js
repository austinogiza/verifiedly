import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import { GlobalStyles } from './styles/GlobalStyles'
import Layout from './container/Layout'
import ScrollRestore from  './components/ScrollRestore'
import Top from './components/Top'
const App = () => {
  return (
<>
<Router>
<Top/>
  <GlobalStyles/>
  <ScrollRestore/>
<Layout>

<Switch>

<Route path='/' exact component={Home}/>
</Switch>
</Layout>
</Router>
</>
  )
}

export default App
