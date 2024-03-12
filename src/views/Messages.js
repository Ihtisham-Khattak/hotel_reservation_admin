import OnlyHeader from "components/Headers/OnlyHeader";
import React from "react";
import { Container } from "reactstrap";

const Messages = () => {
  return (
    <div>
      <OnlyHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        Messages
      </Container>
    </div>
  );
};

export default Messages;
