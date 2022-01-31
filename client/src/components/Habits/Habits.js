import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Habits = () => {

  return (
    <>
      <ListGroup variant="flush" className="my-2">
        {/* TODO: Render items by user habits */}
        <ListGroup.Item>Go for a run</ListGroup.Item>
        <ListGroup.Item>Meditate</ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Habits;
