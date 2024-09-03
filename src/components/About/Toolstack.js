import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPycharm,
  // SiSlack,
  // SiVercel,
  // SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h4>
          Visualstudiocode
        </h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <h4>
          Pycharm
        </h4>
      </Col>
     
    </Row>
  );
}

export default Toolstack;
