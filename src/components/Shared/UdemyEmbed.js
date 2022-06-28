import React from "react";
import PropTypes from "prop-types";

const UdemyEmbed = ({ embedId }) => (
  <div className="image-responsive">
    <img
      width="380"
      height="240"
      alt=""
      src={`https://udemy-certificate.s3.amazonaws.com/image/${embedId}.jpg`}
      title="Embedded youtube"
    />
  </div>
);

UdemyEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default UdemyEmbed;