import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";

function CourseSearchChip({
  children,
  color = "gray",
  onClick = null,
  variant = "dark"
}) {
  const [textColorLevel, bgColorLevel] =
    variant === "light" ? [500, 100] : [100, 500];
  const chipClass = classNames(
    "inline-block p-3 mr-3 mb-3 shadow text-base font-bold rounded cursor-pointer",
    {
      [`bg-${color}-${bgColorLevel}`]: true,
      [`text-${color}-${textColorLevel}`]: true
    }
  );
  return (
    <div className={chipClass} onClick={onClick}>
      {children}
    </div>
  );
}

CourseSearchChip.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf([
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "indigo",
    "purple",
    "pink"
  ]),
  variant: PropTypes.oneOf(["light", "dark"])
};

export default CourseSearchChip;
