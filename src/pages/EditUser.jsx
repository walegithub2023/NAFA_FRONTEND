import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNavbar from "../components/SideNavbar";
import img6 from "../images/img6.png";

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

const EditUser = () => {
  const formStyle = {
    border: "1px solid #ced4da",
    borderRadius: "3px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    padding: "60px",
    backgroundColor: "#fff",
  };

  const buttonStyle = {
    backgroundColor: "rgb(33, 37, 41)",
    color: "white",
    height: "50px",
    border: "0px solid rgb(33, 37, 41)",
  };

  const headerStyle = {
    border: "1px solid #D3D3D3",
    fontFamily: "Roboto",
    padding: "10px",
  };

  const formInput = {};

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
            marginTop: "5px",
          }}
        >
          {/* Main content goes here */}
          <Row className="justify-content-md-center mt-5">
            <Col md={11}>
              <Form style={formStyle}>
                <h3 className="text-center mb-4" style={headerStyle}>
                  EDIT USER
                </h3>

                <Form.Group controlId="Svc No">
                  <Form.Label>Service No:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your svc no"
                    style={formInput}
                  />
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="initials">
                    <Form.Label>Initials:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your initials"
                      style={formInput}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="surname">
                    <Form.Label>Surname:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your surname"
                      style={formInput}
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="forAppt">
                    <Form.Label>Appt:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your appt"
                      style={formInput}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="forrank">
                    <Form.Label>Rank:</Form.Label>
                    <Form.Select style={formInput}>
                      <option>-Select-</option>
                      <option>AVM</option>
                      <option>Air Cdre</option>
                      <option>Gp Capt</option>
                      <option>Wg Cdr</option>
                      <option>Sqn Ldr</option>
                      <option>Flt Lt</option>
                      <option>Fg Offr</option>
                      <option>Plt Offr</option>
                      <option>AWO</option>
                      <option>MWO</option>
                      <option>WO</option>
                      <option>FS</option>
                      <option>Sgt</option>
                      <option>Cpl</option>
                      <option>LCpl</option>
                      <option>ACM/ACW</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    style={formInput}
                  />
                </Form.Group>
                <Form.Group controlId="userCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Select style={formInput}>
                    <option>-Select-</option>
                    <option>Admin</option>
                    <option>Editor</option>
                    <option>Reader</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="formCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the terms and conditions"
                    style={formInput}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mt-3"
                  style={buttonStyle}
                >
                  UPDATE
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default EditUser;
