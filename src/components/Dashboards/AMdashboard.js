import React, { Component } from "react";
import AssetItem from "../Assets/AssetItem";
import { Row, Col, Jumbotron, Badge } from "react-bootstrap";
import "react-input-range/lib/css/index.css";
import { connect } from "react-redux";
import { getUserAssets } from "../../actions/assetAction";
import AddAssetButton from "../Assets/AddAssetButton";
import { getUser } from "../../actions/securityActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
/* import AssetFilter from "../Assets/assetFilter"*/
/* import AssetSort from "../Assets/AssetSort"; */

class AMdashboard extends Component {
  componentDidMount() {
    this.props.getUserAssets(localStorage.getItem('id'));
    this.props.getUser(localStorage.getItem('id'));
  }
  render() {
    console.log(this.props);
    const { allData } = this.props.asset;
    const { userData } = this.props.security;
    
    var totalAssets = 0;

    for(var j = 0; j < allData.length; j++){
      totalAssets = j + 1;
     }

    const assetInVerification = (sum, obj) => sum + (obj.isVerified == false ? 1 : 0);
    const count = allData.reduce(assetInVerification, 0);
    
    var assetsListed = totalAssets - count;
    
    /* userData.userState = 1; */
    if ( userData.userState !== 0 && userData.userState !== 1 && userData.userState !== 3) {
      var codeBlock = (
        <Badge variant="success" style={{marginLeft: "-10px"}}><FontAwesomeIcon
          icon={faCheckCircle}
          size="lg"
          style={{marginLeft: "0px"}}
        /> Verified</Badge>
      );
    }

    return (
      <div>
        <div>
          <h1 className="primary-header">Welcome {userData.name}</h1>
          {codeBlock}
         {/*  <AssetSort /> */}
         <AddAssetButton />
        </div>
        <Row style={{ marginTop: "50px" }}>
              <Col>
                <Jumbotron id="admin-userStatsCard">
                  <div className="admin-userStats">
                    <h1>{assetsListed}</h1>
                    <p>Asset Listed</p>
                  </div>
                  <div className="admin-userStats">
                    <h1>{count}</h1>
                    <p>Assets in Verification</p>
                  </div>
                </Jumbotron>
              </Col>
            </Row>
        <div className="assetCardContainer">
          {/* <div className="flexCol">
          <AssetFilter />
          </div> */}
          <div className="flexCol2">
            <Row>
              {allData.map((assetItem) => (
                <Col key={assetItem.id} sm={12} md={6} lg={3} xl={3}>
                  <AssetItem asset={assetItem} />
                </Col>
              ))}
            </Row>
            {/* <AddAssetButton /> */}
          </div>
          <br />
        </div>
        <hr />
        {/* <Pagination>
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
        </Pagination> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  asset: state.asset,
  security: state.security,
});

export default connect(mapStateToProps, { getUserAssets, getUser })(AMdashboard);

