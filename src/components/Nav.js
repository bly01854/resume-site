import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton/IconButton";
import logo from "../static/BH.png";
import { GithubBox, LinkedinBox } from "mdi-material-ui";
import Main from "./Main";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    justifyContent: "flex-end"
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between"
  },
  logo: {
    height: 65,
    width: 65
  },
  navLinks: {

  }
});

class Nav extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Toolbar className={classes.toolbarMain}>
            <div className={classes.toolbarTitle}>
              <IconButton>
                <img src={logo} alt="BHLogo" className={classes.logo} />
              </IconButton>
            </div>
            <IconButton>
              <GithubBox fontSize="large" />
            </IconButton>
            <IconButton>
              <LinkedinBox fontSize="large" />
            </IconButton>
          </Toolbar>
          <Toolbar variant="dense" className={classes.toolbarSecondary}>
            <Typography color="inherit" noWrap>
              About
            </Typography>
            <Typography color="inherit" noWrap>
              Portfolio
            </Typography>
            <Typography color="inherit" noWrap>
              Resume
            </Typography>
            <Typography color="inherit" noWrap>
              Contact
            </Typography>
          </Toolbar>
        </div>
        <Main />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Nav);