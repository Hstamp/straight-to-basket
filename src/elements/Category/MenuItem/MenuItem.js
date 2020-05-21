import React from 'react';
import {
  makeStyles, Grid, Typography,
} from '@material-ui/core';
import { string, object, func } from 'prop-types';
import { shortDescriptor } from '../../../data';


const styles = makeStyles(({ palette, spacing }) => ({
  root: {
    padding: `${spacing(3)}px 0px`,
    flexGrow: 1,
    opacity: 0.8,
    borderBottom: `1px solid ${palette.common.accent}`,
    '& div > p:first-child': {
      fontWeight: 'bold',
    },
  },
  itemDescription: {
    paddingTop: spacing(),
    fontSize: spacing(3.5),
  },
}));

// Destructure menuItems prop to extract category and menuItems array
const MenuItem = ({
  item: { name, price }, description, dataTestId, handleClick,
}) => {
  const { root, itemDescription } = styles();
  return (
    <Grid container justify="space-between" data-testid={dataTestId.replace(/\s/g, '')} className={root} onClick={handleClick && (() => handleClick(name, price))}>
      <Grid item xs={10}>
        <Typography>
          {' '}
          {name}
          {' '}
        </Typography>
        <Typography className={itemDescription}>
          {' '}
          {description}
          {' '}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography data-testid={`${dataTestId.replace(/\s/g, '')}-itemPrice`}>
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
  handleClick: func,
  description: string,
};

MenuItem.defaultProps = {
  description: shortDescriptor.description,
  handleClick: () => {},
};

export default MenuItem;
