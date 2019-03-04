import React from 'react'
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom'

export default function Main(){
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </main>
    )
}