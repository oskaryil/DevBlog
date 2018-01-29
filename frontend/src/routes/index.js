import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import NewArticle from './NewArticle'
import Profile from './Profile'
import Post from './Post'
import NotFound from './PageNotFound'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/new-article" component={NewArticle} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/@:username" component={Profile} />
      <Route exact patg="/@:username/article/:id" component={Post} />
      <Route exact path="/404" component={NotFound} />
    </div>
  </Router>
)

export default (App)
