import "./App.css";
import UserAvatar from "./UserAvatar.jsx";
import OrderProgress from "./OrderProgress.jsx";
import ShoppingCart from "./ShoppingCart.jsx";

function App() {
  return (
    <div className="App">
      <div className="container-fluid main-container p-0">
        <img class="bg-image" src="./background/BG.png" alt="" />
        <div className="content-container">
          <UserAvatar />
          <OrderProgress />
        </div>
      </div>
    </div>
  );
}

export default App;
