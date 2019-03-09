import React from "react";
import {
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";

const styles = theme => ({
  listBox: {
    marginTop: "1.5vh"
  }
});

function Skills(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" className={classes.listBox}>
      <Grid item md={5} sm={5} xs={6}>
        <Typography align="center" variant="title">
          Proficient
          <Divider />
        </Typography>
        <List inset>
          <ListItem>
            <ListItemText
              primary="Javascript"
              secondary="React, Redux, Express, Node.js, AJAX"
              primaryTypographyProps={{ align: "center" }}
              secondaryTypographyProps={{ align: "center" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="CSS"
              secondary="Material UI, Semantic UI, Bootstrap"
              primaryTypographyProps={{ align: "center" }}
              secondaryTypographyProps={{ align: "center" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="C#"
              secondary=".NET"
              primaryTypographyProps={{ align: "center" }}
              secondaryTypographyProps={{ align: "center" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="SQL"
              secondary="PostgreSQL, MySQL, Oracle"
              primaryTypographyProps={{ align: "center" }}
              secondaryTypographyProps={{ align: "center" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Version Control"
              secondary="Git"
              primaryTypographyProps={{ align: "center" }}
              secondaryTypographyProps={{ align: "center" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Agile Methodology"
              secondary="Scrum"
              primaryTypographyProps={{ align: "center" }}
              secondaryTypographyProps={{ align: "center" }}
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item md={5} sm={5} xs={6}>
        <Typography align="center" variant="title">
          Familiar
          <Divider />
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Java"
              secondary="Android Studio"
              primaryTypographyProps={{ align: "center" }}
              secondaryTypographyProps={{ align: "center" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Python"
              primaryTypographyProps={{ align: "center" }}
              secondaryTypographyProps={{ align: "center" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Docker"
              primaryTypographyProps={{ align: "center" }}
              secondaryTypographyProps={{ align: "center" }}
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Skills);
