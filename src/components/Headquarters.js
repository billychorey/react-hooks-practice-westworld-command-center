import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import LogPanel from "./LogPanel";
import ColdStorage from "./ColdStorage";

function Headquarters({hosts, selectedHost, onSelectHost}) {



  return (
    <Grid celled="internally">
      
      <Grid.Column width={8}>
        <ColdStorage
          hosts={hosts}
          selectedHost={selectedHost}
          onSelectHost={onSelectHost}
        />      
      </Grid.Column>
      <Grid.Column width={5}>
        <Details />
      </Grid.Column>
      <Grid.Column width={3}>
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
