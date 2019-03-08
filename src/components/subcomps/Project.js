import React from "react";
import {
  Grid,
  Paper,
  Typography,
  withStyles,
  Divider
} from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.grey[200],
    height: "100%",
    color: theme.palette.common.white,
    paddingTop: "2%",
    paddingBottom: "2%"
  },
  title: {
    fontSize: "calc(12px + (22 - 12) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
    color: theme.palette.common.black,
    marginLeft: "1vw"
  },
  subtitle: {
    fontSize: "calc(12px + (16 - 12) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
    marginLeft: "1vw"
  },
  text: {
    fontSize: "calc(10px + (14 - 10) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
    marginLeft: "1vw",
    marginTop: "1vh"
  },
});

function Project(props) {
  const { classes } = props;
  return (
    <Grid item md={5}>
      <Paper className={classes.paper}>
        <Carousel
          autoplay
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          {props.images.map(image => {
            return <div>{image}</div>;
          })}
        </Carousel>
        <div
          style={{ display: "flex", alignItems: "center", paddingTop: "2.5vh" }}
        >
          <Typography variant="h5" className={classes.title}>
            {props.title}
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            {props.subtitle}
          </Typography>
        </div>
        <Divider />
          {props.content}
      </Paper>
    </Grid>
  );
}

export default withStyles(styles)(Project);
