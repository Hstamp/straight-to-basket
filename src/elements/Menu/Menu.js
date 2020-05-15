import React, { useState, useReducer } from 'react';
import {
  makeStyles, Grid, Box, Typography,
} from '@material-ui/core';
import { menuData } from '../../data';
import Category from './Category';
import OrderPanel from './OrderPanel';

const styles = makeStyles(({ palette, spacing }) => ({
  root: {
    flexDirection: 'column',
  },
  menuImage: {
    padding: `${spacing(20)}px 0px`,
    marginBottom: spacing(3),
    backgroundColor: palette.primary.dark,
  },
  menuAllItems: {
    padding: `${spacing(4)}px ${spacing()}px`,
  },
  orderPanel: {
    /*
      position: 'fixed' sets the position relative to the window, not document
      element stays in the same place when scrolled
    */
    position: 'fixed',
    right: 0,
    top: 0,
    bottom: 0,
    width: 0,
    backgroundColor: palette.primary.light,
    zIndex: 1,
    /*
     Set the transition on the div and specify the transition property width
     This will phase in the change when the width property is changed
     transition-property, transition-duration, transition-timing-function
    */
    transition: 'width 800ms cubic-bezier(0.190, 1.000, 0.560, 1.000)',
  },
  showOrderPanel: {
    width: '100%',
  },
}));

/*
  First argument is the current state, the second is the action to update it
  You can use action.type to perform checks inside the reducer
  and action.value to update the state value
*/
const reducer = (state, action) => ({
  ...state,
  ...action.value,

});

const Menu = () => {
  const {
    root, menuImage, menuAllItems, orderPanel, showOrderPanel,
  } = styles();
  const [openPanel, setOpenPanel] = useState(false);

  /*
    state is set by the dispatch function.
    The reducer function gives useReducer more flexibility than useState
    to perform different kinds of state update.
  */
  const [state, dispatch] = useReducer(reducer, { menuItemName: '', menuItemPrice: '' });

  const handleClick = (menuItemName, menuItemPrice) => {
    setOpenPanel(true);
    dispatch({ value: { menuItemName, menuItemPrice } });
  };

  const closeOrderPanel = () => {
    setOpenPanel(false);
  };

  return (
    <Grid container className={root} data-testid="menu">
      <Box className={menuImage} data-testid="menuImage" />
      <Typography variant="h2"> Pick your order... </Typography>
      <Box data-testid="menuAllItems" className={menuAllItems}>
        {
          menuData.map(
            (menuItems) => (
              <Category
                key={menuItems.id}
                menuItems={{ ...menuItems }}
                dataTestId={menuItems.category}
                handleClick={handleClick}
              />
            ),
          )
        }
      </Box>
      <Box
        className={`
          ${orderPanel} ${openPanel ? showOrderPanel : ''}
        `}
        onClick={closeOrderPanel}
        data-testid="orderPanel"
      >
        {openPanel && <OrderPanel itemName={state.menuItemName} itemPrice={state.menuItemPrice} />}
      </Box>
    </Grid>
  );
};

export default Menu;