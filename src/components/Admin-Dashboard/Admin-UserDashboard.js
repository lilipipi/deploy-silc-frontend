import React, { Component} from "react";
import AdminUserItem from "../Admin-Users/Admin-UserItem";
import { Row, Col, Pagination } from "react-bootstrap";
import "react-input-range/lib/css/index.css";
import { connect } from "react-redux";
import { getUsers } from "../../actions/securityActions";

 class AdminUserDashboard extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    console.log(this.props);
    const { data } = this.props.security;
    
    return (
      <div>
        <div>
          <h1 className="primary-header">Users</h1>
        </div>
        <div className="assetCardContainer">
          <div className="flexCol2">
             <Row>
              {data.map((userItem) => (
                <Col key={userItem.id} sm={12} md={6} lg={3} xl={3}>
                  <AdminUserItem security={userItem} />
                </Col>
              ))}
            </Row> 
            <Row>
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
  security: state.security,
});

export default connect(mapStateToProps, { getUsers })(AdminUserDashboard); 
