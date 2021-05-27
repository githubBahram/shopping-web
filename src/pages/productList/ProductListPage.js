import React from 'react'
import Breakpoint from "../../component/Breakpoint";
import ProductListPage_D from "./ProductionListPage_D";
import ProductionListMobile from "./ProductionListMobile";
import Footer from "../footer/Footer";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import CategoryFilter from "./CategoryFilter";

const ProductListPage = () => {
    let { path, url } = useRouteMatch();
    return (
        <>

            <Switch>
                <Route exact path={path}>
                    <Breakpoint at="lg">
                        <ProductListPage_D/>
                    </Breakpoint>
                    <Breakpoint at="md">
                        <ProductListPage_D/>
                    </Breakpoint>

                    <Breakpoint at="xs">
                        <ProductionListMobile/>
                    </Breakpoint>
                    <Footer/>
                </Route>
                <Route path={`${path}/productFilter`} >
                    <CategoryFilter/>
                </Route>
            </Switch>
        </>
    )

}


export default ProductListPage