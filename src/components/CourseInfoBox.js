import React from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Collapse,
//   Button,
//   makeStyles
// } from "@material-ui/core";

// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function CourseInfoBox(props) {
  // const [openRoot, setOpenRoot] = React.useState(true);
  // const handleRootClick = () => {
  //   setOpenRoot(!openRoot);
  // };

  return (
    <div className="w-5/12 mx-20">
      <h3 className="text-2xl font-medium my-6"> Course Info</h3>
      <h5 className="text-small"> {props.courseDescription} </h5>
      {/* <Card>
        <CardContent>
          <Typography variant="h6" className={classes.boxTitle}>
            Course Info
          </Typography>
        </CardContent>
        <Collapse in={openRoot} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body1" className={classes.boxTitle}>
              An introduction to software development on the web. Concepts
              underlying the development of programs that operate on the web;
              survey of technological alternatives; greater depth on some
              technologies. Operational concepts of the internet and the web,
              static client content, dynamic client content, dynamically served
              content, n-tiered architectures, web development processes, and
              security on the web. Assignments involve increasingly more complex
              web-based programs. Guest lecturers from leading e-commerce firms
              will describe the architecture and operation of their web sites.
            </Typography>
          </CardContent>
        </Collapse>
        <Button className={classes.rootButton} onClick={handleRootClick}>
          {openRoot ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Card> */}
    </div>
  );
}

export default CourseInfoBox;
