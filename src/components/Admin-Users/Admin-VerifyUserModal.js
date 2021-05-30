import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function MyVerticallyCenteredModal(props) {
  const [address, setAddress] = useState({});
  const [investorType, setInvestorType] = useState({});
  const [contact, setContact] = useState({});
  const [am, setAm] = useState({});
  const [inv, setInvestor] = useState({});
  const userId = props.userId;

  useEffect(async () => {
    await axios
      .get(`https://immense-refuge-04404.herokuapp.com/api/user/${userId}`)
      .then((response) => {
        setAddress(response.data.data.address);
        setContact(response.data.data.contact_no);
        setInvestorType(response.data.data.investor_type);
        setAm(response.data.data.AM);
        setInvestor(response.data.data.investor);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(props.userId);

    const userForm = {
      address: address,
      contact_no: contact,
      userState: 2,
      investor_type: investorType,
      investor: inv,
      AM: am,
    };
    await axios
      .put(
        `https://immense-refuge-04404.herokuapp.com/api/user/${userId}`,
        userForm
      )
      .then((response) => {
        console.log(response);
        console.log("this is user type: " + investorType);
      });
    window.location.reload();
  };

  var amVal = 1;
  var invVal = 1;

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Verify User
        </Modal.Title>
      </Modal.Header>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Modal.Body>
          <Form.Label>User Role</Form.Label>
          <Form.Group controlId="formBasicCheckbox">
            <div key={`inline-checkbox`} className="mb-3">
              <Form.Control
                className="admin-verifyUserModalCheck"
                as="checkbox"
                name="assetManager"
                value={am}
                onChange={(e) => setAm(e.target.value)}
              >
                <Form.Check
                  inline
                  label="Asset Manager"
                  name="AM"
                  type="checkbox"
                  id={`inline-checkbox-1`}
                  value={amVal}
                />
              </Form.Control>
              <Form.Control
                className="admin-verifyUserModalCheck"
                as="checkbox"
                name="investor"
                value={inv}
                onChange={(e) => setInvestor(e.target.value)}
              >
                <Form.Check
                  inline
                  label="Investor"
                  name="Inv"
                  type="checkbox"
                  id={`inline-checkbox-2`}
                  value={invVal}
                />
              </Form.Control>
            </div>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Investor Type</Form.Label>
            <Form.Control
              as="select"
              name="investorType"
              value={investorType}
              onChange={(e) => setInvestorType(e.target.value)}
              required
            >
              <option>Select One:</option>
              <option value="Individual">Individual</option>
              <option value="Australian Company">Australian Company</option>
              <option value="Company Trustee">Company Trustee</option>
              <option value="Individual Trustee">Individual Trustee</option>
            </Form.Control>
          </Form.Group>
          {/* <Form.Label>Contact:</Form.Label>
          <input
            className="my-1 p-3 rounded form-control form-control-md"
            type="number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="+61 1 2345 6789"
            id="formFocus"
            required
          /> */}
          <Form.Group>
            <Form.Label>Contact:</Form.Label>
            <Form.Control
              className="my-1 p-3 rounded form-control form-control-md"
              type="number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="+61 1 2345 6789"
              id="formFocus"
              required
            />
          </Form.Group>
          {/* <Form.Label>Address:</Form.Label>
          <input
            rows={3}
            id="formFocus"
            className="my-1 p-3 rounded form-control form-control-md"
            name="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="123 SILC Rd, Melbourne Vic 4321"
            required
          /> */}
          <Form.Group>
            <Form.Label>Address:</Form.Label>
            <Form.Control
              rows={3}
              id="formFocus"
              className="my-1 p-3 rounded form-control form-control-md"
              name="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="123 SILC Rd, Melbourne Vic 4321"
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="feedBackBtn"
            id="submitBtn-standard"
            onClick={props.onHide}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            className="feedBackBtn"
            id="submitBtn-standard"
            /* onClick={props.onHide} */
            value="Confirm"
          >
            Confirm
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

function VerifyUserModal(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [userId] = React.useState(props.userId);

  return (
    <>
      <Link
        className="btn btn-lg add-asset-button"
        onClick={() => setModalShow(true)}
      >
        Verify User
      </Link>

      <MyVerticallyCenteredModal
        userId={userId}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default VerifyUserModal;
