import React from "react";
import {Grid, Typography} from "@material-ui/core"

function Header(props) {
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-end"
      style={{marginTop: "3vh"}}
    >
      <Grid item md={6}>
        <Typography variant="title">{props.title}</Typography>
        <Typography variant="subtitle1">
          {props.subtitle}
        </Typography>
      </Grid>
      <Grid item md={3}>
        <Typography variant="subtitle2" align="right">{props.date}</Typography>
      </Grid>
    </Grid>
  );
}

export default Header;