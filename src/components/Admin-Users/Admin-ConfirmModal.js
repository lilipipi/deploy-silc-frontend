import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link} from 'react-router-dom';

function MyVerticallyCenteredModal(props) {
  /* let [onSubmit] = useState({
 
  });

  let submit = (e) => {
    e.preventDefault();
    console.log(onSubmit);
  } */

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Restrict User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Are you sure you want to restrict this users access? All assets and investment records will be delete. 
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
    </Modal>
  );
}

function ConfirmationModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Link
           className="btn btn-lg add-asset-button"
        onClick={() => setModalShow(true)}
      >
        Restrict User
      </Link>
     

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ConfirmationModal;
