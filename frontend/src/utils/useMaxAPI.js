/**
 * http://uoft-courseapi.herokuapp.com/get/CSC309H1
 */

import { useEffect, useState } from "react";

function useMaxAPI(courseCode) {
  const [course, setCourse] = useState(null);
  const host = window.location.hostname;
  const port = 3001;
  useEffect(() => {
    fetch(`http://${host}:${port}/api/v1/courses/UofT/${courseCode}`)
      .then(res => {
        return res.json();
      })
      .then(courseObj => {
        setCourse(courseObj);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return course;
}

export default useMaxAPI;
