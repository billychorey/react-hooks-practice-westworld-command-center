import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";

function App() {
  const [hosts, setHosts] = useState([]);
  const [selectedHost, setselectedHost] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
      .then((r) => r.json())
      .then(setHosts);
  }, []);


  return (
    <Segment id="app">
      <WestworldMap />
      <Headquarters hosts={hosts} selectedHost={selectedHost}/>
    </Segment>
  );
}

export default App;
