import { Link } from "react-router-dom";
import React from "react";

function CourseMiniCard({
  courseCode,
  courseName,
  description,
  courseLink,
  tags
}) {
  return (
    <div className="bg-white shadow-md rounded max-w-sm p-4 m-1 mr-3">
      <Link
        to={courseLink}
        className="font-semibold text-gray-800 text-lg truncate block hover:underline"
      >
        {courseCode} - {courseName}
      </Link>
      <p className="font-normal text-base text-gray-500 truncate mb-4">
        {description}
      </p>
      <div className="flex ">
        {tags.map(tag => {
          const encoded = encodeURIComponent(tag.value || "");
          const query = `/search?q=${encoded}`;
          return (
            <Link
              className="bg-blue-100 py-1 px-2 mr-2 rounded-full text-blue-500 font-medium text-xs hover:underline"
              to={query}
              key={tag.name}
            >
              {tag.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CourseMiniCard;
