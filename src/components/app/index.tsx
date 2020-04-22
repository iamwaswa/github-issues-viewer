import { BrowserRouter, Route, RouteComponentProps } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { GlobalStyles } from '../../styles/global';
import React from 'react';
import { Routes } from '../routes';
import { ThemeProvider } from 'styled-components';
import theme from 'src/theme';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Route
          render={({ location }: RouteComponentProps): React.ReactNode => (
            <TransitionGroup component={null}>
              <CSSTransition timeout={300} classNames='page' key={location.key}>
                <Routes />
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};
