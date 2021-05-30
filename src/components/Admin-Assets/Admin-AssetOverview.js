import React, { Component } from "react";
import { Row, Col, Tab, Tabs } from "react-bootstrap";
import { connect } from "react-redux";
import { AdminAssetDetails, AdminAssetHistory, AdminAssetImages } from './Admin-AssetDetails';
import { getAdminAsset } from "../../actions/assetAction";
import ModalBtn from "./Admin-Modal";

class AdminAssetOverview extends Component {
  componentDidMount() {
    this.props.getAdminAsset(this.props.match.params.id);
    console.log(this.props.location);
  }
  render() {
    console.log(this.props);
    const  asset  = this.props.asset.data;
    return (
      <div>
        <div>
          <h1 className="primary-header">Admin Asset Overview</h1>
        </div>
        <Row id="assetView">
          <Col>
           <AdminAssetImages />
          </Col>
          <Col>
            <Tabs defaultActiveKey="Overview" id="uncontrolled-tab-example">
              <Tab eventKey="Overview" title="Overview">
                <div key={asset.id} sm={12} md={6} lg={4} xl={4}>
                  <AdminAssetDetails asset={asset}/>
                </div>
              </Tab>
              <Tab eventKey="History" title="History">
                <div key={asset.id} sm={12} md={6} lg={4} xl={4}>
                  <AdminAssetHistory asset={asset} />
                </div>
              </Tab>
            </Tabs>
            <a href={`/AdminAssetDashboard`}>
            <input
              type="submit"
              className="btn btn-primary"
              id="submitBtn"
              value="Push to Marketplace"
            />
           </a>
            <ModalBtn />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  asset: state.asset,
});

export default connect(mapStateToProps, { getAdminAsset })(AdminAssetOverview);
