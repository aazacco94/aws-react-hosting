import React from "react";
import PropTypes from "prop-types";

const GoogleDriveEmbed = ({ embedId }) => (
  <div className="image-responsive">
    <img
      width="380"
      height="240"
      alt=""
      src={`https://drive.google.com/thumbnail?id=${embedId}`}
      title="Embedded Google Document"
    />
  </div>
);

GoogleDriveEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default GoogleDriveEmbed;