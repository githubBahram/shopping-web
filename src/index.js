import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



import './fonts/iransans/IRANSansWeb.ttf'
import './fonts/iransans/IRANSansWeb_Black.ttf'
import './fonts/iransans/IRANSansWeb_Bold.ttf'
import './fonts/iransans/IRANSansWeb_Light.ttf'
import './fonts/iransans/IRANSansWeb_Medium.ttf'
import './fonts/iransans/IRANSansWeb_UltraLight.ttf'


// Importing the farsi number Iransans font
import './fonts/iransans/FarsiNumber/IRANSansWeb(FaNum).ttf'
import './fonts/iransans/FarsiNumber/IRANSansWeb(FaNum)_Black.ttf'
import './fonts/iransans/FarsiNumber/IRANSansWeb(FaNum)_Bold.ttf'
import './fonts/iransans/FarsiNumber/IRANSansWeb(FaNum)_Light.ttf'
import './fonts/iransans/FarsiNumber/IRANSansWeb(FaNum)_Medium.ttf'
import './fonts/iransans/FarsiNumber/IRANSansWeb(FaNum)_UltraLight.ttf'
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css'
import ReactBreakpoints from "react-breakpoints/es";

const breakpoints = {
    mobile: 320,
    mobileLandscape: 480,
    tablet: 768,
    tabletLandscape: 1024,
    desktop: 1200,
    desktopLarge: 1500,
    desktopWide: 1920,
}

ReactDOM.render(
    <ReactBreakpoints breakpoints={breakpoints}>
        <App />
    </ReactBreakpoints>,
    document.getElementById('root'),
)
