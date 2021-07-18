import React from 'react'
import Breakpoint from "../../component/Breakpoint";
import ProductListPage_D from "./ProductionListPage_D";
import ProductionListMobile from "./ProductionListMobile";
import Footer from "../footer/Footer";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import CategoryFilter from "./CategoryFilter";

const ProductListPage = (props) => {
    let {path, url} = useRouteMatch();
    const {categoryId} = props


    return (
        <>

            <Switch>
                <Route exact path={path}>
                    <Breakpoint at="lg">
                        <ProductListPage_D categoryId={categoryId}/>
                    </Breakpoint>
                    <Breakpoint at="md">
                        <ProductListPage_D categoryId={categoryId}/>
                    </Breakpoint>

                    <Breakpoint at="xs">
                        <ProductionListMobile/>
                    </Breakpoint>
                    <Footer/>
                </Route>
                <Route path={`${path}/productFilter`}>
                    <CategoryFilter/>
                </Route>
            </Switch>
        </>
    )

}


export default ProductListPage