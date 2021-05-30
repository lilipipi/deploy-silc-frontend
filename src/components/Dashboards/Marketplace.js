import React, { Component } from "react";
import AssetItem from "../Assets/AssetItem";
import { Row, Col, Pagination } from "react-bootstrap";
import "react-input-range/lib/css/index.css";
import { connect } from "react-redux";
import { getAssets } from "../../actions/assetAction";
import AddAssetButton from "../Assets/AddAssetButton";
/* import AssetFilter from "../Assets/assetFilter"*/
import AssetSort from "../Assets/AssetSort";

class AMdashboard extends Component {
  componentDidMount() {
    this.props.getAssets();
  }
  render() {
    console.log(this.props);
    const { allData } = this.props.asset;
    return (
      <div>
        <div>
          <h1 className="primary-header">Marketplace</h1>
           <AssetSort /> 
        </div>
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
             <AddAssetButton />
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
});

export default connect(mapStateToProps, { getAssets })(AMdashboard);
