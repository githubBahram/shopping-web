import React from 'react';
import {MemoryRouter, Route, Switch} from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Brand from "./pages/Brand";
import Categories from "./pages/Categories";
import {Provider} from 'react-redux';
import store from './redux/store';

import './App.css';

const About = () => <span>About</span>;

const App = () => (
    <Provider store={store}>
        <MemoryRouter>
            <div style={{backgroundColor:'#fafafa'}}>
                <Menu/>

                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/brands">
                            <Brand/>
                        </Route>
                        <Route path="/">
                            <Categories/>
                        </Route>
                    </Switch>
            </div>
        </MemoryRouter>
    </Provider>
);

export default App;
