import React from 'react';
import {
  Grid, Typography, Box, makeStyles,
} from '@material-ui/core';
import { string } from 'prop-types';
import Button from '../../Button';
import { longDescriptor } from '../../../data';
import MenuItem from '../Category/MenuItem';

const styles = makeStyles(({ palette, spacing }) => ({
  root: {
    padding: `${spacing(6)}px ${spacing(7)}px`,
    '& h1': {
      paddingBottom: spacing(4),
    },
  },
  orderDescription: {
    borderTop: `1px solid ${palette.common.accent}`,
  },
  orderQtyBtns: {
    color: palette.common.grey,
    margin: `${spacing(3)}px ${spacing(6)}px`,
    '& span': {
      borderRadius: 30,
      fontSize: spacing(5),
    },
  },
}));

const OrderPanel = ({ itemName, itemPrice }) => {
  const {
    root, orderDescription, orderQtyBtns,
  } = styles();
  return (
    <Grid container className={root}>
      <Typography variant="h1" data-testid="orderPanelTitle"> Select Quantity </Typography>
      <Box className={orderDescription} data-testid="orderPanelDesc">
        <MenuItem item={{ name: itemName, price: itemPrice }} dataTestId={`order-${itemName}`} description={longDescriptor.description} />
      </Box>
      <Grid container justify="space-around" className={orderQtyBtns} data-testid="orderPanelQty">
        <Button> - </Button>
        <Button disabled>
          [0]
          Add Item
        </Button>
        <Button> + </Button>
      </Grid>
    </Grid>
  );
};

OrderPanel.propTypes = {
  itemName: string,
  itemPrice: string,
};

OrderPanel.defaultProps = {
  itemName: 'Test',
  itemPrice: '£1.99',
};

export default OrderPanel;
