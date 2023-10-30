import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/uni.webp";
import editor from "../../Assets/Projects/sql.png";
import taxi from "../../Assets/Projects/taxi.webp";
import epms from "../../Assets/Projects/epms.png";
import bitsOfCode from "../../Assets/Projects/flower.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
        During my studies I developed different projects, some of the best are here. I worked in a team and individually        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="LabCourse 1 - University Management System"
              description="Using technologies such as .NET and React.js,
               our University Management System provides a comprehensive platform for 
               efficient administrative control, seamless user experience and simple academic management, 
              meeting the unique needs of administrators, students and faculty members"
              ghLink="https://github.com/EdiKrasniqi11/University-System-Lab1"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="FLOWER-SHOP"
              description="Flowershop website is an individual project, it is elegantly designed,
               developed with PHP, HTML, CSS and JavaScript. 
              Contains product list with prices and details, 
              as well as a panel for admin and users"
              ghLink="https://github.com/Adelina-Xhema/Flowershop-WebProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SQL-PROJECT"
              description="The Company Management System project includes E-R modeling, 
              relational modeling, SQL database operations, aggregate functions, subquery usage, 
              and implementation of stored procedures.Project was developed for the subject Database Systems during the third semester"
              ghLink="https://github.com/Adelina-Xhema/Company-Management-System-SQLProject.git"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taxi}
              isBlog={false}
              title="LabCourse 2 - Taxi ME HOME "
              description="TaxiMeHome web application was developed with technologies such as 
              .NET, React.js, while MS SQL and MongoDB were used for the database. It offers taxi
               booking, location tracking, distance, price calculation and enables automated email 
               notifications. Thus,
               this app makes the entire ride sharing experience simpler for users. This is a team project for Lab-Course-2."
              ghLink="https://gitfront.io/r/adelina/xfdzDvRHDusD/LAB2/tree/Lab2-TaxiMeHome/Lab2-TaxiMeHome/"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={epms}
              isBlog={false}
              title="EPMS - Evaluation Process Management System"
              description="EPMS (Evaluation Process Management System) is a .NET-based 
              software solution designed with a strong emphasis on modular architecture 
              and the application of  design patterns. This approach ensures scalability, maintainability, 
              and robustness, making it an ideal choice for managing evaluation processes effectively and efficiently."
              ghLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
