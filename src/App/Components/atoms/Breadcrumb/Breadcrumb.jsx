import React from "react";
import { Link, Route } from "react-router-dom";

const Breadcrumb = () =>
  <Route
    path="*"
    render={props => {
      let parts = props.location.pathname.split("/");
      const place = parts[parts.length - 1];
      parts = parts.slice(1, parts.length - 1);
      return <p>{parts.map(crumb)} {'>'} {place}</p>;
    }}
  />;

const crumb = (part, partIndex, parts) => {
  const path = [" ", ...parts.slice(0, partIndex + 1)].join(" / ");
  return <Link key={path} to={path}>{part}</Link>;
};

export default Breadcrumb;