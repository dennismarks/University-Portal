import React, { useContext, useEffect, useState } from "react";

import AddCourseForm from "../components/AddCourseForm";
import AdminStats from "../components/AdminStats";
import AuthContext from "../context/AuthContext";
import ResourceApproval from "../components/ResourceApproval";
import UserDetails from "../components/UserDetails";
import UserInfo from "../components/UserInfo";
import UsersList from "../components/UsersList";

const Admin = props => {
  const [numCourses, setNumCourses] = useState(null);
  const [numUsers, setNumUsers] = useState(null);
  const [requests, setRequests] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const {
    auth: { user }
  } = useContext(AuthContext);

  useEffect(() => {
    fetch(`/api/v1/courses?limit=1`)
      .then(res => {
        const numCourses = res.headers.get("X-Total-Count");
        setNumCourses(numCourses);
      })
      .catch(error => {
        console.error(error);
      });

    fetch(`/api/v1/user?limit=1`)
      .then(res => {
        const numUsers = res.headers.get("X-Total-Count");
        setNumUsers(numUsers);
      })
      .catch(error => {
        console.error(error);
      });

    fetch(`/api/v1/course-resource/UofT?status=Pending`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        const requests = Object.keys(res).reduce((acc, courseCode) => {
          const rs = res[courseCode];
          const temp = rs.map(r => ({ ...r, courseCode }));
          return [...acc, ...temp];
        }, []);
        setRequests(requests);
      })
      .catch(error => {
        console.error(error);
      });

    fetch(`/api/v1/user/`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        setAllUsers(res.users);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!user) {
    return null;
  }

  function approveRequest(request) {
    fetch(`/api/v1/course-resource/UofT/${request.courseCode}/${request._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: "Approved" })
    })
      .then(res => {
        if (res.ok) {
          // setRequests(res);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  function rejectRequest(request) {
    fetch(`/api/v1/course-resource/UofT/${request.courseCode}/${request._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: "Rejected" })
    })
      .then(res => {
        if (res.ok) {
          // setRequests(res);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      <AdminStats numUsers={numUsers} numCourses={numCourses} />
      <ResourceApproval
        requests={requests}
        onApprove={approveRequest}
        onReject={rejectRequest}
      />
      <div className="row-1">
        <AddCourseForm />
      </div>
      <div className="row-2">
        <div className="users-container">
          <UsersList users={allUsers} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
          {selectedUser ? (<UserDetails key={selectedUser._id} selectedUser={selectedUser} />) : null}
          {/* { allUsers ? allUsers.map( user => (<UserDetails key={user._id} selectedUser={user} />) ) : "Loading"} */}
        </div>
      </div>
    </>
  );
};

export default Admin;
