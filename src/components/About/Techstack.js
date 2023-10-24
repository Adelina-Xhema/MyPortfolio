import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiDotnet, DiDatabase, DiReact, DiJava, DiHtml5, DiCss3 } from "react-icons/di";

function Techstack() {
  const techStackItems = [
    { icon: <DiDotnet color="purple" size={60} />, name: ".NET Core" },
    { icon: <DiReact color="blue" size={60} />, name: "React" },
    { icon: <DiJava color="red" size={60} />, name: "Java" },
    { icon: <DiHtml5 color="orange" size={60} />, name: "HTML" },
    { icon: <DiCss3 color="blue" size={60} />, name: "CSS" },
    { icon: <DiDatabase color="orange" size={60} />, name: "SQL" },
  ];

  const techstackStyle = `
    .tech-icons {
      text-align: center;
      padding: 10px;
    }

    .tech-icons p {
      font-size: 20px;
    }
  `;

  return (
    <div>
      <style>{techstackStyle}</style>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techStackItems.map((item, index) => (
          <Col key={index} xs={12} md={3} className="tech-icons">
            {item.icon}
            <p>{item.name}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
