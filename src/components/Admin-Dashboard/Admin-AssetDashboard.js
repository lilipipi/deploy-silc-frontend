import React, { Component } from "react";
import AdminAssetItem from "../Admin-Assets/Admin-AssetItem";
import { Row, Col, Pagination, Jumbotron } from "react-bootstrap";
import "react-input-range/lib/css/index.css";
import { connect } from "react-redux";
import { getAdminAssets } from "../../actions/assetAction";
import { getUsers } from "../../actions/securityActions";
import AdminAssetSort from "../Admin-Assets/Admin-AssetSort";

class AdminAssetDashboard extends Component {
  componentDidMount() {
    this.props.getAdminAssets();
    this.props.getUsers();
  }
  render() {
    console.log(this.props);
    const { allData } = this.props.asset;
    const { data } = this.props.security;

  
    const allUsers = (sum, obj) => sum + (obj.investor_type != null ? 1 : 0);
    const count = data.reduce(allUsers, 0);
    

    return (
      <div>
        <div>
          <h1 className="primary-header">Recently Added Assets</h1>
          <AdminAssetSort />
        </div>
        <Row style={{ marginTop: "50px", position: "relative", width: "100" }}>
          <Col>
            <Jumbotron id="admin-userStatsCard">
              <div className="admin-userStats">
                <h1>1</h1>
                <p>Total Assets</p>
              </div>
            </Jumbotron>
          </Col>
          <Col>
            <Jumbotron id="admin-userStatsCard">
              <div className="admin-userStats">
                <h1>5</h1>
                <p>Total Asset Managers</p>
              </div>
            </Jumbotron>
          </Col>
          <Col>
            <Jumbotron id="admin-userStatsCard">
              <div className="admin-userStats">
                <h1>{count}</h1>
                <p>Total Investors</p>
              </div>
            </Jumbotron>
          </Col>
        </Row>
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
        <hr />
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  asset: state.asset,
  security: state.security,
});

export default connect(mapStateToProps, { getAdminAssets, getUsers })(
  AdminAssetDashboard
);
