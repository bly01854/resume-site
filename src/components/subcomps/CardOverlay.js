import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Card,
  CardMedia,
  withStyles
} from "@material-ui/core";
import code from "../../static/code.jpg";

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4
  },
  paperContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up("md")]: {
      paddingRight: 0
    }
  },
  card: {
    position: "relative",
  },
  cardMedia: {
      height: "100%",
      width: "100%"
  },
  overlay: {
    position: "absolute",
    top: 20,
    left: 20
  }
});

function CardOverlay(props) {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
          <Card className={classes.card}>
            <CardMedia image={code} className={classes.cardMedia} />
            <div className={classes.overlay}>Testing</div>
          </Card>
    </Paper>
  );
}

export default withStyles(styles)(CardOverlay);
