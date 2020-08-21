import React from "react";
import Header from "./Components/Header";
import Switch from "react-bootstrap/esm/Switch";
import RegisterComponent from "./pages/Register/Register.component";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact page="/register">
          <RegisterComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
