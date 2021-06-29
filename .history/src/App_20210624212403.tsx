import { createContext, useState } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export const AuthContext = createContext({} as any);

function App() {


  return (
    <BrowserRouter>
    <AuthContext></AuthContext>
      <Route path="/" exact={true} component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
