import React from "react";
import { makeStyles, AppBar, Toolbar, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  appbar: {
    height: "50px",
    background: "#209CEE"
  },
  menuButton: {
    marginRight: theme.spacing(4)
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <Button color="inherit" className={classes.menuButton}>
            Find Course
          </Button>
          <Button color="inherit" className={classes.menuButton}>
            Schedule
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
