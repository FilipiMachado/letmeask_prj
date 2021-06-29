import { createContext, useState } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { auth, firebase } from "./services/firebase";

export const AuthContext = createContext({} as any);

function App() {
  const [user, setUser] = useState("Teste");

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider

    auth.signInWithPopup(provider).then(result => {
      if (result.user) {
        const {displayName, photo} = result.user
      }
    })
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, setUser }}>
        <Route path="/" exact={true} component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
