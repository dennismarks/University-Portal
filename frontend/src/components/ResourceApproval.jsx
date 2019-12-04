import React from "react";
import { uid } from "react-uid";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

class ResourceApproval extends React.Component {
  render() {
    if (!this.props.requests || !this.props.requests.length) {
      return null;
    }

    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Requests</h1>

          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Course Term</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Link</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.requests.map(request => (
                <TableRow key={uid(request)}>
                  <TableCell component="th" scope="row">
                    {request.title}
                  </TableCell>
                  <TableCell align="left">{request.semester}</TableCell>
                  <TableCell align="left">{request.link}</TableCell>
                  <TableCell align="left">
                    <span className="text-yellow-600">{request.status}</span>
                  </TableCell>
                  <TableCell align="right">
                    <div className="inline-flex">
                      <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                        onClick={() => this.props.onApprove(request)}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                        onClick={() => this.props.onReject(request)}
                      >
                        Reject
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    );
  }
}

export default ResourceApproval;
