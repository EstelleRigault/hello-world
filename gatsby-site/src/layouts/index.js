import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.css";
import "./classStruggles.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Hello Avocado"
      meta={[
        { name: "Hello Avocado chat app", content: "Tasty web treats" },
        { name: "crpyto chat newsletter avocado", content: "sample, something" }
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300|Tienne:700"
        rel="stylesheet"
      />
    </Helmet>
    <div
      style={{
        // margin: "0 auto",
        // maxWidth: 960,
        // padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
