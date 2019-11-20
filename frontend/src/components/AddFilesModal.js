import React from "react";

function AddFilesModal(props) {
  return (
    <div className="fixed w-4/12 inset-y-0 mt-64 m z-50">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Course Term
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-700 leading-tight focus:outline-none"
            type="text"
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
            placeholder="Must be a secure and legal website link"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={props.cancelFunc}
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
