import React from "react";
import { Grid, Paper } from "@material-ui/core";
import CardOverlay from "../subcomps/CardOverlay";
import withStyles from "@material-ui/core/styles/withStyles";
import code from "../../static/code.jpg";
import Typography from "@material-ui/core/Typography/Typography";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ReduxIcon from "../subcomps/ReduxIcon";
import ExpressIcon from "../subcomps/ExpressIcon";
import { React as ReactIcon, Nodejs } from "mdi-material-ui";
import IconButton from "@material-ui/core/IconButton/IconButton";

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.common.white,
    height: "25vh"
  },
  text: {
    fontSize: "calc(18px + (32 - 18) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
    color: theme.palette.common.black,
    paddingTop: "2.5vh"
  },
  text2: {
    fontSize: "calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.2em + (24 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
    paddingTop: "1.5vh",
    marginLeft: "8vw",
    marginRight: "8vw"
  },
  icon: {
    fontSize: "calc(48px + (92 - 48) * ((100vw - 300px) / (1600 - 300)))",
    marginTop: "1.5vh"
  }
});

function Home(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center" direction="row">
      <Grid item md={8} sm={8} xs={12}>
        <CardOverlay image={code} text="Let's Make an Impact" />
      </Grid>
      <Grid item md={8} sm={8} xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h2" className={classes.text} align="center">
            ... and make the next big thing together.
          </Typography>
          <Typography
            variant="body1"
            className={classes.text2}
            align="center"
            color="textSecondary"
          >
            From helping a health department get a community active, to working with
            some of the biggest clothing brands push data into the right places - I'm
            someone with an attention to detail. I love making full-stack applications.
          </Typography>
        </Paper>
      </Grid>
      <Grid container justify="center">
        <Grid item md={8} sm={8} xs={12}>
          <Typography variant="h2" className={classes.text} align="center">
            You're likely to see me working with these if you catch me in front
            of a computer...
          </Typography>
        </Grid>
      </Grid>
      <Grid item md={2} sm={2} xs={3}>
        <Typography align="center">
          <IconButton href="https://reactjs.org/" target="_blank" rel="noopener">
            <ReactIcon color="textSecondary" className={classes.icon} />
          </IconButton>
        </Typography>
      </Grid>
      <Grid item md={2} sm={2} xs={3}>
        <Typography align="center">
          <IconButton href="https://redux.js.org/" target="_blank" rel="noopener">
            <ReduxIcon color="textSecondary" className={classes.icon} />
          </IconButton>
        </Typography>
      </Grid>
      <Grid item md={2} sm={2} xs={3}>
        <Typography align="center">
          <IconButton href="https://expressjs.com/" target="_blank" rel="noopener">
            <ExpressIcon color="textSecondary" className={classes.icon} />
          </IconButton>
        </Typography>
      </Grid>
      <Grid item md={2} sm={2} xs={3}>
        <Typography align="center">
          <IconButton href="https://nodejs.org/" target="_blank" rel="noopener">
            <Nodejs color="textSecondary" className={classes.icon} />
          </IconButton>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Home);
