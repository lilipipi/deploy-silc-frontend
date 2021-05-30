import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "react-input-range/lib/css/index.css";
import userImg from "../includes/sampleUserIcon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

class UserDetails extends Component {
  render() {
    let userInfo = this.props.user;
    console.log(userInfo);

    let unverifiedUserMsg = "Pending Verification";
    var userData = [
      userInfo.investor_type,
      userInfo.contact_no,
      userInfo.userState,
      userInfo.address,
      userInfo.investor,
      userInfo.AM
    ];
    for (var i = 0; i < userData.length; i++) {
      if (userData[i] === null) {
        userData[i] = unverifiedUserMsg;
      }
    }
    /* userData[2] = 2; */
    if (userData[2] !== 0 && userData[2] !== 1 && userData[2] !== 3) {
      var codeBlock = (
        <FontAwesomeIcon
          className="verifiedUserBadge-Profile"
          icon={faCheckCircle}
          size="xs"
        />
      );
    }

    var codeBlock2 = "";
    
    if (userData[4] === 1 && userData[5] === 1) {
       codeBlock2 = (
        <div>
        <Card.Text className="userDetails">
        <small className="text-muted">User Type:</small>
        <h6>Asset Manager</h6>
      </Card.Text>
        <Card.Text className="userDetails">
        <small className="text-muted">Investor Type:</small>
        <h6>{userData[0]}</h6>
      </Card.Text>
        </div>
      );
    }else if (userData[4] === 1) {
      codeBlock2 = (
       <Card.Text className="userDetails">
       <small className="text-muted">Investor Type:</small>
       <h6>{userData[0]}</h6>
     </Card.Text>
     );
   }else if (userData[5] === 1) {
      codeBlock2 = (
       <Card.Text className="userDetails">
       <small className="text-muted">User Type:</small>
       <h6>{userData[0]}</h6>
     </Card.Text>
     );
   }else{
    codeBlock2 = (
      <Card.Text className="userDetails">
      <small className="text-muted">User Type:</small>
      <h6>Pending Verification</h6>
    </Card.Text>
    );
   }
  

    return (
      <div>
        <Card className="userCardStyle">
          <div id="userImageContainer">
            <Card.Img variant="top" src={userImg} className="userImage" />
            <Card.Title>
              <h3 className="text-center">
                {userInfo.name}
                {codeBlock}
              </h3>
            </Card.Title>
          </div>
          <Card.Body id="userDetailsContainer">
            {codeBlock2}
            <br />
            <Card.Text className="userDetails">
              <small className="text-muted">Email:</small>
              <h6>{userInfo.email}</h6>
            </Card.Text>
            <br />
            <Card.Text className="userDetails">
              <small className="text-muted">Contact:</small>
              <h6>{userData[1]}</h6>
            </Card.Text>
            <br />
            <Card.Text className="userDetails">
              <small className="text-muted">Address:</small>
              <h6>{userData[3]}</h6>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default UserDetails;
