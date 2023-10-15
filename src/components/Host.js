import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, id, image, selectedHost, onSelectHost }) {
  /* NOTE: The className "host selected" renders a different style than simply "host". */

  return (
    <Card
      className={id === selectedHost.id ? "host selected" : "host"}
      onClick={() => onSelectHost(host)}
      image={image}
      raised
      link
    />
  );
}

export default Host;