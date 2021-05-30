import React from "react";
import { Link } from "react-router-dom";

const AddAssetButton = () => {
  return (
    <React.Fragment>
      <Link to="/addAsset" className="btn btn-lg add-asset-button">
        Add an Asset
      </Link>
    </React.Fragment>
  );
};

export default AddAssetButton;
