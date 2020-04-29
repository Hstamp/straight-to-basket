import React from 'react';
import {
  makeStyles, Grid, Box, Typography,
} from '@material-ui/core';


const styles = makeStyles(({ palette, spacing, breakpoints }) => ({
  root: {
    flexDirection: 'column',
  },
  menuImage: {
    padding: `${spacing(20)}px 0px`,
    marginBottom: spacing(3),
    backgroundColor: palette.primary.dark,
  },

}));

const Menu = () => {
  const { root, menuImage } = styles();

  return (
    <Grid container className={root} data-testid="fullMenu">
      <Box className={menuImage} data-testid="fullMenuImage" />
      <Typography variant="h2"> Pick your order... </Typography>

    </Grid>
  );
};

export default Menu;
