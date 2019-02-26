import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import NavBar from './navbar/NavBar'
import Main from './main/Main'
import './App.css';
import Firebase from 'firebase/app';
import 'firebase/firestore';
import config from './firebase/config';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            novels: [],
            fetched: false
        };
        this.getData = this.getData.bind(this);
        Firebase.initializeApp(config);
    }

    render() {
        return (
            <div className="App">
                <NavBar/>
                <Router>
                    <Switch>
                        <Route path="/"
                               render={(props) => <Main {...props} novels={this.state.novels} />}
                        />
                        <Route
                            path='/:title'
                            render={(props) => <Main {...props} novels={this.state.novels} />}
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
