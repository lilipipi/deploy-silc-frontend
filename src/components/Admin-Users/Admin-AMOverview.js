import React, { Component } from "react";
import { Row, Col, Jumbotron } from "react-bootstrap";
import "react-input-range/lib/css/index.css";
import Img from "../includes/sampleUserIcon.jpg";
import { connect } from "react-redux";
import { getUserAssets } from "../../actions/assetAction";
import AdminAssetItem from "../Admin-Assets/Admin-AssetItem";
import VerifyUserModal from "./Admin-VerifyUserModal";
import ConfirmationModal from "./Admin-ConfirmModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { getUser } from "../../actions/securityActions";

class AdminAMOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.id,
    };
  }
  componentDidMount() {
    this.props.getUserAssets(this.props.match.params.id);
    this.props.getUser(this.props.match.params.id);
  }

  // componentDidUpdate(){
  //   // console.log("test: " + this.props.security.userData.id)
  //   this.setState ({ userId: this.props.security.userData.id})
  // }

  render() {
    console.log("user ID: " + this.state.userId);
    const { allData } = this.props.asset;
    const { userData } = this.props.security;

    /* var assetsListed = 0; */
    let unverifiedUserMsg = "Pending Verification";

    var userInfo = [
      userData.investor_type,
      userData.contact_no,
      userData.userState,
      userData.address,
    ];

    for (var i = 0; i < userInfo.length; i++) {
      if (userInfo[i] === null) {
        userInfo[i] = unverifiedUserMsg;
      }
    }

    var totalAssets = 0;

    for(var j = 0; j < allData.length; j++){
      totalAssets = j + 1;
     }

    const assetInVerification = (sum, obj) => sum + (obj.isVerified == false ? 1 : 0);
    const count = allData.reduce(assetInVerification, 0);
    
    var assetsListed = totalAssets - count;

    /* userInfo[2] = 2; */
    if (userInfo[2] !== 0 && userInfo[2] !== 1 && userInfo[2] !== 3) {
      var codeBlock = (
        <FontAwesomeIcon
          className="verifiedUserBadge-Profile"
          icon={faCheckCircle}
          size="lg"
        />
      );
    }

    return (
      <div>
        <div>
          <h1 className="primary-header">Users</h1>
          <ConfirmationModal />
          <VerifyUserModal userId={this.state.userId} />
        </div>
        <div className="assetCardContainer">
          <div className="flexCol2">
            <Row>
              <Col sm={12} md={6} lg={3} xl={3}>
                <img id="admin-userImage" src={Img} alt="userProfileImage" />
              </Col>
              <Col>
                <div className="admin-userTitleTag">
                  <small className="text-muted">{userInfo[0]}</small>
                  <br />
                  <strong>{userData.name}</strong>
                  {codeBlock}
                </div>
                <div className="admin-userTitleTag">
                  <p>
                    <small className="text-muted">Email: </small>
                    {userData.email}
                  </p>
                  <p>
                    <small className="text-muted">Contact: </small>
                    {userInfo[1]}
                  </p>
                  <p>
                    <small className="text-muted">Address: </small>
                    {userInfo[3]}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <br />
        </div>
        <Row style={{ marginTop: "50px", position: "relative", width: "100" }}>
          <Col>
            <Jumbotron id="admin-userStatsCard">
              <div className="admin-userStats">
                <h1>{assetsListed}</h1>
                <p>Asset Listed</p>
              </div>
              {/*  <div className="admin-userStats">
                    <h1>0</h1>
                    <p>Investment Received</p>
                  </div> */}
              <div className="admin-userStats">
                <h1>{count}</h1>
                <p>Assets in Verification</p>
              </div>
              {/*  <div className="admin-userStats">
                    <h1>0</h1>
                    <p>Investment Goal Met</p>
                  </div> */}
            </Jumbotron>
          </Col>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Col>
            <h1 className="primary-header">Listed Asset(s)</h1>
            <div className="assetCardContainer">
              <div className="flexCol2">
                <Row>
                  {allData.map((assetItem) => (
                    <Col key={assetItem.id} sm={12} md={6} lg={3} xl={3}>
                      <AdminAssetItem asset={assetItem} />
                    </Col>
                  ))}
                </Row>
              </div>
              <br />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  asset: state.asset,
  security: state.security,
});

export default connect(mapStateToProps, { getUserAssets, getUser })(
  AdminAMOverview
);
