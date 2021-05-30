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

class AdminInvOverview extends Component {
  componentDidMount() {
    this.props.getUserAssets(this.props.match.params.id);
    this.props.getUser(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    const { allData } = this.props.asset;
    const { userData } = this.props.security;

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
          <VerifyUserModal />
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
        <Row style={{ marginTop: "50px" }}>
          <Col>
            <Jumbotron id="admin-userStatsCard">
              <div className="admin-userStats">
                <h1>{userData.num_accepted_assets}</h1>
                <p>Invested Asset</p>
              </div>
              <div className="admin-userStats">
                <h1>{userData.num_pending_assets}</h1>
                <p>Application In Verification</p>
              </div>
            </Jumbotron>
          </Col>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Col>
            <h1 className="primary-header">Asset(s) Invested In</h1>
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
  AdminInvOverview
);
