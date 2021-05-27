import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Brand from "./pages/Brand";
import {Provider} from 'react-redux';
import store from './redux/store';
import './font.css'
import './App.css';
import SubCategoryPage from "./pages/subCategoryPage/SubCategoryPage";
import AddProductPage from "./pages/AddProductPage";
import ProductListPage from "./pages/productList/ProductListPage";
import Footer from "./pages/footer/Footer";
import ShoppingCartPage from "./pages/shoppingCart/ShoppingCartPage";
import Category from "./pages/Category";
import CategoryFilter from "./pages/productList/CategoryFilter";


const About = () => <span>About</span>;

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div dir="rtl" style={{backgroundColor: '#fafafa'}}>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/brands">
                        <Brand/>
                    </Route>
                    <Route exact path="/category/:categoryId">
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

                    <Route exact path="/shoppingCart">
                        <ShoppingCartPage/>
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
