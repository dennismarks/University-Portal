import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import RedditIcon from "@material-ui/icons/Reddit";
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'


const useStyles = makeStyles(theme => ({
    redditLogo: {
      marginRight: '20px',
      marginBottom: '-3px'
    }
  }));

function RedditBox() {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6">
            <RedditIcon className={classes.redditLogo} />
            Reddit Comments
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default RedditBox;
