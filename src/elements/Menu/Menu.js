import React, { useState } from 'react';
import {
  makeStyles, Grid, Box, Typography,
} from '@material-ui/core';
import { longDescriptor, menuData } from '../../data';
import Category from './Category';

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
    // Sets the position relative to the window, not document
    // element stays in the same place when scrolled
    position: 'fixed',
    right: 0,
    top: 0,
    bottom: 0,
    width: 0,
    backgroundColor: palette.primary.light,
    zIndex: 1,
    // Set the transition on the div and specify the transition property width
    // This will phase in the change when the width property is changed
    // transition-property, transition-duration, transition-timing-function
    transition: 'width 800ms cubic-bezier(0.190, 1.000, 0.560, 1.000)',
  },
  showOrderPanel: {
    width: '100%',
  },
  orderPanelContent: {
    padding: spacing(6),
  },
}));

const Menu = () => {
  const {
    root, menuImage, menuAllItems, orderPanel, showOrderPanel, orderPanelContent,
  } = styles();
  const [openPanel, setOpenPanel] = useState(false);

  const handleClick = (menuItemName) => {
    setOpenPanel(true);
    console.log(menuItemName);
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
        {openPanel && (
          <Grid container justify="center" className={orderPanelContent}>
            <Typography variant="h2" data-testid="orderPanelTitle"> Menu Title </Typography>
            <Typography variant="body2" data-testid="orderPanelDesc">
              {longDescriptor.description}
            </Typography>
          </Grid>
        )}
      </Box>
    </Grid>
  );
};

export default Menu;
