import React from 'react';
import {
  makeStyles, Grid, Box, Typography,
} from '@material-ui/core';
import menuData from '../../data/menuData';
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
}));

const Menu = () => {
  const { root, menuImage, menuAllItems } = styles();

  const partialMenu = [menuData[0]];

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
            />
          ),
        )
      }
      </Box>
    </Grid>
  );
};

export default Menu;
