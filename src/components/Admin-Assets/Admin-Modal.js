import React, {useState} from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { withRouter} from 'react-router-dom';

function MyVerticallyCenteredModal(props) {
  let [onSubmit] = useState({
 
  });

  let submit = (e) => {
    e.preventDefault();
    console.log(onSubmit);
     this.props.history.push("/AdminAssetDashboard"); 
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <form  onSubmit={submit}> 
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Reason for removal of the asset.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicCheckbox" id="loginformCheckbox">
            <Form.Check
              className="text-muted"
              type="checkbox"
              label="Asset Details are flawed."
              required
            />
            <Form.Check
              className="text-muted"
              type="checkbox"
              label="Asset violates rules of application."
              required
            />
            <Form.Check
              className="text-muted"
              type="checkbox"
              label="Asset has reached expiry based on rules."
              required
            />
            <Form.Check
              className="text-muted"
              type="checkbox"
              label="Asset manager has disabled the account."
              required
            />
            <Form.Check
              className="text-muted"
              type="checkbox"
              label="Asset manager has deleted the asset."
              required
            />
            <Form.Check
              className="text-muted"
              type="checkbox"
              label="Investment goal has been met."
              required
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Others:</Form.Label>
              <Form.Control as="textarea" rows={3} id="formFocus"/>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className="feedBackBtn" id="submitBtn-standard" onClick={props.onHide}>
            Cancel
          </Button>

          <Button
            type="submit"
            className="feedBackBtn"
            id="submitBtn-standard"
            onClick={props.onHide}
            value="Confirm"
          >
            Confirm
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

function SelectEntityModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="primary"
        className="btn btn-primary"
        id="submitBtn"
        onClick={() => setModalShow(true)}
      >
        Pull from Marketplace
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default withRouter(SelectEntityModal);
