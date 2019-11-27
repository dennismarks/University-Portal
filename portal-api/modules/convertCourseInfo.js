const axios = require("axios");

async function createUofTCourseObject(code, courseResource) {
  const calendar_server = axios.create({
    baseURL: "http://uoft-courseapi.herokuapp.com/get",
    timeout: 2000
  });
  try {
    course_info_ax = await calendar_server.get(`/${code}`);
    course_info = course_info_ax.data;
    courseResource.info = {
      title: course_info.title,
      hours: course_info.hours,
      description: course_info.summary,
      faculty: "Arts and Science",
      department: course_info.program
    };
  } catch {
    return 400;
  }
}

module.exports = {
  createUofTCourseObject
};
