import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";


function HostList({hosts, selectedHost, onSelectHost}) {
  return (
    <Card.Group itemsPerRow={6}>
      {/* What do you think, partner? */}
       {hosts.map((host) => {
        return (
          <Host
            key={host.id}
            host={host}
            id={host.id}
            image={host.imageUrl}
            selectedHost={selectedHost}
            onSelectHost={onSelectHost}
          />
        );
      })}
    </Card.Group>
  );
}

export default HostList;
