/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import "./styles.scss";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div
    className={`menu-item ${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP</span>
    </div>
  </div>
);

MenuItem.defaultProps = {
  size: "",
};

MenuItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  title: PropTypes.string.isRequired,
  history: PropTypes.node.isRequired,
  match: PropTypes.node.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default withRouter(MenuItem);
