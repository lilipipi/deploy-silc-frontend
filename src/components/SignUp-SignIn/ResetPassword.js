import React, { Component } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Login from "./Login";

class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      type: "password",
    };

    this.handleClick = this.onChange.bind(this);
    this.handleSubmit = this.onSubmit.bind(this);
  }

  onChange() {
    this.setState(({ type }) => ({
      type: type === "text" ? "password" : "text",
    }));
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.history.push("/SignIn");
    alert("Password updated")
    /* setTimeout(() => { 
        this.props.history.push('/SignIn');
        document.getElementById("resetPwSuccess").innerHTML = "&#x2714; Password updated";
      }, 1000) */
     
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
                You will be redirected to login page on a successful password
                reset.
              </Form.Text>
              <br />
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type={this.state.type}
                    placeholder="Password"
                    id="formFocus"
                    required
                  />
                </Form.Group>
                <Form.Group >
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type={this.state.type}
                    placeholder="Confirm Password"
                    id="formFocus"
                    required
                  />
                  <p className="pwShow" onClick={this.handleClick}>
                    {this.state.type === "text" ? "Hide" : "Show"}
                  </p>
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

export default withRouter(ResetPassword);
