import React from 'react';
import { Grid, Box, makeStyles } from '@material-ui/core';
import { node, string } from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

const styles = makeStyles(({ palette, spacing }) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: palette.primary.main,
    padding: spacing(3),
  },
}));

const Layout = ({ children, dataTestId }) => {
  const { root } = styles();
  return (
    <Box data-testid={dataTestId}>
      <Header />
      <Grid container justify="center" className={root}>
        {children}
      </Grid>
      <Footer />
    </Box>
  );
};

Layout.propTypes = {
  children: node.isRequired,
  dataTestId: string,
};

Layout.defaultProps = {
  dataTestId: 'layout',
};

export default Layout;
