import "./App.css";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { TopBar } from "./components/TopBar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Policies } from "./components/Policies";
import { NavBar } from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <NavBar/>
      <Switch>
        <Route path="/admin" component={AdminScreen} />
        <Route path="/login" component={Login} exact/>
        <Route path="/orders" component={OrderScreen} exact/>
        <Route path="/register" component={Register} exact/>
        <Route path="/" component={HomeScreen} exact/>
        <Route path="/cart" component={CartScreen} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/contact" component={Contact} exact/>
        <Route path="/policy" component={Policies} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
