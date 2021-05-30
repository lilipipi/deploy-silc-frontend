import React from "react";
import {
  Form,
  Modal,
  Button,
} from "react-bootstrap";

function CenteredFeedbackModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Help us improve the new SILC.Co
          </Modal.Title>
          <br />
        </Modal.Header>
        <form>
          <Modal.Body>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>How can we improve?</Form.Label>
              <Form.Control as="select" name="feedbackOptions" required>
                <option value="">Choose as Area</option>
                <option value="Property">Property</option>
                <option value="Private Debt">Private Debt</option>
                <option value="Private Equity">Private Equity</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" id="formFocus" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Details:</Form.Label>
              <Form.Control as="textarea" rows={3} id="formFocus"/>
            </Form.Group>
            <small className="text-muted">
              Let us know if you have ideas that can help make our products
              better.
            </small>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide} id="feedBackBtn" >Cancel</Button>
            <Button onClick={props.onHide} id="feedBackBtn" >Submit</Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
  
  function FeedbackModal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <button className="feedBackButton" variant="primary" onClick={() => setModalShow(true)}>
          feedback.
        </button>
        <br />
        <CenteredFeedbackModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default FeedbackModal;
