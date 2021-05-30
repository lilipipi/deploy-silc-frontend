import React, { Component } from "react";
import { Card, Badge } from "react-bootstrap";
import logo from "../includes/asset.jpg";
import badgeLogo from "../includes/silc logo HD - EN.png";

class AdminAssetItem extends Component {
  render() {
    let asset = this.props.asset;

    var assetData = [asset.assetType, asset.isVerified];
    
    let id = "assetBadge";
    if (assetData[0] === "Property") {
      id = "assetBadge-Property";
    } else if (assetData[0] === "Private Equity") {
      id = "assetBadge-PrivateEq";
    }
    
    let unverifiedAssetMsg = "Pending Verification";
    let assetStatusMsg = " ";
    let id2 = "verifiedUserBadge"
    /* assetData[1] = true; */
    if(assetData[1] === false){
      /* assetData[1] = unverifiedAssetMsg; */
      assetStatusMsg = unverifiedAssetMsg;
      id2 = "";
    }else{
      assetStatusMsg = "Verified"
      id2 = "verifiedUserBadge"
    }

    return (
      <a
        href={`/AdminAssetDashboard/AdminAssetOverview/${asset.id}`}
        id="cardNav"
      >
        <Card className="my-3 rounded" id="assetCards">
          <Card.Img id="assetImg" src={logo} />
          <Card.ImgOverlay><Badge className={id2} variant="secondary">
                 {/*  {assetData[1]} */}{assetStatusMsg}
                </Badge>
          </Card.ImgOverlay>
          <Card.Body>
            <Card.Text as="div">
              <div className="my-2">
                <Badge className={id} variant="secondary">
                  {asset.assetType}
                </Badge>
              </div>
            </Card.Text>
            <Card.Title as="div">
              <a href={`/AdminAssetDashboard/AdminAssetOverview/${asset.id}`}>
                <strong id="assetTitle">{asset.assetTitle}</strong>
                <br />
              </a>
              <small className="text-muted">{asset.location}</small>
            </Card.Title>
            <Card.Img id="assetLogo" src={badgeLogo} />
          </Card.Body>
        </Card>
      </a>
    );
  }
}

export default AdminAssetItem;
