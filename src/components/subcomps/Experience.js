import React from "react";
import { Grid, Divider } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";
import Header from "./Header"

const styles = theme => ({
  listBox: {
    marginTop: "1.5vh"
  },
  text: {
    marginTop: "1vh"
  }
});

function Experience(props) {
  const { classes } = props;
  return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        className={classes.listBox}
      >
        <Header title={"Software Developer Intern"} subtitle={"Fruit of the Loom Inc., Integration Solutions"} date={"2018-06 to Present"} />
        <Grid item>
        <Divider />
            <Typography variant="body1" className={classes.text}>
                General duties revolve around developing solutions with a two-pizza team that transfers
                large amounts of data to critical parts of the company: Oracle databases,
                data warehouse, Salesforce, data science, manufacturing, etc. 
            </Typography>
            <Typography variant="body1" className={classes.text}>
                Also individually developed three applications to help business users and
                increase team efficiency.
            </Typography>
        </Grid>
        <Header title={"Enterprise Systems Student Worker"} subtitle={"Western Kentucky University, Information Technology"} date={"2017-01 to 2018-06"} />
        <Grid item>
        <Divider />
            <Typography variant="body1" className={classes.text}>
                Cooperated with the system administrators and other student workers to resolve 
                technical support incidents. Provided support in over 1500 ticket tasks in regards to
                Active Directory, Outlook, and Mailman applications.
            </Typography>
        </Grid>
      </Grid>
  );
}

export default withStyles(styles)(Experience);
