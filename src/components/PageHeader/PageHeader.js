import React from "react";
import Image from "react-bootstrap/Image";
import logo from "../../media/logo.png";
import classes from './PageHeader.module.css';

const PageHeader = props => (
  <div className="py-4 text-center" data-test="page-header">
    <Image
      src={logo}
      rounded
      className={["d-block mx-auto mb-4", classes.Logo].join(' ')}
      style={{ width: "72px", height: "72px" }}
      data-test="header-image"
    />
    <h2 data-test="heading">
      GIF Search <span className="lead">(with Giphy)</span>{" "}
    </h2>
    <p className="lead" data-test="paragraph">
      Use the search bar below to search for a specific type of GIF image
    </p>
  </div>
);

export default PageHeader;