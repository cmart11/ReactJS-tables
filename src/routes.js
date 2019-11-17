import React, { Component } from 'react'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'

import { Login, About, SingleEvent } from './components'

export default class Routes extends Component {

    componentDidMount() {
        //check if admin user is logged in
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/about" component={About} />
                <Route exact path="/event" component={SingleEvent} />
            </Switch>
        );
    }
}
