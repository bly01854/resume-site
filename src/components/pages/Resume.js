import React from "react";
import {
  Grid,
  Paper,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import project from "../../static/project.jpg";
import CardOverlay from "../subcomps/CardOverlay";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";
import Skills from "../subcomps/Skills";
import Experience from "../subcomps/Experience";
import Section from "../subcomps/Section";
import Education from "../subcomps/Education"

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
  text2: {
    fontSize: "calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.2em + (10 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
    paddingTop: "1.5vh",
    marginLeft: "5vw",
    marginRight: "5vw"
  },
  text3: {
    fontSize: "calc(10px + (16 - 10) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.2em + (8 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
    paddingTop: "1vh",
    marginLeft: "2.5vw",
    marginRight: "2.5vw"
  },
  icon: {
    fontSize: "calc(48px + (92 - 48) * ((100vw - 300px) / (1600 - 300)))",
    marginTop: "1.5vh"
  },
  button: {
    marginTop: "1.5vh",
    marginBottom: "1.5vh"
  },
  listBox: {
    marginTop: "1.5vh"
  }
});

function Resume(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center" direction="row">
      <Grid item md={8} sm={10} xs={12}>
        <CardOverlay image={project} text="Look at what I've been up to" />
      </Grid>
      <Grid item md={8} sm={10} xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h2" className={classes.text} align="center">
            "Always walk through life as if you have something new to learn and
            you will."
          </Typography>
          <Typography variant="subtitle1" align="center">
            - Vernon Howard
          </Typography>
          <Typography align="center">
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              className={classes.button}
              download
              href="../../static/BaileyHenson.pdf"
            >
              Download Resume
            </Button>
          </Typography>
        </Paper>
      </Grid>
      <Grid container justify="center">
        <Section title={"What I Use"} content={<Skills />} />
        <Section title={"Where I've Been"} content={<Experience />} />
        <Section title={"Where I've Learned"} content={<Education />}/>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Resume);
