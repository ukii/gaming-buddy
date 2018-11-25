import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import User from './components/User';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import store from './store';
import Heroes from "./components/Heroes";
import StartScreen from "./components/StartScreen";
import HeroDetails from "./components/HeroDetails";
import MenuBar from "./components/MenuBar";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div id="container" >
                    <MenuBar />
                    <div id="test" className="App">
                    <BrowserRouter>
                        <Switch>
                            <Route path="/user" component={User}/>
                            <Route path="/heroes" component={Heroes}/>
                            <Route path="/hero/details/:id" component={HeroDetails}/>
                            <Route path="/" component={StartScreen}/>
                        </Switch>
                    </BrowserRouter>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
