import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

function CourseSearchChip({
  children,
  className = "",
  color = "gray",
  variant = "dark",
  value = children
}) {
  const history = useHistory();
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

  function handleClick() {
    const query = encodeURIComponent(value);
    history.push(`/search?q=${query}`);
  }

  return (
    <div className={chipClass} onClick={handleClick}>
      {children}
    </div>
  );
}

CourseSearchChip.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.string,
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
  variant: PropTypes.oneOf(["light", "dark"])
};

export default CourseSearchChip;
