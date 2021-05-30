import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { createAsset } from "../../actions/assetAction";
import { withRouter} from 'react-router-dom';
  
class AddAsset extends Component {
  constructor() {
    super();
    this.state = {
      assetType: "",
      assetTitle: "",
      location: "",
      investmentGoal: "",
      investmentTerm: "",
      minInvestmentAmount: "",
      interestRate: "",
      investmentReceived: "",
      assetInfo: "",
      eventDate: "",
      eventInfo: "",
      file: null, 
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.imageChange = this.imageChange.bind(this); 
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    
  }

   imageChange(e) {
    this.setState({
      file: URL.createObjectURL(e.target.files[0])
    });
  } 

  onSubmit(e) {
    e.preventDefault();
    const newAsset = {
      assetType: this.state.assetType,
      assetTitle: this.state.assetTitle,
      location: this.state.location,
      investmentGoal: this.state.investmentGoal,
      investmentTerm: this.state.investmentTerm,
      minInvestmentAmount: this.state.minInvestmentAmount,
      interestRate: this.state.interestRate,
      investmentReceived: this.state.investmentReceived,
      assetInfo: this.state.assetInfo,
      eventDate: this.state.eventDate,
      eventInfo: this.state.eventInfo,
      file: this.state.file,
    };

    this.props.createAsset(newAsset, this.props.history);
    this.props.history.push("/AMdashboard");
  }

  render() {
    return (
      <div>
        <div>
          <h5>Add an Asset</h5>
        </div>
        <div>
          <div className="row">
            <div className="col-md-12 m-auto">
              <hr />
              <form onSubmit={this.onSubmit}>
                <Row>
                  <Col xs={6}>
                    <div className="form-group">
                      {/* <h6 className="form-group p-3">Asset Type</h6> */}
                      {/* {["checkbox"].map((type) => (
                        <div key={`inline-${type}`} className="p-3 rounded">
                          <Form.Check
                            inline
                            label="Property"
                            type={type}
                            id={`inline-${type}-1`}
                            value="Property"
                            name="assetType"
                            onChange={this.onChange}
                          />
                          <Form.Check
                            inline
                            label="Private Debt"
                            type={type}
                            id={`inline-${type}-2`}
                            value="Private Debt"
                            name="assetType"
                            onChange={this.onChange}
                          />
                          <Form.Check
                            inline
                            label="Private Equity"
                            type={type}
                            id={`inline-${type}-3`}
                            value="Private Equity"
                            name="assetType"
                            onChange={this.onChange}
                          />
                        </div>
                      ))} */}
                      <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Asset Type</Form.Label>
                      <Form.Control 
                      as="select"
                      name="assetType"
                      onChange={this.onChange}
                      required>
                         <option value="">Choose Asset Type</option>
                        <option value="Property">Property</option>
                        <option value="Private Debt">Private Debt</option>
                        <option value="Private Equity">Private Equity</option>
                      </Form.Control>
                      </Form.Group>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={6}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="my-3 p-3 rounded form-control form-control-lg"
                        id="formFocus"
                        placeholder="Asset Title"
                        name="assetTitle"
                        value={this.state.assetTitle}
                        onChange={this.onChange}
                      required/>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="my-3 p-3 rounded form-control form-control-lg"
                        id="formFocus"
                        placeholder="Location"
                        name="location"
                        value={this.state.location}
                        onChange={this.onChange}
                      required/>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={3}>
                    <div className="form-group">
                      <input
                        type="number"
                        className="my-3 p-3 rounded form-control form-control-lg"
                        id="formFocus"
                        placeholder="Investment Goal ($)"
                        name="investmentGoal"
                        value={this.state.investmentGoal}
                        onChange={this.onChange}
                      required/>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="my-3 p-3 rounded form-control form-control-lg"
                        id="formFocus"
                        placeholder="Investment Term (in months)"
                        name="investmentTerm"
                        value={this.state.investmentTerm}
                        onChange={this.onChange}
                      required/>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className="form-group">
                      <input
                        type="number"
                        className="my-3 p-3 rounded form-control form-control-lg"
                        id="formFocus"
                        placeholder="Min. Investment Amount ($)"
                        name="minInvestmentAmount"
                        value={this.state.minInvestmentAmount}
                        onChange={this.onChange}
                      required/>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className="form-group">
                      <input
                        type="number"
                        className="my-3 p-3 rounded form-control form-control-lg"
                        id="formFocus"
                        placeholder="Interest Rate (%)"
                        name="interestRate"
                        value={this.state.interestRate}
                        onChange={this.onChange}
                      required/>
                    </div>
                  </Col>
                </Row>
                <Row>
                <Col>
                    <div className="form-group">
                      <input
                        type="text"
                        className="my-3 p-3 rounded form-control form-control-lg"
                        id="formFocus"
                        placeholder="Asset Info"
                        name="assetInfo"
                        value={this.state.assetInfo}
                        onChange={this.onChange}
                      required/>
                    </div>
                  </Col>
                </Row>
                <Row>
                <Col>
               <Form.Group className="imageInputContainer">
                <input type="file" onChange={this.imageChange}/>
                
                  {/* <img width="10%" src={this.state.file}/> */}
              </Form.Group>
              </Col>
              </Row> 
              <br />
              <Form.Label>Asset Event History</Form.Label>
              <Row>
                  <Col xs={6}>
                    <div className="form-group">
                      <input
                        type="date"
                        className="my-3 p-3 rounded form-control form-control-lg"
                        id="formFocus"
                        placeholder="Event Date"
                        name="eventDate"
                        value={this.state.eventDate}
                        onChange={this.onChange}
                      />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="my-3 p-3 rounded form-control form-control-lg"
                        id="formFocus"
                        placeholder="Event Info"
                        name="eventInfo"
                        value={this.state.eventInfo}
                        onChange={this.onChange}
                      />
                    </div>
                  </Col>
                </Row>         
                <input
                  type="submit"
                  className="btn btn-primary"
                  id="submitBtn"
                  value="Proceed to Due Diligence"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { createAsset })(withRouter(AddAsset));
