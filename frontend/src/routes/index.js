import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import NewArticle from './NewArticle'
import Profile from './Profile'
import PostLayout from './PostLayout'
import NotFound from './PageNotFound'
import Settings from './Settings'

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new-article" component={NewArticle} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/@:username" component={Profile} />
        <Route exact path="/@:username/:id" component={PostLayout} />
        <Route exact path="/settings" component={Settings} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default (App)
