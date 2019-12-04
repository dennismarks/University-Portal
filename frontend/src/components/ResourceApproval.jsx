import React from "react";
import { uid } from "react-uid";

class ResourceApproval extends React.Component {
  handleRequest = request => {
    const newReq = this.state.requests.filter(r => {
      return r !== request;
    });
    this.setState({ requests: newReq });
  };

  render() {
    if (!this.props.requests || !this.props.requests.length) {
      return null;
    }

    return (
      <div className="requests">
        <h1>Requests</h1>
        {this.props.requests.map(request => (
          <div key={uid(request)} className="request">
            {/* <p>
              Course name: <strong>{request.course}</strong>
            </p> */}
            <p>
              Course term: <strong>{request.semester}</strong>
            </p>
            <p>
              Resource name: <strong>{request.title}</strong>
            </p>
            <p>
              Resource link:{" "}
              <a className="request-link" href={request.link} target="blank">
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
  }
}

export default ResourceApproval;
