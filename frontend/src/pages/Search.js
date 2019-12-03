import React, { useEffect, useState } from "react";

import CourseMiniCard from "../components/CourseMiniCard";
import CourseSearchBar from "../components/CourseSearchBar";
import useQueryParams from "../utils/useQueryParams";

function Search() {
  const queryParams = useQueryParams();
  const searchQuery = queryParams.get("q");
  const [searchCourses, setSearchCourses] = useState([]);
  // console.log(searchQuery);

  // add pages to flip through ...
  useEffect(() => {
    fetch(`/api/v1/courses/search?q=${searchQuery}&start=0`)
      .then(res => res.json())
      .then(response => {
        setSearchCourses(response.courses);
      })
      .catch(err => console.log(err));
  });
  return (
    <div>
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <CourseSearchBar
              initialValue={searchQuery}
              shouldAutoFocus={false}
            />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-xl font-normal text-gray-700 mb-4">
            Search Results
          </h2>
          <div className="mb-8 flex flex-wrap">
            {/* Results will come from search response from server */}
            {searchCourses ? (
              searchCourses.map(course => (
                <CourseMiniCard
                  key={course._id}
                  courseCode={course.code}
                  courseLink={`/course/${course.code}`}
                  courseName={course.info.title}
                  description={course.info.description}
                  tags={[
                    {
                      name: course.averageRating
                        ? `Rating: ${course.averageRating}`
                        : "Not Rated",
                      value: course.averageRating
                        ? `Rating: ${course.averageRating}`
                        : "Not Rated"
                    },
                    { name: course.info.faculty, value: course.info.faculty },
                    {
                      name: course.info.department,
                      value: course.info.department
                    }
                  ]}
                />
              ))
            ) : (
              <h1> No Courses Found </h1>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
