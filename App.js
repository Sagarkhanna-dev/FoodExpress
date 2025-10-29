import React from "react";
import ReactDOM from "react-DOM/client";
import Restaurant from "./src/components/Restaurant";
import { BrowserRouter , Route , Routes  } from "react-router";
import Home from "./src/components/Home";
import RestaurantMenu from "./src/components/NextStep/RestaurantMenu";
import SecondaryHome from "./src/components/NextStep/SecondaryHome";
import Checkout from "./src/components/NextStep/Checkout";
import { Provider } from "react-redux";
import { store } from "./src/components/GlobalObj/store";
import Account from "./src/components/Account";
import SearchPage from './src/components/NextStep/SearchPage';
import CorporatePage from './src/components/NextStep/CorporatePage';
import OffersPage from './src/components/NextStep/OffersPage';
import HelpPage from './src/components/NextStep/HelpPage';

function App(){
    return(
        <>
        <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route element={<SecondaryHome/>}>
                <Route path="/restaurant" element={<Restaurant/>}></Route>
                <Route path="/city/kanpur/:id" element={<RestaurantMenu/>}></Route>
                </Route>
                <Route path="/checkout" element={<Checkout/>}></Route>
                <Route path="/account" element={<Account/>}></Route>
                <Route path="/search" element={<SearchPage />} />
                <Route path="/corporate" element={<CorporatePage />} />
                <Route path="/offers" element={<OffersPage />} />
                <Route path="/help" element={<HelpPage />} />
            </Routes>
        </BrowserRouter>
        </Provider>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>)