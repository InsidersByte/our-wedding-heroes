/* @flow */

import React from 'react';
import { Route } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { lightGreen500 } from 'material-ui/styles/colors';
import LandingPage from '../LandingPage';

type PropsType = {
  match: Match,
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightGreen500,
  },
});

const Main = ({ match }: PropsType) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Route exact path={match.url} component={LandingPage} />
  </MuiThemeProvider>
);

export default Main;
