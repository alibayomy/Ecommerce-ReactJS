import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NavBarComponent from './Components/NavBarComponent';
import HomePage from './Pages/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

import LogInPage from './Pages/LogInPage/LogInPage';
import RegisterPage from './Pages/RegisterationPage/RegisterPage';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import WishListPage from './Pages/WishListPage/WishListPage';
import CartPage from './Pages/CartPage/CartPage';
import SearchPage from './Pages/SearchPage/SearchPage';
import CategoriesNavBarComponent from './Components/CategoriesNavBarComponent';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import { useEffect, useState } from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent></NavBarComponent>
        <CategoriesNavBarComponent></CategoriesNavBarComponent>
        <Switch>
          <Route exact path={"/"} component={HomePage}></Route>
          <Route exact path={"/login"} component={LogInPage}></Route>
          <Route exact path={"/products/:id"} component={SingleProductPage}></Route>
          <Route exact path={"/register"} component={RegisterPage}></Route>
          <Route exact path={"/search/"} component={SearchPage}></Route>
          <Route exact path={"/wishlist"} component={WishListPage}></Route>
          <Route exact path={"/cart"} component={CartPage}></Route>
          <Route exact path={'/category'} component={CategoryPage}></Route>
          <Route exact path={"*"} component={ErrorPage}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
