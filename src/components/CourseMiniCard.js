import React from "react";
import { uid } from "react-uid";

function CourseMiniCard({
  courseCode,
  courseName,
  description,
  courseLink,
  tags
}) {
  return (
    <div className="bg-white shadow-md rounded max-w-sm p-4 m-2">
      <a
        href={courseLink}
        className="font-bold text-lg truncate block hover:underline"
      >
        {courseCode} - {courseName}
      </a>
      <p className="font-normal text-base text-gray-500 truncate mb-4">
        {description}
      </p>
      <div className="flex ">
        {tags.map(tag => (
          <a
            className="bg-blue-100 py-1 px-2 mr-2 rounded-full text-blue-500 font-medium text-xs hover:underline"
            href={tag.link}
            key={uid(tag)}
          >
            {tag.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default CourseMiniCard;
