import React from "react";
// import {
//   Card,
//   CardContent,
//   ListItem,
//   ListItemText,
//   List,
//   ListItemIcon,
//   Typography,
//   makeStyles,
//   Collapse,
//   Button
// } from "@material-ui/core";

// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import ExpandLessIcon from "@material-ui/icons/ExpandLess";
// import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
// import NotInterestedIcon from "@material-ui/icons/NotInterested";
// import ListAltIcon from "@material-ui/icons/ListAlt";
// import AvTimerIcon from "@material-ui/icons/AvTimer";

// const useStyles = makeStyles(theme => ({
//   nested: {
//     paddingLeft: theme.spacing(12)
//   },
//   rootButton: {
//       width: '100%'
//   },
//   optionalNested: {
//     paddingLeft: theme.spacing(16)
//   }
// }));

function AsCoursesBox() {
  // const classes = useStyles();
  // const [openPrerequisite, setOpenPrerequisite] = React.useState(true);
  // const handlePrerequisiteClick = () => {
  //   setOpenPrerequisite(!openPrerequisite);
  // };
  // const [openExclusion, setOpenExclusion] = React.useState(true);
  // const handleExclusionClick = () => {
  //   setOpenExclusion(!openExclusion);
  // };
  // const [openPreparation, setOpenPreparation] = React.useState(true);
  // const handlePreparationClick = () => {
  //   setOpenPreparation(!openPreparation);
  // };
  // const [openRoot, setOpenRoot] = React.useState(true);
  // const handleRootClick = () => {
  //   setOpenRoot(!openRoot);
  // };

  return (
    <div>
      
      {/* <Card>
        <CardContent>
          <Typography variant="h6" className={classes.boxTitles}>
            Associated Courses
          </Typography>
          <Collapse in={openRoot} timeout="auto" unmountOnExit>
            <List>
              <ListItem button onClick={handlePrerequisiteClick}>
                <ListItemIcon>
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Prerequisites" />
                {openPrerequisite ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={openPrerequisite} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="CSC000: The blah blah blah" />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="Select one of:" />
                  </ListItem>
                  <ListItem button className={classes.optionalNested}>
                    <ListItemText primary="- CSC001: The blah blah blah" />
                  </ListItem>
                  <ListItem button className={classes.optionalNested}>
                    <ListItemText primary="- CSC002: The lorem text blah" />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="CSC003: The lorem text blah" />
                  </ListItem>
                </List>
              </Collapse>
              <ListItem button onClick={handleExclusionClick}>
                <ListItemIcon>
                  <NotInterestedIcon />
                </ListItemIcon>
                <ListItemText primary="Exclusions" />
                {openExclusion ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={openExclusion} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="CSC001: The blah blah blah" />
                  </ListItem>
                </List>
              </Collapse>
              <ListItem button onClick={handlePreparationClick}>
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="Recommended Preparations" />
                {openPreparation ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={openPreparation} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText primary="CSC001: The blah blah blah" />
                  </ListItem>
                </List>
              </Collapse>
              <ListItem button>
                <ListItemIcon>
                  <AvTimerIcon />
                </ListItemIcon>
                <ListItemText primary="Breadth/Distribution Requirements: 5 / Science" />
              </ListItem>
            </List>
          </Collapse>
          <Button  className={classes.rootButton} onClick={handleRootClick}>
            {openRoot ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
        </CardContent>
      </Card> */}
    </div>
  );
}

export default AsCoursesBox;
