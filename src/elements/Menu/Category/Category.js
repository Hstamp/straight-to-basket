import React from 'react';
import {
  makeStyles, Grid, Typography,
} from '@material-ui/core';
import { string, object } from 'prop-types';
import MenuItem from './MenuItem';


const styles = makeStyles(({ palette, spacing, breakpoints }) => ({
  root: {
    padding: spacing(2),
    flexDirection: 'column',
  },
  title: {
    borderBottom: `1px solid ${palette.common.accent}`,
    paddingBottom: spacing(),
    marginBottom: spacing(2),
  },
}));

// Destructure menuItems prop to extract category and menuItems array
const Category = ({ menuItems: { category, menuItems }, dataTestId }) => {
  const { root, title } = styles();
  return (
    <Grid container data-testid={`categoryBlock-${dataTestId}`} className={root}>
      <Typography variant="body2" data-testid="categoryTitle" className={title}>
        {category}
      </Typography>
      {menuItems.map((menuItem) => (
        <MenuItem
          key={menuItem.id}
          item={menuItem}
          dataTestId={menuItem.name}
        />
      ))}
    </Grid>
  );
};

Category.propTypes = {
  dataTestId: string.isRequired,
  menuItems: object.isRequired,
};

export default Category;
