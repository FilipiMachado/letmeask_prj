import { createContext, useState } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export const AuthContext = createContext({} as any);

function App() {
  const [user, setValue] = useState("Teste");

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ value, setValue }}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
