import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import logo3 from "../images/logo3.png";
import img1 from "../images/img1.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../utils/helper";
const loginContainerStyle = {
  border: "1px solid #ddd",
  borderRadius: "3px",
  padding: "50px",
  backgroundColor: "#f8f9fa",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  width: "85%",
  height: "520px",
};

const logoStyle = {
  marginBottom: "20px", // Adjust the margin as needed
  margin: "10px auto",
};

const backgroundStyle = {
  backgroundImage: `url(${img1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  position: "fixed",
  width: "100%",
  zIndex: "-1",
};

const inputField = {
  borderRadius: "3px",
  paddingTop: "12px",
  paddingBottom: "12px",
};

const formGroup = {
  marginTop: "-20px",
};

const Login = () => {
  // State for storing user input
  const [svcNo, setSvcNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Function to handle user login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      //
      const res = await axios.post(`${serverUrl}/login`, {
        svcNo,
        password,
      });

      // Check if login was successful

      console.log(res);
      navigate("/home", { replace: true });
    } catch (error) {
      // Handle unexpected errors during login
      console.error("An error occurred during login:", error);
      setError(error.response.data.message);
    }
  };
  return (
    <Container fluid>
      <Row
        className="justify-content-center align-items-center min-vh-100"
        style={backgroundStyle}
      >
        <Col md={4} xs={9} xl={3}>
          <div style={loginContainerStyle}>
            <div
              style={{
                textAlign: "center",
                border: "1px solid 	#D3D3D3",
                margin: "-7px auto",
              }}
            >
              <img
                src={logo3}
                alt="NAF page"
                width={150}
                height={130}
                style={logoStyle}
              />
            </div>
            <Form>
              <h2 className="text-center mb-2 mt-3">Login</h2>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Form.Group style={formGroup}>
                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  style={inputField}
                  id="svcNo"
                  value={svcNo}
                  onChange={(e) => {
                    if (error) {
                      setError(null);
                    }
                    setSvcNo(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  style={inputField}
                  id="password"
                  value={password}
                  onChange={(e) => {
                    if (error) {
                      setError(null);
                    }
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>

              <Button
                style={{
                  marginTop: "25px",
                  width: "100px",
                  height: "50px",
                  borderRadius: "0px",
                  backgroundColor: "white",
                  border: "1px solid #D3D3D3",
                  color: "black",
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
