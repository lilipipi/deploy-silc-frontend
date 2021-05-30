import React, { Component } from "react";
import { Card, Badge } from "react-bootstrap";
import userImg from "../includes/sampleUserIcon.jpg";

class AdminAssetItem extends Component {
  render() {
    let user = this.props.security;
   
    let unverifiedUserMsg = "Pending Verification";
    var userData = [user.investor_type];
    for (var i = 0; i < userData.length; i++) {
      if (userData[i] === null) {
        userData[i] = unverifiedUserMsg;
      }
    }
    
    var url = `/AdminUserDashboard/AdminAMOverview/${user.id}`;
    if(userData[0] === "Investor"){
      url = `/AdminUserDashboard/AdminInvOverview/${user.id}`;
    }
    else if(userData[0] === "Asset Manager"){
      url = `/AdminUserDashboard/AdminAMOverview/${user.id}`;
    }
    
    let id = "verifiedUserBadge";
    if(userData[0] === unverifiedUserMsg){
      id = "";
    }
    return (
      <a href= {url}/* {`/AdminUserDashboard/AdminAMOverview/${user.id}`} */ id="cardNav">
      <Card className="my-3 rounded" id="assetCards">
           <Card.Img id="assetImg" src={userImg} />
        <Card.Body>
          <Card.Text as="div">
            <div className="my-2">
              <Badge className={id} variant="secondary">{userData[0]}</Badge>
            </div>
          </Card.Text>
            <Card.Title as="div">
             <a href={url}/* {`/AdminUserDashboard/AdminInvOverview/${user.id}`} */> 
              <strong id="assetTitle">{user.name}</strong><br />
             </a> 
              <small className="text-muted">{user.email}</small>
            </Card.Title>
        </Card.Body>
      </Card>
      </a>
    );
  }
}

export default AdminAssetItem;
