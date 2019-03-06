import React from "react";
import { Grid, Paper } from "@material-ui/core";
import CardOverlay from "../subcomps/CardOverlay";
import withStyles from "@material-ui/core/styles/withStyles";
import us from "../../static/us.jpeg";
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
  }
});

function About(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center" direction="row">
      <Grid item md={8} sm={10} xs={12}>
        <CardOverlay image={us} text="Let's get personal" />
      </Grid>
      <Grid item md={8} sm={10} xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h2" className={classes.text} align="center">
            "Men of few words are the best men."
          </Typography>
          <Typography variant="subtitle1" align="center">
            - William Shakespeare
          </Typography>
          <Typography
            variant="body1"
            className={classes.text2}
            align="center"
            color="textSecondary"
            paragraph
          >
            With that said... I love coffee but I don't depend on it, I'm getting married to my best friend this May, 
            I'll play video games even after a long day in front of a monitor (or chill out with a board game), and
            I like going to the gym (even if leg day kills me). Any questions - besides what my favorite food is? (just cause
            there is too much to love)
          </Typography>
        </Paper>
      </Grid>
      <Grid container justify="center">
        <Grid item md={8} sm={8} xs={12}>
          <Typography variant="h2" className={classes.text} align="center">
            What got me into software development?
          </Typography>
        </Grid>
        <Grid item md={8} sm={8} xs={12}>
          <Typography variant="body1" className={classes.text3} color="textPrimary" align="center">
            I don't think I can pinpoint an exact origin, but let's just say it was a culmination of factors.
            I didn't even think about Computer Science (and hardly heard of it) until halfway through my Freshman year of college.
            We were doing a little programming (Mathematica) in my Calculus course - and I dunno whether it was the years of computer gaming
            and already knowing computers were cool, or the sheer possibility of things I could do with programming - but at that point I decided
            I didn't want to do Pre-Pharmacy anymore.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(About);
