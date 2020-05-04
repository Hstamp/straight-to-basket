import React from 'react';
import {
  makeStyles, Grid, Typography, Box,
} from '@material-ui/core';
import { string, object } from 'prop-types';


const styles = makeStyles(({ palette, spacing, breakpoints }) => ({
  root: {
    padding: `${spacing(3)}px 0px`,
    flexGrow: 1,
    opacity: 0.8,
  },
  itemDescription: {
    paddingTop: spacing(),
    fontSize: spacing(3.5),
  },
}));

// Destructure menuItems prop to extract category and menuItems array
const MenuItem = ({ item: { name, price }, dataTestId }) => {
  const { root, itemDescription } = styles();
  return (
    <Grid container justify="space-between" data-testid={`item-${dataTestId.replace(/\s/g, '')}`} className={root}>
      <Grid item xs={10}>
        <Typography>
          {' '}
          {name}
          {' '}
        </Typography>
        <Typography className={itemDescription}>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique.
          {' '}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography data-testid="itemPrice">
          {' '}
          {price}
          {' '}
        </Typography>
      </Grid>
    </Grid>
  );
};

MenuItem.propTypes = {
  dataTestId: string.isRequired,
  item: object.isRequired,
};

export default MenuItem;
