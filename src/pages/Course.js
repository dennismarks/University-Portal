import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

import AsCoursesBox from "../components/AsCoursesBox";
import CourseInfoBox from "../components/CourseInfoBox";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "10%",
    marginRight: "10%",
    display: "flex"
  },
  courseCode: {
    // position: 'relative',
    marginBottom: "20px",
    marginTop: "40px",
    textAlign: "center"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  nested: {
    paddingLeft: theme.spacing(12)
  }
}));

function Course() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <h1 className={classes.courseCode}>
            CSC 309: Programming on the Web
          </h1>
        </Grid>
        <Grid item justify="center" xs={6}>
          <CourseInfoBox />
        </Grid>
        <Grid item justify="center" xs={6}>
          <AsCoursesBox />
        </Grid>
      </Grid>
    </div>
  );
}

export default Course;
