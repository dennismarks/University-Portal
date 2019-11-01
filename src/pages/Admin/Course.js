import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";

import AsCoursesBox from "../../components/AsCoursesBox";
import CourseInfoBox from "../../components/CourseInfoBox";
import RedditBox from "../../components/RedditBox";

import HeaderAdmin from "../../components/HeaderAdmin";


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
  const { courseCode } = useParams();
  const classes = useStyles();

  return (
    <div>
      <HeaderAdmin />
      <div className={classes.root}>
        
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12}>
            <h1 className={classes.courseCode}>
              {courseCode}: Programming on the Web
            </h1>
          </Grid>
          <Grid item xs={6}>
            <CourseInfoBox />
          </Grid>
          <Grid item xs={6}>
            <AsCoursesBox />
          </Grid>
          <Grid item xs={6}>
            <RedditBox />
          </Grid>
          <Grid item xs={6}>
            <RedditBox />
          </Grid>
        </Grid>
      </div>
  </div>
  );
}

export default Course;
