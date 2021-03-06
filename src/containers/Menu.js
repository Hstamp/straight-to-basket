import React, { useState } from 'react';
import {
  makeStyles, Grid, Box, Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { menuData } from '../data';
import {
  Button, Category, OrderPanel, Layout,
} from '../elements';
import TotalBasketContext from '../TotalBasketContext';

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
  reviewOrderButton: {
    textAlign: 'center',
    marginTop: spacing(3),
    '& span': {
      borderRadius: 30,
    },
    '& a': {
      textDecoration: 'none',
      color: palette.common.grey,
      fontSize: spacing(5),
    },
  },
}));

const Menu = () => {
  const {
    root, menuImage, menuAllItems, orderPanel, showOrderPanel, reviewOrderButton,
  } = styles();

  const [openPanel, setOpenPanel] = useState(false);
  const { dispatch } = React.useContext(TotalBasketContext);
  const { state } = React.useContext(TotalBasketContext);

  console.log('state', state);

  const handleClick = (menuItemName, menuItemPrice) => {
    setOpenPanel(true);
    dispatch({ type: 'item', value: { item: { menuItemName, menuItemPrice } } });
  };

  const closeOrderPanel = (menuItemName, menuItemPrice, qty) => {
    if ((menuItemName && qty) && menuItemPrice) {
      dispatch({
        type: 'basket',
        value: {
          menuItemName,
          menuItemPrice,
          qty,
        },
      });
    }
    setOpenPanel(false);
  };


  return (
    <Box>
      <Layout dataTestId="menuLayout">
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
            <Box className={reviewOrderButton}>
              <Button
                component={Link}
                to="/review-order"
                // disabled={state.basket.length === 0}
              >
                Review your order
              </Button>
            </Box>
          </Box>
          <Box
            className={`
          ${orderPanel} ${openPanel ? showOrderPanel : ''}
        `}
            data-testid="orderPanel"
          >
            {
              openPanel && (
              <OrderPanel
                itemName={state.item.menuItemName}
                itemPrice={state.item.menuItemPrice}
                handleClose={closeOrderPanel}
              />
              )
            }
          </Box>
        </Grid>
      </Layout>
    </Box>
  );
};

export default Menu;
