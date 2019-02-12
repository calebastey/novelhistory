import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import NavBar from './navbar/NavBar'
import Main from './main/Main'
import './App.css';


class App extends Component {

    render() {
        return (
            <div className="App">
                <NavBar/>
                <Router>
                    <Switch>
                        <Route path="/" component={Main}/>
                        <Route path="/:title" component={Main}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
