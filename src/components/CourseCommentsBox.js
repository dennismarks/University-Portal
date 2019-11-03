import React, { useState, useContext } from "react";
import UserCommentBox from "./UserCommentBox";
import AuthContext from "../context/AuthContext";

function CourseCommentsBox(props) {
  const [count, setCount] = useState(5);
  const {
    auth: { isLoggedIn, role, userId }
  } = useContext(AuthContext);
  // api call here to get comment data here
  let commentData = [
    {
      user: "Arnav Verma",
      rating: "5",
      userId: "0",
      comment: "Wooooooooooooow loved this course, best one ever!!!!!!"
    },
    {
      user: "Timmy Tom",
      rating: "3",
      userId: "1",
      comment:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum consequatur magni accusantium repellat quidem dolores fugiat doloremque expedita rerum tempora!"
    },
    {
      user: "Arnav Verma",
      rating: "5",
      userId: "2",
      comment: "Wooooooooooooow loved this course, best one ever!!!!!!"
    },
    {
      user: "Timmy Tom",
      rating: "3",
      userId: "3",
      comment:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum consequatur magni accusantium repellat quidem dolores fugiat doloremque expedita rerum tempora!"
    },
    {
      user: "Arnav Verma",
      rating: "5",
      userId: "4",
      comment: "Wooooooooooooow loved this course, best one ever!!!!!!"
    }
  ];
  const [comments, setComments] = useState(commentData);

  const removeComment = removingCommentId => {
    setComments(
      comments.filter(data => {
        return data.userId !== removingCommentId;
      })
    );
  };

  const addComment = () => {
    const commentText = document.querySelector("#courseCommentAdded").value;
    if (commentText.length < 1) {
      return;
    }
    setComments([
      {
        userId: userId,
        user: "Arna Verm",
        rating: count,
        comment: commentText
      },
      ...comments
    ]);
  };

  return (
    <div className="w-auto ml-10 mr-10 px-10 pb-10 my-5 bg-white shadow-md ">
      <h3 className="text-2xl font-medium mt-6 mb-2"> User Comments </h3>
      <h4 className="mb-4 text-1xl font-medium">Average Rating: 4.5 / 5 </h4>
      <div className="overflow-auto h-64 pr-2">
        <div>
          {comments.map(userComment => (
            <UserCommentBox
              key={userComment.userId}
              user={userComment.user}
              rating={userComment.rating}
              userId={userComment.userId}
              comment={userComment.comment}
              removeFunc={removeComment}
            />
          ))}
        </div>
      </div>
      {true ? (
        <div className="flex justify-center">
          <div
            onClick={() => {
              count <= 0 ? setCount(count) : setCount(count - 1);
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
