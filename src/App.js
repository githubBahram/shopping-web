import React from 'react';
import {MemoryRouter, Route, Switch,BrowserRouter} from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Brand from "./pages/Brand";
import MainCategories from "./pages/MainCategories";
import {Provider} from 'react-redux';
import store from './redux/store';

import './App.css';

const About = () => <span>About</span>;

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div style={{backgroundColor:'#fafafa'}}>
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/brands">
                            <Brand/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
            </div>
        </BrowserRouter>
    </Provider>
);

export default App;
