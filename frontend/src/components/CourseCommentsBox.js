import React, { useState, useContext } from "react";
import UserCommentBox from "./UserCommentBox";
import AuthContext from "../context/AuthContext";

function CourseCommentsBox(props) {
  const [count, setCount] = useState(5);
  const {
    auth: { isLoggedIn }
  } = useContext(AuthContext);
  const [comments, setComments] = useState(props.commentData);
  const [averageRating, setAverageRating] = useState(props.averageRating);

  const removeComment = removingCommentId => {
    fetch(
      `http://localhost:3001/api/v1/courses/course-review/UofT/${props.courseCode}/${removingCommentId}`,
      {
        method: "DELETE"
      }
    )
      .then(res => res.json())
      .then(response => {
        setComments(response.courseReviews);
        setAverageRating(response.averageRating);
      })
      .catch(err => console.log(err));
  };

  const addComment = () => {
    const commentText = document.querySelector("#courseCommentAdded").value;
    if (commentText.length < 1) {
      return;
    }
    const reviewBody = JSON.stringify({ rating: count, comment: commentText });
    fetch(
      `http://localhost:3001/api/v1/courses/course-review/UofT/${props.courseCode}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: reviewBody
      }
    )
      .then(res => res.json())
      .then(response => {
        setComments(response.courseReviews);
        setAverageRating(response.averageRating);
        document.querySelector("#courseCommentAdded").value = "";
        console.log(response);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="w-auto ml-10 mr-10 px-10 pb-10 my-5 bg-white shadow-md ">
      <h3 className="text-2xl font-medium mt-6 mb-2"> User Comments </h3>
      <h4 className="mb-4 text-1xl font-medium">
        {averageRating
          ? `Average Rating: ${averageRating} / 5`
          : "No feedback yet. Add a comment and rating below to give some!"}{" "}
      </h4>
      <div className="overflow-auto h-64 pr-2">
        <div>
          {comments ? (
            comments.map(userComment => (
              <UserCommentBox
                key={userComment._id}
                user={userComment.user}
                rating={userComment.rating}
                userId={userComment._id}
                comment={userComment.comment}
                removeFunc={removeComment}
              />
            ))
          ) : (
            <h5 className="text-1xl font-medium mt-6 mb-2"> No Comments</h5>
          )}
        </div>
      </div>
      {isLoggedIn ? (
        <div className="flex justify-center">
          <div
            onClick={() => {
              count <= 1 ? setCount(count) : setCount(count - 1);
            }}
            className="h-12 w-12 font-medium text-4xl rounded cursor-pointer active:bg-gray-200  bg-white shadow-md hover:bg-gray-100 pb-4 pt-0 px-5 mt-6"
          >
            -
          </div>
          <div
            id="userRating"
            className="h-12 w-12 font-medium rounded cursor-default bg-blue-500 text-white py-3 px-5 mt-6 mx-4"
          >
            {count}
          </div>
          <div
            onClick={() => {
              count >= 5 ? setCount(count) : setCount(count + 1);
            }}
            className="h-12 w-12 font-medium text-2xl rounded cursor-pointer bg-white shadow-md hover:bg-gray-100 py-2 px-4 mt-6 mr-6"
          >
            +
          </div>
          <input
            className="shadow w-6/12 h-12 mr-4 mt-6 border rounded py-0 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="courseCommentAdded"
            type="text"
            placeholder="Enter your comments on the course..."
          />
          <button
            onClick={addComment}
            className="btn btn-blue h-12 rounded bg-blue-500 hover:bg-blue-700 text-white py-3 px-4 mt-6"
          >
            Add Comment
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default CourseCommentsBox;
