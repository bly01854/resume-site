import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Project from "../subcomps/Project";

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.common.white,
    paddingTop: "2%"
  },
  text: {
    fontSize: "calc(18px + (32 - 18) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
    color: theme.palette.common.black,
    paddingTop: "2.5vh"
  },
  icon: {
    fontSize: "calc(48px + (92 - 48) * ((100vw - 300px) / (1600 - 300)))"
  },
  body: {
    fontSize: "calc(10px + (14 - 10) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
    marginLeft: "1vw",
    marginTop: "1vh",
    marginBottom: "1vh"
  }
});

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="row"
        spacing={16}
        style={{ marginBottom: "10vh" }}
      >
        <Grid item md={10} sm={10} xs={12} style={{ marginBottom: "2.5vh" }}>
          <Typography align="center" variant="h2">
            Some of my recent work...
          </Typography>
        </Grid>
        <Project
          images={[<img src={require("../../static/moon.PNG")} />]}
          title={"Mission to the Moon"}
          subtitle={"Spring 2018"}
          content={
            <Typography variant="body1" className={classes.body}>
              <Link
                href="https://www.missiontothemoon.net/"
                target="_blank"
                rel="noopener"
              >
                https://missiontothemoon.net
              </Link>
              <br />
              Contract with a local health department to help get their
              community active. <br />
              Web-based application that allows users to track their exercise
              progress: walking, running, cycling, etc. <br />
              Created with React, Bootstrap, Express.js, Node.js, MySQL and
              deployed to Heroku. <br />
            </Typography>
          }
        />
        <Project
          images={[<img src={require("../../static/moon.PNG")} />]}
          title={"Mission to the Moon"}
          subtitle={"Spring 2018"}
          content={
            <Typography variant="body1" className={classes.body}>
              Contract with a local health department to help get their
              community active. <br />
              Web-based application that allows users to track their exercise
              progress: walking, running, cycling, etc. <br />
              Created with React, Bootstrap, Express.js, Node.js, MySQL and
              deployed to Heroku. <br />
            </Typography>
          }
        />
      </Grid>
    );
  }
}

export default withStyles(styles)(Portfolio);
