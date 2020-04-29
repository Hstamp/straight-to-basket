import React from 'react';
import {
  Grid, Box, makeStyles, Typography,
} from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SettingsIcon from '@material-ui/icons/Settings';
import { Desktop } from '../../helpers';

const styles = makeStyles(({ palette, spacing, breakpoints }) => ({
  root: {
    backgroundColor: palette.secondary.main,
    padding: spacing(3),
    borderBottom: `1px solid ${palette.common.offWhite}`,
    [breakpoints.up('md', 'lg')]: {
      justifyContent: 'space-between',
      padding: spacing(9),
    },
  },
  straightToBasket: {
    display: 'inherit',
    '& svg:first-child': {
      paddingRight: spacing(3),
    },
    // nth of type looks only at svg types and select the 2nd one
    // This is more specific than nth-child(2)
    '& svg:nth-of-type(2)': {
      paddingLeft: spacing(3),
    },
    [breakpoints.up('md', 'lg')]: {
      justifyContent: 'left',
      '& h1, svg': {
        fontSize: spacing(8),
      },
    },
  },
  basketIcon: {
    fontSize: spacing(6),
    color: palette.common.accent,
  },
  settingsIcon: {
    justifyContent: 'right',
    fontSize: spacing(8),
  },
}));

const Header = () => {
  const {
    root, straightToBasket, basketIcon, settingsIcon,
  } = styles();
  return (
    <Grid container justify="center" className={root} data-testid="header">
      <Box className={straightToBasket} data-testid="straightToBasket">
        <ShoppingBasketIcon className={basketIcon} />
        <Typography variant="h1">
          Straight to Basket
        </Typography>
        <ShoppingBasketIcon className={basketIcon} />
      </Box>
      <Desktop>
        <SettingsIcon className={settingsIcon} data-testid="settings" />
      </Desktop>
    </Grid>
  );
};

export default Header;
