import React from "react";
import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Entity Application Forms
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Apply to become an Individual Investor. &ensp;
        <a
          href="https://immense-refuge-04404.herokuapp.com"
          className="feedBackButton"
          variant="primary"
        >
          Click here.
        </a>
        <br />
        Apply to update entity as an Australian Company Investor. &ensp;
        <a
          href="https://immense-refuge-04404.herokuapp.com"
          className="feedBackButton"
          variant="primary"
        >
          Click here.
        </a>
        <br />
        Apply to update entity as a Company Trustee Investor. &ensp;
        <a
          href="https://immense-refuge-04404.herokuapp.com"
          className="feedBackButton"
          variant="primary"
        >
          Click here.
        </a>
        <br />
        Apply to update entity as an Individual Trustee Investor. &ensp;
        <a
          href="https://immense-refuge-04404.herokuapp.com"
          className="feedBackButton"
          variant="primary"
        >
          Click here.
        </a>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function SelectEntityModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="primary"
        className="my-1 p-2 rounded form-control form-control-md"
        id="submitBtn"
        onClick={() => setModalShow(true)}
        block
      >
        Entity Types
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default SelectEntityModal;
