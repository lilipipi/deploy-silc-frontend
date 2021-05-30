import React, { Component } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Login from "./Login";
import { createNewUser } from "../../actions/securityActions";
import { connect } from "react-redux";

class SignupCard extends Component {
  constructor() {
    super();
    this.state = {
      type: "password",

      // user details
      name: "",
      email: "",
      password: "",
      c_password: "",
      role: "admin",
    };

    this.handleClick = this.onChangePasswordShow.bind(this);
    this.handleSubmit = this.onSubmit.bind(this);
    this.handleLink = this.onLink.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangePasswordShow() {
    this.setState(({ type }) => ({
      type: type === "text" ? "password" : "text",
    }));
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      c_password: this.state.c_password,
      role: "basic",
    };

    this.props.createNewUser(newUser, this.props.history);
  }

  onLink(e) {
    this.props.history.push("/SignIn");
  }

  render() {
    const  error  = this.props.errors;
    return (
      <div>
        <Row className="loginRow">
          <Col className="loginCol">
            <Login />
          </Col>
          <Col className="loginCol">
            <Card className="my-3 p-5" id="loginCard">
              <Card.Title>Create New Account</Card.Title>
              <small className="text-muted"><p id="authFailed">{error.message}</p></small>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    id="formFocus"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    id="formFocus"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type={this.state.type}
                    placeholder="Password"
                    id="formFocus"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type={this.state.type}
                    placeholder="Confirm Password"
                    id="formFocus"
                    name="c_password"
                    value={this.state.c_password}
                    onChange={this.onChange}
                    required
                  />
                  <p className="pwShow" onClick={this.handleClick}>
                    {this.state.type === "text" ? "Hide" : "Show"}
                  </p>
                </Form.Group>
                <Form.Group
                  controlId="formBasicCheckbox"
                  id="loginformCheckbox"
                >
                  <Form.Check
                    className="text-muted"
                    type="checkbox"
                    label="I agree with the terms and conditions"
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" id="loginBtn">
                  Sign Up
                </Button>
              </Form>
              <small className="text-muted" id="mutedTextLabel">
                Already have an account?
                <span style={{ marginRight: 5 }} />
                <Link to="/SignIn"> Sign In</Link>
              </small>
              <small id="mutedTextLabel">
                <Link to="/SignUp" style={{ marginLeft: '0.25rem' }}>Privacy Policy</Link>
                <Link to="/SignUp" style={{ marginRight: '0.25rem' }}>Terms &#38; Conditions</Link>
              </small>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default withRouter(
  connect(mapStateToProps, { createNewUser })(SignupCard)
);
