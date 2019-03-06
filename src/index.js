import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import 'typeface-roboto'
import us from "./static/us.jpeg";
import code from "./static/code.jpg";

const theme = createMuiTheme();

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <App pictures={[us, code]} />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
