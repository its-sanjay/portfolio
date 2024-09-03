import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import age from "../../Assets/Projects/age validation.png";
import quiz from "../../Assets/Projects/quiz.png";
import kart from "../../Assets/Projects/kart.png";
import facebook from "../../Assets/Projects/FACEBOOK SIGNUP - Profile 1 - Microsoft​ Edge 02-09-2024 20_28_09.png";
import eco from "../../Assets/Projects/ecommerce app.png";
import portfolio from "../../Assets/Projects/Portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={age}
              isBlog={false}
              title="AGE VALIDATION" 
              description="The Age Validation Project is designed to implement a simple yet effective system for verifying the age of users accessing a website or application. This project aims to demonstrate how to create an age validation form using HTML for structure, CSS for styling, and JavaScript for functionality."
              ghLink="https://github.com/its-sanjay/Age-validation"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="QUIZ APP"
              description="The Quiz App Project is designed to create an interactive web application where users can take quizzes, receive feedback on their answers, and view their scores. This project leverages HTML, CSS, JavaScript, and ReactJS to build a dynamic and responsive user experience."
              ghLink="https://github.com/its-sanjay/quiz-app"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kart}
              isBlog={false}
              title="KART APP"
              description="The Kart App Project aims to develop a web-based shopping application for a fictional karting store. This app allows users to browse products, manage a shopping cart, and proceed to checkout. The project leverages HTML, CSS, JavaScript, ReactJS, Bootstrap, and Node.js to create a dynamic, user-friendly, and responsive e-commerce experience."
              ghLink="https://github.com/its-sanjay/kart-app"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facebook}
              isBlog={false}
              title="FACEBOOK SIGNUP PAGE"
              description="The Facebook Signup Page Project aims to create a user registration page similar to Facebook’s sign-up interface. This project will focus on providing a clean, user-friendly form for new users to create an account. The frontend will be developed using HTML and CSS, while the backend will be powered by Python and Django to handle form submissions and user data management."
              ghLink="https://github.com/its-sanjay/facebook-signup-page"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eco}
              isBlog={false}
              title="CLOTHING APP"
              description=" The eCommerce Project is designed to create a fully functional online shopping platform. The project involves building a dynamic and interactive web application that allows users to browse products, add items to their cart, and proceed to checkout. The application will be developed using HTML, CSS, JavaScript, ReactJS, Bootstrap, and will integrate with APIs for product management and payment processing."
              ghLink="https://github.com/its-sanjay/clothing-app"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="PORTFOLIO"
              description=" The Interactive Portfolio Website was developed to showcase my skills and projects in a visually engaging and user-friendly manner. The goal was to create a dynamic, responsive platform that effectively communicates my professional expertise and makes it easy for potential clients or employers to explore my work."
              ghLink="https://github.com/its-sanjay/portfolio"
                            
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
