import React from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import CustomCakeContainer from "./components/CustomCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      {/* <div className="App">
        <div style={{ "border-style": "dotted" }}>
          <CakeContainer />
        </div>
        <div style={{ "border-style": "dotted" }}>
          <HooksCakeContainer />
        </div>
        <div style={{ "border-style": "dotted" }}>
          <CustomCakeContainer />
        </div>
        <div style={{ "border-style": "dotted" }}>
          <ItemContainer />
          <ItemContainer cake />
        </div>
        <div style={{ "border-style": "dotted" }}>
          <IceCreamContainer />
        </div>
      </div> */}

      <div>
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
