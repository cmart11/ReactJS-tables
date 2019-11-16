import React, { Component } from 'react'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'

import { Login, About } from './components'

export default class Routes extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/about" component={About} />
            </Switch>
        );
    }
}
