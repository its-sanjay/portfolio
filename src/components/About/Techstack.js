import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiDjango,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
// import {
  // SiRedis,
  // SiFirebase,
  // SiNextdotjs,
  // SiSolidity,
  // SiPostgresql,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h4>
          Html
        </h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h4>
          Css
        </h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript />
        <h4>
          <h4>
            Javascript
          </h4>
        </h4>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h4>
          Nodejs
        </h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h4>
          React
        </h4>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h4>
          Mongodb
        </h4>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h4>
          Python
        </h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
        <h4>
          Django
        </h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h4>
          Git
        </h4>
      </Col>
    </Row>
  );
}

export default Techstack;
