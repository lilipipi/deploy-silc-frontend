import React, { Component } from "react";
import { Row, Col, Tab, Tabs } from "react-bootstrap";
import { connect } from "react-redux";
import { AssetDetails, AssetHistory, AssetImages } from './assetDetails';
import { getAsset } from "../../actions/assetAction";

class AssetOverview extends Component {
  componentDidMount() {
    this.props.getAsset(this.props.match.params.id);
    console.log(this.props.location);
  }
  render() {
    console.log(this.props);
    const  asset  = this.props.asset.data;
    return (
      <div>
        <div>
          <h1 className="primary-header">Marketplace</h1>

        </div>
        <Row id="assetView">
          <Col>
           <AssetImages />
          </Col>
          <Col>
            <Tabs defaultActiveKey="Overview" id="uncontrolled-tab-example">
              <Tab eventKey="Overview" title="Overview">
                <div key={asset.id} sm={12} md={6} lg={4} xl={4}>
                  <AssetDetails asset={asset} />
                </div>
              </Tab>
              <Tab eventKey="History" title="History">
                <div key={asset.id} sm={12} md={6} lg={4} xl={4}>
                  <AssetHistory asset={asset} />
                </div>
              </Tab>
            </Tabs>
            <a href={`/AMdashboard`}>
            <input
              type="submit"
              className="btn btn-primary"
              id="submitBtn"
              value="Apply to Invest"
            />
           </a>
           <a href={`/AMdashboard`}>
            <input
              type="submit"
              className="btn btn-primary"
              id="submitBtn"
              value="Enquire with SILC"
            />
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  asset: state.asset,
});

export default connect(mapStateToProps, { getAsset })(AssetOverview);
