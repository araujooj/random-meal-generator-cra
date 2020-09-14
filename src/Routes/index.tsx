import React from 'react';
import { Switch , Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Meal from '../Pages/Meal'

const Routes: React.FC = () => {
  return (
    <Switch>
    <Route exact path = "/" component = {Home}/>
    <Route path = "/meal" component = {Meal}/>
    </Switch>
  )
}

export default Routes;