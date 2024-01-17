import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNavbar from "../components/SideNavbar";
import img6 from "../images/img6.png";
import Button from "react-bootstrap/Button";
import { FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";

const row1 = {
  paddingRight: "0px",
  marginRight: "-50px",
  backgroundImage: `url(${img6})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%",
  zIndex: "-1",
};

const openButton = {
  borderRadius: "2px",
  backgroundColor: "black",
  border: "1px solid  black",
  color: "white",
};

const cardStyle = {
  width: "17rem",
  textAlign: "center",
  border: "1px solid #ced4da",
  borderRadius: "3px", // Add border-radius for a rounded corner
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow
  paddingBottom: "25px",
  height: "230px",
};

const Archive = () => {
  return (
    <div style={row1}>
      <Header />

      <Row>
        <Col md={2}>
          <SideNavbar />
        </Col>
        <Col
          md={10}
          className="ml-sm-auto col-lg-9 px-md-4"
          style={{
            marginTop: "45px",
          }}
        >
          {/* Main content goes here */}
          <Row>
            <Col md={2} style={{ marginRight: "115px" }}>
              <Card style={cardStyle}>
                <FaFolder style={{ margin: "10px auto", fontSize: "200px" }} />
                <Card.Body>
                  <Card.Title
                    style={{ fontSize: "200%", marginTop: "-13px" }}
                  ></Card.Title>
                  <Card.Text>SIGNAL</Card.Text>
                  <Link to="/archivesignaldocument">
                    <Button style={openButton}>OPEN</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2} style={{ marginRight: "115px" }}>
              <Card style={cardStyle}>
                <FaFolder style={{ margin: "10px auto", fontSize: "200px" }} />
                <Card.Body>
                  <Card.Title
                    style={{ fontSize: "200%", marginTop: "-13px" }}
                  ></Card.Title>
                  <Card.Text>LOOSE MINUTE</Card.Text>
                  <Link to="/archivedocument">
                    <Button style={openButton}>OPEN</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2} style={{ marginRight: "115px" }}>
              <Card style={cardStyle}>
                <FaFolder style={{ margin: "10px auto", fontSize: "200px" }} />
                <Card.Body>
                  <Card.Title
                    style={{ fontSize: "200%", marginTop: "-13px" }}
                  ></Card.Title>
                  <Card.Text>LETTER</Card.Text>
                  <Link to="/archivedocument">
                    <Button style={openButton}>OPEN</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2} style={{ marginRight: "" }}>
              <Card style={cardStyle}>
                <FaFolder style={{ margin: "10px auto", fontSize: "200px" }} />
                <Card.Body>
                  <Card.Title
                    style={{ fontSize: "200%", marginTop: "-13px" }}
                  ></Card.Title>
                  <Card.Text>MEMO</Card.Text>
                  <Link to="/archivedocument">
                    <Button style={openButton}>OPEN</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row style={{ marginTop: "50px" }}>
            <Col md={2} style={{ marginRight: "115px" }}>
              <Card style={cardStyle}>
                <FaFolder style={{ margin: "10px auto", fontSize: "200px" }} />
                <Card.Body>
                  <Card.Title
                    style={{ fontSize: "200%", marginTop: "-13px" }}
                  ></Card.Title>
                  <Card.Text>MINUTES OF MTG</Card.Text>
                  <Link to="/archivedocument">
                    <Button style={openButton}>OPEN</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2} style={{ marginRight: "115px" }}>
              <Card style={cardStyle}>
                <FaFolder style={{ margin: "10px auto", fontSize: "200px" }} />
                <Card.Body>
                  <Card.Title
                    style={{ fontSize: "200%", marginTop: "-13px" }}
                  ></Card.Title>
                  <Card.Text>ELECTRONIC SHORT MSG</Card.Text>
                  <Link to="/archivedocument">
                    <Button style={openButton}>OPEN</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2} style={{ marginRight: "115px" }}>
              <Card style={cardStyle}>
                <FaFolder style={{ margin: "10px auto", fontSize: "200px" }} />
                <Card.Body>
                  <Card.Title
                    style={{ fontSize: "200%", marginTop: "-13px" }}
                  ></Card.Title>
                  <Card.Text>ADMIN ORDERS</Card.Text>
                  <Link to="/archivedocument">
                    <Button style={openButton}>OPEN</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2} style={{ marginRight: "" }}>
              <Card style={cardStyle}>
                <FaFolder style={{ margin: "10px auto", fontSize: "200px" }} />
                <Card.Body>
                  <Card.Title
                    style={{ fontSize: "200%", marginTop: "-13px" }}
                  ></Card.Title>
                  <Card.Text>INSTR FOR TAC EX</Card.Text>
                  <Link to="/archivedocument">
                    <Button style={openButton}>OPEN</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row style={{ marginTop: "50px" }}>
            <Col md={2} style={{ marginRight: "115px" }}>
              <Card style={cardStyle}>
                <FaFolder style={{ margin: "10px auto", fontSize: "200px" }} />
                <Card.Body>
                  <Card.Title
                    style={{ fontSize: "200%", marginTop: "-13px" }}
                  ></Card.Title>
                  <Card.Text>CONFIRMATORY NOTES</Card.Text>
                  <Link to="/archivedocument">
                    <Button style={openButton}>OPEN</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2} style={{ marginRight: "115px" }}>
              <Card style={cardStyle}>
                <FaFolder style={{ margin: "10px auto", fontSize: "200px" }} />
                <Card.Body>
                  <Card.Title
                    style={{ fontSize: "200%", marginTop: "-13px" }}
                  ></Card.Title>
                  <Card.Text>ESTIMATE PROCESS</Card.Text>
                  <Link to="/archivedocument">
                    <Button style={openButton}>OPEN</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2} style={{ marginRight: "115px" }}>
              <Card style={cardStyle}>
                <FaFolder style={{ margin: "10px auto", fontSize: "200px" }} />
                <Card.Body>
                  <Card.Title
                    style={{ fontSize: "200%", marginTop: "-13px" }}
                  ></Card.Title>
                  <Card.Text>ANNEXES & APPENDICES</Card.Text>
                  <Link to="/archivedocument">
                    <Button style={openButton}>OPEN</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2} style={{ marginRight: "" }}>
              <Card style={cardStyle}>
                <FaFolder style={{ margin: "10px auto", fontSize: "200px" }} />
                <Card.Body>
                  <Card.Title
                    style={{ fontSize: "200%", marginTop: "-13px" }}
                  ></Card.Title>
                  <Card.Text>FLOAT</Card.Text>
                  <Link to="/archivefloatdocument">
                    <Button style={openButton}>OPEN</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default Archive;
