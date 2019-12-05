import React, { useEffect, useState } from "react";

import CourseMiniCard from "../components/CourseMiniCard";
import CourseSearchBar from "../components/CourseSearchBar";
import CourseSearchChip from "../components/CourseSearchChip";

function Home() {
  const [topCourses, setTopCourses] = useState([]);

  useEffect(() => {
    fetch(`/api/v1/courses/top`)
      .then(res => res.json())
      .then(response => {
        setTopCourses(response.courses);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <section className="bg-gray-200 py-16">
        <div className="flex flex-col lg:flex-row container items-center mx-auto px-4">
          <div className="w-full lg:w-1/2">
            <div className="pb-8">
              <h1 className="font-semibold text-4xl text-gray-700">
                Find the Courses you Need
              </h1>
              <span className="font-normal text-base text-gray-500">
                Search by course code, title, or department
              </span>
            </div>
            <CourseSearchBar shouldAutoFocus={true} />
          </div>
          <div className="w-1/2 mb-0 hidden lg:block">
            <img
              alt="girl searching"
              className="h-64 mx-auto"
              src="/img/undraw_searching_p5ux.svg"
            />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Top Rated Courses
          </h2>
          <div className="mb-8 flex overflow-x-auto">
            {topCourses ? (
              topCourses.map(course => (
                <CourseMiniCard
                  key={course._id}
                  courseCode={course.code}
                  courseLink={`/course/${course.code}`}
                  courseName={course.info.title}
                  description={course.info.description}
                  avgRating={course.averageRating}
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
                      value: `Department:${course.info.department}`
                    }
                  ]}
                />
              ))
            ) : (
              <h1> No Courses Found </h1>
            )}
          </div>
        </div>
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            By Department
          </h2>
          <div className="flex flex-row overflow-x-auto">
            <CourseSearchChip value={`Department:Computer Science`}>
              Computer Science
            </CourseSearchChip>
            <CourseSearchChip value={`Department:Statistical Science`}>
              Statistical Science
            </CourseSearchChip>
            <CourseSearchChip value={`Department:Classics`}>
              Classics
            </CourseSearchChip>
            <CourseSearchChip value={`Department:Rotman Commerce`}>
              Rotman Commerce
            </CourseSearchChip>
            <CourseSearchChip value={`Department:Economics`}>
              Economics
            </CourseSearchChip>
            <CourseSearchChip value={`Department:Mathematics`}>
              Mathematics
            </CourseSearchChip>
            <CourseSearchChip value={`Department:Chemistry`}>
              Chemistry
            </CourseSearchChip>
          </div>
        </div>
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            By Breadth Requirement
          </h2>
          <div className="flex flex-row flex-wrap">
            <CourseSearchChip
              className="flex-auto"
              color="teal"
              variant="light"
              value={`Breadth:Creative and Cultural Representations (1)`}
            >
              1 - Creative and Cultural Representations
            </CourseSearchChip>
            <CourseSearchChip
              className="flex-auto"
              color="indigo"
              variant="light"
              value={`Breadth:Thought, Belief and Behaviour (2)`}
            >
              2 - Thought, Belief, and Behaviour
            </CourseSearchChip>
            <CourseSearchChip
              className="flex-auto"
              color="pink"
              variant="light"
              value={`Breadth:Society and its Institutions (3)`}
            >
              3 - Society and Its Institutions
            </CourseSearchChip>
            <CourseSearchChip
              className="flex-auto"
              color="yellow"
              variant="light"
              value={`Breadth:Living Things and Their Environment (4)`}
            >
              4 - Living Things and Their Environment
            </CourseSearchChip>
            <CourseSearchChip
              className="flex-auto"
              color="orange"
              variant="light"
              value={`Breadth:The Physical and Mathematical Universes (5)`}
            >
              5 - The Physical and Mathematical Universes
            </CourseSearchChip>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
