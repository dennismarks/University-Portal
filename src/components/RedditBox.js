import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import RedditIcon from "@material-ui/icons/Reddit";

// const useStyles = makeStyles(theme => ({
//   redditLogo: {
//     marginRight: "20px",
//     marginBottom: "-3px"
//   }
// }));

function RedditBox() {
  // const classes = useStyles();
  return (
    <div className="w-6/12 my-5 ml-10 mr-5 px-10 pb-10 bg-gray-200">
      {/* <Card>
        <CardContent>
          <Typography variant="h6">
            <RedditIcon className={classes.redditLogo} />
            Reddit Comments
          </Typography>
        </CardContent>
      </Card> */}
    </div>
  );
}

export default RedditBox;
