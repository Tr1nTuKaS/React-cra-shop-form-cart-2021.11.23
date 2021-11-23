import { Switch, Route } from "react-router";
import "./App.css";
import Header from "./components/Header";
import CartPage from "./pages/CartPages";
import ShopPage from "./pages/ShopPages";
import HomePage from "./pages/HomePages";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <h2>OOPS page not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
