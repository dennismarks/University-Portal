import React from "react";
import { uid } from "react-uid";

class ResourceApproval extends React.Component {
  // requests information would have been obtained from an external source
  state = {
    requests: [
      {
        course: "CSC165",
        courseTerm: "Winter 2019",
        resourceName: "Syllabus",
        resourceLink:
          "https://www.teach.cs.toronto.edu//~csc165h/winter/syllabus.html"
      },
      {
        course: "CSC309",
        courseTerm: "Fall 2019",
        resourceName: "Website",
        resourceLink: "https://q.utoronto.ca/courses/111555"
      }
    ]
  };

  handleRequest = request => {
    const newReq = this.state.requests.filter(r => {
      return r !== request;
    });
    this.setState({ requests: newReq });
  };

  render() {
    if (this.state.requests.length > 0) {
      return (
        <div className="requests">
          <h1>Requests</h1>
          {this.state.requests.map(request => (
            <div key={uid(request)} className="request">
              <p>
                Course name: <strong>{request.course}</strong>
              </p>
              <p>
                Course term: <strong>{request.courseTerm}</strong>
              </p>
              <p>
                Resource name: <strong>{request.resourceName}</strong>
              </p>
              <p>
                Resource link:{" "}
                <a
                  className="request-link"
                  href={request.resourceLink}
                  target="blank"
                >
                  <strong>link</strong>
                </a>
              </p>
              <button
                className="add-button"
                onClick={() => this.handleRequest(request)}
              >
                Add
              </button>
              <button
                className="remove-button"
                onClick={() => this.handleRequest(request)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default ResourceApproval;
