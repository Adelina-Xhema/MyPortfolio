import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGit,
  SiTrello,
} from "react-icons/si";

function Toolstack() {
  const toolStackItems = [
    { icon: <SiVisualstudiocode color="blue" size={60} />, name: "Visual Studio Code" },
    { icon: <SiVisualstudiocode color="purple" size={60} />, name: "Visual Studio" },
    { icon: <SiGit color="red" size={60} />, name: "Git" },
    { icon: <SiTrello color="orange" size={60} />, name: "Trello" },
  ];

  const toolstackStyle = `
    .tech-icons {
      text-align: center;
      padding: 10px;
    }

    .tech-icons p {
      font-size: 30px;
    }
  `;

  return (
    <div>
      <style>{toolstackStyle}</style>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {toolStackItems.map((item, index) => (
          <Col key={index} xs={4} md={2} className="tech-icons">
            {item.icon}
            <p>{item.name}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Toolstack;
