import React, { useEffect, useState } from "react";

import CourseMiniCard from "../components/CourseMiniCard";
import CourseSearchBar from "../components/CourseSearchBar";
import useQueryParams from "../utils/useQueryParams";

function Search() {
  const queryParams = useQueryParams();
  const searchQuery = queryParams.get("q");
  const [searchCourses, setSearchCourses] = useState([]);
  const [searchStart, setSearchStart] = useState(0);
  // console.log(searchQuery);

  // add pages to flip through ...
  useEffect(() => {
    fetch(`/api/v1/courses/search?q=${searchQuery}&start=${searchStart}`)
      .then(res => res.json())
      .then(response => {
        setSearchCourses(response.courses);
      })
      .catch(err => console.log(err));
  }, [searchStart, searchQuery]);

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
            <p class="inline-block ml-4 font-small text-xs"> page {Math.floor(searchStart / 12) + 1} </p>
            <button
              onClick={() => {
                const searchNum = searchCourses.length === 12 ? searchStart + 12 : searchStart; 
                setSearchStart(searchNum);
              }}
              className="inline-block  mr-16 float-right text-sm px-4 py-2 leading-none border bg-blue-500 rounded text-white border-white"
            >
              Next
            </button>
            <button
              onClick={() => {
                const searchNum = searchStart >= 12 ? searchStart - 12 : 0;
                setSearchStart(searchNum);
              }}
              className="inline-block float-right text-sm px-4 py-2 leading-none border bg-blue-500 rounded text-white border-white"
            >
              Back
            </button>
          </h2>
          <div className="mb-8 flex flex-wrap">
            {/* Results will come from search response from server */}
            {searchCourses.map(course => (
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
            ))}
            {searchCourses.length === 0 ? `No ${searchStart > 0 ? "more" : ""} courses found` : null}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
