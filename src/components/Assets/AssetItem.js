import React, { Component } from "react";
import { Card, Badge } from "react-bootstrap";
import logo from "../includes/asset.jpg";
import badgeLogo from "../includes/silc logo HD - EN.png"

class AssetItem extends Component {
  /* getComponent(event) {
    console.log('li item clicked!');
    event.currentTarget.style.transform = 'scale(1.5)';
    event.currentTarget.style.opacity = '0';
    event.currentTarget.style.zIndex = '10';
} */
  render() {
    let asset = this.props.asset;

    let assetType = asset.assetType;

    let id = "assetBadge";
    if(assetType === "Property"){
      id = "assetBadge-Property";
    }else if(assetType === "Private Equity"){
      id ="assetBadge-PrivateEq";
    }

    let unverifiedAssetMsg = "Pending Verification";
    let assetStatusMsg = " ";
    let id2 = "verifiedUserBadge"
    /* assetData[1] = true; */
    if(asset.isVerified === false){
      /* assetData[1] = unverifiedAssetMsg; */
      assetStatusMsg = unverifiedAssetMsg;
      id2 = "";
    }else{
      assetStatusMsg = "Verified"
      id2 = "verifiedUserBadge"
    }

    return (
      <a href={`/AMdashboard/AssetOverview/${asset.id}`} id="cardNav">
      <Card className="my-3 rounded" id="assetCards" /* onClick={this.getComponent.bind(this)} */>
        {/* <a href={`/AMdashboard/AssetOverview/${asset.id}`}> */}
           <Card.Img id="assetImg" src={logo} />
           <Card.ImgOverlay><Badge className={id2} variant="secondary">
                 {/*  {assetData[1]} */}{assetStatusMsg}
                </Badge>
          </Card.ImgOverlay>
       {/*  </a> */}
        <Card.Body>
          <Card.Text as="div">
            <div className="my-2">
              <Badge className={id} variant="secondary">{asset.assetType}</Badge>
            </div>
          </Card.Text>
            <Card.Title as="div">
            <a href={`/AMdashboard/AssetOverview/${asset.id}`}>
              <strong id="assetTitle">{asset.assetTitle}</strong><br />
            </a>
              <small className="text-muted">{asset.location}</small>
            </Card.Title>
            <Card.Img id="assetLogo" src={badgeLogo} />
          {/* <Card.Text as="div">
            <div className="my-3">
              <small className="text-muted">{asset.location}</small>
            </div>
          </Card.Text> */}
        </Card.Body>
      </Card>
      </a>
    );
  }
}

export default AssetItem;
