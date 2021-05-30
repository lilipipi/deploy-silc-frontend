import React, { Component } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Login from "./Login";

class Verification extends Component {
  constructor() {
    super();
    this.handleSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.history.push("/AMdashboard");
  }

  render() {
    return (
      <div>
        <Row className="loginRow">
          <Col className="loginCol">
            <Login />
          </Col>
          <Col className="loginCol">
            <Card className="my-3 p-5" id="loginCard">
              <Card.Title>Verify Login</Card.Title>
              <Form.Text className="text-muted">
                A verification code has been sent you your email.
              </Form.Text>
              <Form.Text className="text-muted">
                Please enter the 4 digit code below to login.
              </Form.Text>
              <br />
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Enter Verification Code</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Your Code"
                    id="formFocus"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" id="loginBtn">
                  Submit
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(Verification);
