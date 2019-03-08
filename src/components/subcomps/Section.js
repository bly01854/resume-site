import React from "react";
import { Grid, Typography, withStyles, Divider } from "@material-ui/core";

const styles = theme => ({
  text: {
    fontSize: "calc(18px + (32 - 18) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
    color: theme.palette.common.black,
    paddingTop: "2.5vh"
  }
});

function Section(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid item md={8} sm={8} xs={12}>
        <Typography variant="h2" className={classes.text} align="center">
          {props.title}
          <Divider />
        </Typography>
      </Grid>
      <Grid item md={6} sm={8} xs={10}>
        {props.content}
      </Grid>
    </React.Fragment>
  );
}

export default withStyles(styles)(Section);
