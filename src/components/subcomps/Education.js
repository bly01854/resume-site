import React from "react";
import { Grid, Divider } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";
import Header from "./Header"

const styles = theme => ({
  listBox: {
    marginTop: "1.5vh",
    marginBottom: "10vh"
  },
  text: {
    marginTop: "1vh"
  }
});

function Education(props) {
  const { classes } = props;
  return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        className={classes.listBox}
      >
        <Header title={"Western Kentucky University"} subtitle={"BS in Computer Science, In-major GPA: 3.91"} date={"2015-08 to Present (May 2019)"} />
        <Grid item>
        <Divider />
            <Typography variant="body1" className={classes.text}>
                Coursework: Database, Computer Architecture, Software Engineering, Mobile App Development, Data Structures & Algorithm Analysis, Programming Languages, Unix, Operating Systems, Applied Statistics
            </Typography>
            <Typography variant="body1" className={classes.text}>
                Member of the WKU Computer Science Cloud Lab. My focus is on automated deployment of a bioinformatics cloud-based system.
            </Typography>
            <Typography variant="body1" className={classes.text}>
               Student Ambassador / Panel for WKU's Computer Science program for Ogden Preview Day
            </Typography>
        </Grid>
      </Grid>
  );
}

export default withStyles(styles)(Education);
