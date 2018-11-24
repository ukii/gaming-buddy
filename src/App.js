import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import User from './components/User';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import store from './store';
import Heroes from "./components/Heroes";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <BrowserRouter>
                        <Switch>
                            <Route path="/user" component={User}/>
                            <Route path="/heroes" component={Heroes}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
}

export default App;
