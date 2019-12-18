import React from 'react'
import { Route, Switch } from 'react-router-dom';
import DashBoard from './components/DashBoard'
import Wizard from './components/Wizard'


export default (
    <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/Wizard" component={Wizard} />
    </Switch>
)


