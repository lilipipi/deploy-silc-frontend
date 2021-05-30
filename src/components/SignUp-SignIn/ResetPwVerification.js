import React, { Component } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Login from "./Login";

class ResetPwVerification extends Component {
  constructor() {
    super();
    this.handleSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.history.push("/ResetPassword");
    alert("Reset password link sent to your email");
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
              <Card.Title>Reset Password</Card.Title>
              <Form.Text className="text-muted">
                A password reset link will be sent to your email.
              </Form.Text>
              <br />
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control placeholder="email" id="formFocus" required />
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

export default withRouter(ResetPwVerification);
