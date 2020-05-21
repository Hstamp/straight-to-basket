import React, { useReducer } from 'react';
import {
  Grid, Typography, IconButton, makeStyles,
} from '@material-ui/core';
import { string, func } from 'prop-types';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '../Button';
import { longDescriptor } from '../../data';
import MenuItem from '../Category/MenuItem';

const styles = makeStyles(({ palette, spacing }) => ({
  root: {
    padding: `${spacing(6)}px ${spacing(7)}px`,
    '& h1': {
      paddingBottom: spacing(4),
    },
  },
  orderHeader: {
    borderBottom: `1px solid ${palette.common.accent}`,
  },
  orderQtyBtns: {
    color: palette.common.grey,
    marginTop: spacing(3),
    '& span': {
      borderRadius: 30,
      fontSize: spacing(5),
    },
  },
  closeButton: {
    '& svg': {
      color: palette.secondary.dark,
    },
    '&:hover': {
      backgroundColor: palette.secondary.light,
    },
  },
}));

const reducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      return state + 1;
    }
    case 'subtract': {
      return state - 1;
    }
    default: return state;
  }
};

const OrderPanel = ({ itemName, itemPrice, handleClose }) => {
  const {
    root, orderHeader, orderQtyBtns, closeButton,
  } = styles();
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <Grid container className={root}>
      <Grid container justify="space-between" alignItems="flex-end" className={orderHeader}>
        <Typography variant="h1" data-testid="orderPanelTitle"> Select Quantity </Typography>
        <IconButton onClick={() => handleClose()} className={closeButton} data-testid="closeButton">
          <CancelIcon fontSize="large" />
        </IconButton>
      </Grid>
      <MenuItem item={{ name: itemName, price: itemPrice }} dataTestId={`order-${itemName}`} description={longDescriptor.description} />
      <Grid container justify="space-around" className={orderQtyBtns} data-testid="orderPanelQty">
        <Button onClick={() => dispatch({ type: 'subtract' })} data-testid="qtyMinusButton"> - </Button>
        <Button
          disabled={state === 0}
          onClick={() => handleClose(itemName, itemPrice, state)}
          data-testid="addToOrderButton"
        >
          {`[${state}] Add To Order`}
        </Button>
        <Button onClick={() => dispatch({ type: 'add' })} data-testid="qtyPlusButton"> + </Button>
      </Grid>
    </Grid>
  );
};

OrderPanel.propTypes = {
  itemName: string,
  itemPrice: string,
  handleClose: func.isRequired,
};

OrderPanel.defaultProps = {
  itemName: 'Test',
  itemPrice: '£1.99',
};

export default OrderPanel;
