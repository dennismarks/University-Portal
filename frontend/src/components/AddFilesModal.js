import React from "react";

function AddFilesModal(props) {
  const submitResFunc = () => {
    const semester = document.querySelector("#courseTermInput").value;
    const status = "Approved";
    const link = document.querySelector("#linkInput").value;
    const title = document.querySelector("#titleInput").value;
    const reviewBody = JSON.stringify({ status, semester, title, link });
    const courseCode = window.location.href.split("/").pop();
    fetch(`/api/v1/courses/course-resource/UofT/${courseCode}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: reviewBody
    })
      .then(res => res.json())
      .then(response => {
        props.setCourseResources(response.courseResources);
        props.cancelFunc();
      })
      .catch(err => console.log(err));
  };
  return (
    <div id="course" className="course-container submitResourceForm">
      <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Course Term
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-700 leading-tight focus:outline-none"
            type="text"
            id="courseTermInput"
            placeholder="e.g. Fall 2019"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Resource Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-700 leading-tight focus:outline-none"
            type="text"
            placeholder="e.g. Website, Syllabus, Lecture Notes..."
            id="titleInput"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Resource Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-700 leading-tight focus:outline-none"
            type="text"
            id="linkInput"
            placeholder="Must be a secure and legal website link"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={submitResFunc}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
            type="button"
          >
            Submit
          </button>
          <button
            onClick={props.cancelFunc}
            className="ml-6 inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddFilesModal;
