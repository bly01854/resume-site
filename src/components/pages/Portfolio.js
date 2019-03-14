import React from "react";
import {
  Grid,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Popper,
  Fade,
  Paper,
  Link
} from "@material-ui/core";
import { Information } from "mdi-material-ui";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import withStyles from "@material-ui/core/styles/withStyles";
import Project from "../subcomps/Project";
import pantheon from "../../static/pantheon.jpg";
import codeIt from "../../static/codeit.PNG";
import dragonFruit from "../../static/swatch.png";
import mttm from "../../static/moon.PNG";
import biocloud from "../../static/biocloud.png";
import whatIsReact from "../../static/whatisreact.PNG";

const tileData = [
  {
    img: pantheon,
    title: "Pantheon",
    date: "Spring 2019 (In Progress)",
    description: (
      <Typography variant="body1">
        An individual project designed to effectively double project management
        / deployment time for Integration Solutions. <br />
        Configured with Git to allow for committing work and rollback
        functionality
        <br />
        Automatic authentication and authorization
        <br />
        Ease of exporting and importing into development, test, and production
        <br />
        Creating with React, Material UI, Redux, Node.js, Git, Electron
        <br />
      </Typography>
    )
  },
  {
    img: biocloud,
    title: "BioCloud",
    date: "Spring 2019 (In Progress)",
    description: (
      <Typography variant="body1">
        A focus of semi-autonomous deployment and load-balancing, as well as
        refactoring the backend and scheduling, of a bioinformatics cloud
        solution onto a cluster. <br />
        A suite of of tools that will allow users to remotely process data such
        as FASTA nucleotide sequences and return the results <br />
        Using Docker, Kubernetes, Bash / Linux, Express, Node.js
      </Typography>
    )
  },
  {
    img: codeIt,
    title: "CodeIt",
    date: "Spring 2019 (In Progress)",
    description: (
      <Typography variant="body1">
        If StackOverflow and CodePen were to have a child, CodeIt would be that
        child. <br />
        A team project for Senior Software Project. <br />
        A web-based application that allows users to compile and run code within
        a sandboxed environment. <br />
        Users can consult with the community for help on their projects, and
        interact with other projects by "forking" them or commenting. <br />
        Creating with React, Bootstrap, Express.js, Node.js and PostgreSQL{" "}
        <br />
      </Typography>
    )
  },
  {
    img: whatIsReact,
    title: "What is React",
    date: "Spring 2019",
    description: (
      <Typography variant="body1">
        A quick website for a presentation to demonstrate the basics of React.{" "}
        <br />
        Includes several tutorials about features, such as components and state.{" "}
        <br />
        Includes multiple sandboxes for users to experiment with. <br />
        Created solely with React and deployed to Google App Engine<br />
        <Link href={"https://fourth-cirrus-232006.appspot.com/"} target="_blank" rel="noopener">
          Visit here
        </Link>
      </Typography>
    )
  },
  {
    img: dragonFruit,
    title: "DragonFruit",
    date: "Summer 2018",
    description: (
      <Typography variant="body1">
        An individual project that extends overwatch to nearly 15,000 products
        on 4 eCommerce sites by performing analysis of millions of rows. <br />
        Provides overwatch for FOTLInc's main eCommerce sites: fruit.com,
        spalding.com, russellathletic.com, and vanityfairlingerie.com
        <br />
        Keeps track of inventory, pricing, and other factors that determine if a
        product is "online"
        <br />
        Provides content correction, such as allowing business users to spot
        spelling mistakes and identify missing swatches
        <br />
        Created with React, Redux, Express.js, Node.js Azure SQL Server, and
        deployed to Azure
        <br />
      </Typography>
    )
  },
  {
    img: mttm,
    title: "Mission to the Moon",
    date: "Spring 2018",
    description: (
      <Typography variant="body1">
        Team project with a local health department to help get their community
        active collectively work towards a goal. <br />
        Web-based application that allows users to track their exercise
        progress: walking, running, cycling, etc. <br />
        Created with React, Bootstrap, Express.js, Node.js, MySQL and deployed
        to Heroku. <br />
        <Link href={"https://missiontothemoon.net"} target="_blank" rel="noopener">
          Visit here
        </Link>
      </Typography>
    )
  }
];

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.common.white,
    paddingTop: "2%"
  },
  button: {
    color: theme.palette.grey[200]
  },
  text: {
    fontSize: "calc(18px + (32 - 18) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
    color: theme.palette.common.black,
    padding: theme.spacing.unit * 3
  },
  icon: {
    fontSize: "calc(48px + (92 - 48) * ((100vw - 300px) / (1600 - 300)))"
  },
  body: {
    fontSize: "calc(10px + (14 - 10) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
    color: theme.palette.common.black,
    padding: theme.spacing.unit * 3
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
        <Grid item md={10} sm={10} xs={12}>
          <GridList spacing={16} cellHeight={210}>
            {tileData.map(tile => {
              return (
                <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    subtitle={tile.date}
                    actionIcon={
                      <PopupState>
                        {popupState => (
                          <div>
                            <IconButton
                              className={classes.button}
                              {...bindToggle(popupState)}
                            >
                              <Information />
                            </IconButton>
                            <Popper {...bindPopper(popupState)} transition>
                              {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                  <Paper>
                                    {React.cloneElement(tile.description, {
                                      className: classes.body,
                                      align: "center"
                                    })}
                                  </Paper>
                                </Fade>
                              )}
                            </Popper>
                          </div>
                        )}
                      </PopupState>
                    }
                  />
                </GridListTile>
              );
            })}
          </GridList>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Portfolio);
