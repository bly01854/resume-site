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
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%"
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
        alignItems="flex-start"
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
          images={[
            <img
              className={classes.image}
              src={require("../../static/codeit.PNG")}
            />
          ]}
          title={"Pantheon"}
          subtitle={"Spring 2019 (In Progress)"}
          content={
            <Typography variant="body1" className={classes.body}>
              An individual project designed to make the Integration Solutions
              team more efficient <br />
              A desktop application that allows for simple project maintenance:
              <br />
              <ul>
                Configured with Git to allow for committing work and rollback
                functionality
              </ul>
              <ul>Automatic authentication and authorization</ul>
              <ul>
                Ease of exporting and importing into development, test, and
                production servers.
              </ul>
              <br />
              Creating with React, Material UI, Redux, Node.js, Git, Electron
              <br />
            </Typography>
          }
        />
        <Project
          images={[
            <img
              className={classes.image}
              src={require("../../static/codeit.PNG")}
            />
          ]}
          title={"CodeIt"}
          subtitle={"Spring 2019 (In Progress)"}
          content={
            <Typography variant="body1" className={classes.body}>
              If StackOverflow and CodePen were to have a child, CodeIt would be
              that child. <br />
              A team project for Senior Software Project. <br />
              A web-based application that allows users to compile and run code
              within a sandboxed environment. <br />
              Users can consult with the community for help on their projects,
              and interact with other projects by "forking" them or commenting.{" "}
              <br />
              Creating with React, Bootstrap, Express.js, Node.js and PostgreSQL{" "}
              <br />
            </Typography>
          }
        />
        <Project
          images={[
            <img
              className={classes.image}
              src={require("../../static/codeit.PNG")}
            />
          ]}
          title={"Dragonfruit"}
          subtitle={"Summer 2018"}
          content={
            <Typography variant="body1" className={classes.body}>
              An individual project designed to assist business users quickly
              locate problems with eCommerce content. <br />
              <ul>
                Provides overwatch for FOTLInc's main eCommerce sites:
                fruit.com, spalding.com, russellathletic.com, and
                vanityfairlingerie.com{" "}
              </ul>
              <ul>
                Keeps track of inventory, pricing, and other factors that
                determine if a product is "online"
              </ul>
              <ul>
                Provides content correction, such as allowing business users to
                spot spelling mistakes and identify missing swatches
              </ul>
              <br />
              Created with React, Redux, Express.js, Node.js Azure SQL Server,
              and deployed to Azure
              <br />
            </Typography>
          }
        />
        <Project
          images={[
            <img
              className={classes.image}
              src={require("../../static/moon.PNG")}
            />
          ]}
          title={"Mission to the Moon"}
          subtitle={"Spring 2018"}
          content={
            <Typography variant="body1" className={classes.body}>
              Team project with a local health department to help get their
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
