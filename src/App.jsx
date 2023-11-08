import "./App.css";
import UserAvatar from "./UserAvatar.jsx";
import OrderProgress from "./OrderProgress.jsx";
import ShoppingCart from "./ShoppingCart.jsx";

function App() {
  return (
    <div className="App">
      <div className="container p-0">
        <UserAvatar />
        <div className="main-container">
          <OrderProgress />
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default App;
