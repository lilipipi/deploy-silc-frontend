import React, { useState, useEffect, Component } from "react";
import { Row, Col } from "react-bootstrap";
import "react-input-range/lib/css/index.css";
import UserDetails from "../Profile/UserDetails";
import UserSettings from "../Profile/UserSettings";
import axios from "axios";
import { getUser } from "../../actions/securityActions";
import { connect } from "react-redux";



/* function UserProfile() {
  const id = localStorage.getItem("id");
  console.log(id);
  const [user, setUser] = useState({});

  useEffect(async () => {
    await axios.get(`http://localhost:8000/api/user/${id}`).then((response) => {
      setUser(response.data.data);
    });
  }, []);

  return (
    <div>
      <div>
        <h1 className="primary-header">Profile &#x26; Settings</h1>
      </div>
      <Row className="userCardContainer">
        <Col className="userCardCol" id="userSettingCol">
          <UserSettings />
        </Col>
        <Col className="userCardCol" sm={3}>
          <UserDetails user={user} />
        </Col>
      </Row>
      <br />
      <hr />
    </div>
  );
}
export default UserProfile; */

class UserProfile extends Component {
  componentDidMount() {
    this.props.getUser(localStorage.getItem('id'));
  }
  render() {
    console.log(this.props);
    const { userData } = this.props.security;
    

    return (
      <div>
        <div>
          <h1 className="primary-header">Profile &#x26; Settings</h1>
        </div>
        <Row className="userCardContainer">
          <Col className="userCardCol" id="userSettingCol">
            <UserSettings />
          </Col>
          <Col className="userCardCol" sm={3}>
            <UserDetails user={userData} />
          </Col>
        </Row>
        <br />
        <hr />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps, { getUser })(UserProfile);
