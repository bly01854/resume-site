import React from "react";
import { Grid } from "@material-ui/core";
import CardOverlay from "../subcomps/CardOverlay";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({});

function Home(props) {
  return (
    <Grid container justify="center" direction="row">
      <Grid item md={8}>
        <CardOverlay />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Home);
