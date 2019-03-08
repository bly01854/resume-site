import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import 'typeface-roboto'
import us from "./static/us.jpeg";
import code from "./static/code.jpg";
import lake from "./static/lake.jpg";

const theme = createMuiTheme();

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <App pictures={[code, us, lake]} />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
