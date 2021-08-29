import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Brand from "./pages/Brand";
import {Provider} from 'react-redux';
import store from './redux/store';
import './font.css'
import './App.css';
import SubCategoryPage from "./pages/subCategoryPage/SubCategoryPage";
import ProductListPage from "./pages/productList/ProductListPage";
import ShoppingCartPage from "./pages/shoppingCart/ShoppingCartPage";
import CategoryFilter from "./pages/productList/CategoryFilter";
import LoginMobile from "./pages/login/LoginMobile";
import ConfirmSendCode from "./pages/login/ConfirmSendCode";
import DrawerLeftPanel from "./component/DrawerLeftPanel";
import TestCalback from "./pages/TestCalback";


const About = () => <span>About</span>;

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div dir="rtl" style={{backgroundColor: '#fafafa', height: "100%"}}>
                <DrawerLeftPanel>
                    <ShoppingCartPage/>
                </DrawerLeftPanel>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route exact path="/brands">
                        <Brand/>
                    </Route>
                    <Route exact path="/categories/:categoryId">
                        <SubCategoryPage/>
                    </Route>
                    <Route exact path="/productFilter">
                        <CategoryFilter/>
                    </Route>

                    <Route exact path="/productList/:productId">
                        <ProductListPage/>
                    </Route>
                    <Route path="/productList/:sort">
                        <ProductListPage/>
                    </Route>
                    <Route exact path="/authentication/login">
                        <LoginMobile/>
                    </Route>
                    <Route exact path="/authentication/verification">
                        <ConfirmSendCode/>
                    </Route>
                    <Route exact path="/shoppingCart">
                        <ShoppingCartPage/>
                    </Route>
                    <Route exact path="/callBack">
                        <TestCalback/>
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
