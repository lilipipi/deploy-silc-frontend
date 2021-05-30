import React, { Component } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Login from "../SignUp-SignIn/Login";
import { connect } from "react-redux";
import { adminLogin } from "../../actions/securityActions";

class AdminSigninCard extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      type: "password",
    };

    this.handleClick = this.onChangeType.bind(this);
    this.handleSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/AdminUserDashboard");
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.security.validToken) {
      nextProps.history.push("/AdminUserDashboard");
    }

    if (nextProps.errors) {
      return { errors: nextProps.errors };
    }

    return null;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeType() {
    this.setState(({ type }) => ({
      type: type === "text" ? "password" : "text",
    }));
  }

  onSubmit(e) {
    e.preventDefault();
    const LoginRequest = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.adminLogin(LoginRequest);

    console.log(LoginRequest, this.props.history);
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
              <Card.Title>Admin - Sign In</Card.Title>
              <small className="text-muted"><p id="authFailed">{error.message}</p></small>
              <Form onSubmit={this.handleSubmit}>
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
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
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
                  <p className="pwShow" onClick={this.handleClick}>
                    {this.state.type === "text" ? "Hide" : "Show"}
                  </p>
                </Form.Group>
                <Form.Group id="loginformCheckbox">
                  <Form.Check
                    className="text-muted"
                    type="checkbox"
                    label="Remember Me"
                  />
                </Form.Group>
                <Link to="/ResetPassword/Verify">Forgot Password</Link>
                <Button variant="primary" type="submit" id="loginBtn">
                  Login
                </Button>
              </Form>
             
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
  security: state.security,
  errors: state.errors,
});

export default withRouter(connect(mapStateToProps, { adminLogin })(AdminSigninCard));
