import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { auth } from "./services/firebase";
import { StyledFirebaseAuth } from "react-firebaseui";

function App() {
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID]
  };
  const [isSigned, setIsSigned] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth().onAuthStateChanged(user => {setIsSigned(!!user);setUser(user)});
  }, []);

  return (
    <div>
      {isSigned ? (
        <div>
          {JSON.stringify(user)}
          <button onClick={() => auth().signOut()}>Sign Out</button>
        </div>
      ) : (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
      )}
    </div>
  );
}

export default App;
