import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import Img from "../includes/asset.jpg"

class AssetDetails extends Component {
  render() {
    let asset = this.props.asset;
    //later change hardcoded total value to correct input value
    const investmentReceiveInPercentage = (asset.investmentGoal / 1000000) * 100;
    return (
      <div>
        <small className="text-muted">{asset.assetType}</small>
        <h6>{asset.assetTitle}</h6>
        <small className="text-muted">{asset.assetInfo}</small>
        <hr id="seperatorHr" />
        <ProgressBar now={investmentReceiveInPercentage} label={`$${asset.investmentGoal} Invested`} /><br />
        <div id="asset_detailsContainer">
          <strong>Investment Goal: </strong><p>&#36; {asset.investmentGoal}</p>
        </div>
        <div id="asset_detailsContainer">
          <strong>Interest Rate: </strong><p>{asset.interestRate}&#37;</p>
        </div>
        <div id="asset_detailsContainer">
          <strong>Investment Term: </strong><p>{asset.investmentTerm} months</p>
        </div>
        <div id="asset_detailsContainer">
          <strong>Minimum Investment: </strong><p>&#36;{asset.minInvestmentAmount}</p>
        </div>
        <hr />
      </div>
    );
  }
}

class AssetHistory extends Component {
  render() {
    let asset = this.props.asset;
    return (
      <div>
        <small className="text-muted">{asset.assetType}</small>
        <h6>{asset.assetTitle}</h6>
        <div className="timeline">
          <div className="timelineContainer right">
            <div className="timelineContent">
              <p>2021 - Lorem ipsum dolor sit ame.</p>
            </div>
          </div>
          <div className="timelineContainer right">
            <div className="timelineContent">
              <p>2020 - Lorem ipsum dolor sit ame.</p>
            </div>
          </div>
          <div className="timelineContainer right">
            <div className="timelineContent">
              <p>2010 - Lorem ipsum dolor sit ame.</p>
            </div>
          </div>
          <div className="timelineContainer right">
            <div className="timelineContent">
              <p>2008 - Lorem ipsum dolor sit ame.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class AssetImages extends Component {
  render() {
    /* let asset = this.props.asset; */
    return (
      <div>
        <Carousel className="carousel">
          <Carousel.Item interval={1000}>
            <img
              id="carouselImg"
              src={Img}
              alt="First slide"
            />
            <Carousel.Caption>
             {/*  <h3>First slide label</h3> */}
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              id="carouselImg"
              src={Img}
              alt="Second slide"
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3> */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="carouselImg"
              src={Img}
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3> */}
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export {
  AssetDetails,
  AssetHistory,
  AssetImages,
}