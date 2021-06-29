import { createContext } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export const TestContext = createContext("");

function App() {
 const []

  return (
    <BrowserRouter>
      <TestContext.Provider value={"Teste"}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
