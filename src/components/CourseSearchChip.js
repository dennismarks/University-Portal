import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";

function CourseSearchChip({
  children,
  className = "",
  color = "gray",
  onClick = null,
  variant = "dark"
}) {
  const [textColorLevel, bgColorLevel] =
    variant === "light" ? [500, 100] : [100, 500];
  const chipClass = classNames(
    "block p-3 mr-3 mb-3 shadow text-base text-center font-bold rounded cursor-pointer whitespace-no-wrap",
    className,
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
  className: PropTypes.string,
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
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["light", "dark"])
};

export default CourseSearchChip;
