import React from 'react'
import Header from '../mycomponent/Header';
import Navbar from '../mycomponent/Navbar';
import { Container, Row, Col} from "react-bootstrap";
import ProjectCard from "../mycomponent/ProjectCard";
import editor from "../assest/img/card1.png";
import vsgoi from "../assest/img/card2.png";
import PortFolio from "../assest/img/card3.png";
import Button from '../mycomponent/Button';


function Aboutus() {
  return (
    <> <Header/>
    <Navbar/>
    <Container fluid className="project-section">
      <Container>
      
        <p style={{ color: "white" }}>
        Aboutus
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vsgoi}
              isBlog={false}
              title="Student life"
              description="Experience a seamless digital journey with Dr. Virendra Swarup Group of Institutions, where innovation meets education. Our website, built using the robust MERN stack (MongoDB, Express.js, React, Node.js). Easily register or log in to access personalized content, manage your courses, and stay updated with campus events"
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vsgoi}
              isBlog={false}
              title="Services"
              description=" Welcome to my portfolio.It is designed using REACT and This collection showcases my work, skills, and achievements in Development. It is designed to highlight my professional growth, creative process, and the diverse range of projects I have successfully completed."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vsgoi}
              isBlog={false}
              title="Study and Grow"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink=""
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
    <Button/>
    </>
  );
}

export default Aboutus;

