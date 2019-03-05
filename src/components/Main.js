import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import { Switch, Route } from 'react-router-dom'

export default function Main(){
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </main>
    )
}