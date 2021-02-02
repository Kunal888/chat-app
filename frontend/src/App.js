import React from "react";
import Join from "./components/Join";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Join} />
      <Route exact path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
