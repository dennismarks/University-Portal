import React, { useState } from "react";
import UserCommentBox from "./UserCommentBox";

function CourseCommentsBox(props) {
  const [count, setCount] = useState(5);

  return (
    <div className="w-auto ml-10 mr-10 px-10 pb-10 my-5 bg-white shadow-md ">
      <h3 className="text-2xl font-medium my-6"> User Comments </h3>
      <div className="overflow-auto h-64 pr-2">
        <div>
          <UserCommentBox
            user="Arnav Verma"
            rating="5"
            userId="12"
            comment="Wooooooooooooow loved this course, best one ever!!!!!!"
          />
          <UserCommentBox
            user="Timmy Tom"
            rating="3"
            userId="12"
            comment=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum consequatur magni accusantium repellat quidem dolores fugiat doloremque expedita rerum tempora!
"
          />
          <UserCommentBox
            user="Billy Bong"
            rating="5"
            userId="12"
            comment="onsectetur adipisicing elit. Ipsum consequatur magni accusantium repella"
          />
          <UserCommentBox
            user="Arnav Verma"
            rating="5"
            userId="12"
            comment="Wooooooooooooow loved this course, best one ever!!!!!!"
          />
          <UserCommentBox
            user="Arnav Verma"
            rating="5"
            userId="12"
            comment="Wooooooooooooow loved this course, best one ever!!!!!!"
          />
          <UserCommentBox
            user="Arnav Verma"
            rating="5"
            userId="12"
            comment="Wooooooooooooow loved this course, best one ever!!!!!!"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div onClick={() => { count < 1 ? setCount(count) : setCount( count - 1)} } className="h-12 w-12 font-medium text-4xl rounded cursor-pointer active:bg-gray-200  bg-white shadow-md hover:bg-gray-100 pb-4 pt-0 px-5 mt-6">
          -
        </div>
        <div
          id="userRating"
          className="h-12 w-12 font-medium rounded cursor-default bg-blue-500 text-white py-3 px-5 mt-6 mx-4"
        >
          {count}
        </div>
        <div onClick={() => { count > 4 ? setCount(count) : setCount( count + 1)} } className="h-12 w-12 font-medium text-2xl rounded cursor-pointer bg-white shadow-md hover:bg-gray-100 py-2 px-4 mt-6 mr-6">
          +
        </div>
        <input
          class="shadow w-6/12 h-12 mr-4 mt-6 border rounded py-0 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Enter your comments on the course..."
        />
        <button className="btn btn-blue h-12 rounded bg-blue-500 hover:bg-blue-700 text-white py-3 px-4 mt-6">
          Add Comment
        </button>
      </div>
    </div>
  );
}

export default CourseCommentsBox;
