import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AuthUser from '../pages/Auth/User'
import Survey from '../components/Survey'

export let routes = (
  <Switch>
    <Route path="/" exact render={() => <HomePage />} />
    <Route path="/login" exact render={() => <AuthUser />} />
    {/* Testing the survey component */}
    <Route path="/survey" exact render={() => <Survey />} />
  </Switch>
)
