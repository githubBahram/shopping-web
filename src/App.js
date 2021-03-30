import React from 'react';
import {MemoryRouter, Route, Switch} from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Brand from "./pages/Brand";
import {Provider} from 'react-redux';
import store from './redux/store';

import './App.css';

const About = () => <span>About</span>;

const App = () => (
    <Provider store={store}>
        <MemoryRouter>
            <Container className="p-3 rtl">
                <Menu/>
                <Jumbotron>
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/brands">
                            <Brand/>
                        </Route>
                        <Route path="/">
                            <Brand/>
                        </Route>
                    </Switch>

                </Jumbotron>
            </Container>
        </MemoryRouter>
    </Provider>
);

export default App;
