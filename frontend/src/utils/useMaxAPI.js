/**
 * http://uoft-courseapi.herokuapp.com/get/CSC309H1
 */

import { useEffect, useState } from "react";

function useMaxAPI(courseCode) {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`http://uoft-courseapi.herokuapp.com/get/${courseCode}`)
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
