import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Tooltip,
  OverlayTrigger,
  Accordion,
  Button,
} from "react-bootstrap";
import "react-input-range/lib/css/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import FeedbackModal from "../Profile/FeedbackModal";
import SelectEntityModal from "../Profile/SelectEntityModal";

class UserSettings extends Component {
  constructor() {
    super();
    this.state = {
      entityType: "",
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        A password reset link will be sent to your email.
      </Tooltip>
    );
    return (
      <div>
        <Card className="userCardStyle">
          <Card.Body>
            <Card.Title>
              <h1 className="secondary-header">Settings</h1>
              <hr />
            </Card.Title>
            <br />
            <form>
              <Row>
                <Col xs={6}>
                  <div className="form-group">
                    <small className="text-muted">Choose Entity</small>
                    <br />
                    <SelectEntityModal />
                    {/* <Form.Control
                      as="select"
                      name="entityType"
                      className="my-1 p-2 rounded form-control form-control-md"
                      onChange={this.onChange}
                    >
                      <option value="">Choose Entity Type</option>
                      <option value="Property">Individual</option>
                      <option value="Private Debt">Australian Company</option>
                      <option value="Private Equity">Company Trustee</option>
                      <option value="Private Debt">Individual Trustee</option>
                    </Form.Control>  */}
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="form-group">
                    <small className="text-muted">
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                      >
                        <FontAwesomeIcon id="infoIcon" icon={faInfoCircle} />
                      </OverlayTrigger>
                      Change Password
                    </small>
                    <Form>
                      <Form.Row className="align-items-center">
                       <Col  xs={6}>
                          <Form.Control
                            type="email"
                            className="my-1 p-2 rounded form-control form-control-md"
                            id="formFocus"
                            placeholder="Enter your Email"
                            name="changePw"
                          required/>
                     </Col>
                        <Col  xs={6}>
                          <Button
                            type="submit"
                            className="feedBackBtn"
                            id="submitBtn-standard"
                          >
                            Reset
                          </Button>
                        </Col>
                      </Form.Row>
                    </Form>
                  </div>
                </Col>
              </Row>
            </form>
          </Card.Body>
        </Card>
        <Accordion>
          <Card className="accordionMain">
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                id="accordianBtn"
              >
                Feedback <FontAwesomeIcon id="caretIcon" icon={faCaretDown} />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <small>
                  Assist us to keep improving the new SILC.Co with your
                  <FeedbackModal />
                </small>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="accordionMain">
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="1"
                id="accordianBtn"
              >
                Agreements <FontAwesomeIcon id="caretIcon" icon={faCaretDown} />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <a href="http://localhost:3000/">
                  <small className="allLinks">Terms of Use</small>
                </a>
                &emsp;
                <a href="http://localhost:3000/">
                  <small className="allLinks">Privacy Policy</small>
                </a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="accordionMain">
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="2"
                id="accordianBtn"
              >
                Listing Rules
                <FontAwesomeIcon id="caretIcon" icon={faCaretDown} />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <a href="http://localhost:3000/">
                  <small className="allLinks">Listing Rules</small>
                </a>{" "}
                &emsp;
                <a href="http://localhost:3000/" className="allLinks">
                  <small className="allLinks">User Guide</small>
                </a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default UserSettings;
