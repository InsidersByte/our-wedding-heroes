/* @flow */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { lightGreen500 } from 'material-ui/styles/colors';
import LandingPage from '../LandingPage';
import NoMatch from '../../components/NoMatch';

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
    <Switch>
      <Route exact path={match.url} component={LandingPage} />
      <Route component={NoMatch} />
    </Switch>
  </MuiThemeProvider>
);

export default Main;
