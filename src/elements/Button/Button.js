import React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core';
import { string, node } from 'prop-types';

const styles = makeStyles(({ palette, spacing }) => ({
  root: {
    color: palette.common.grey,
  },
  githubIcon: {
    color: palette.common.accent,
    paddingRight: spacing(2),
  },
}));

const Button = ({ dataTestId, children, ...props }) => {
  const { root } = styles();
  return (
    <MuiButton
      variant="contained"
      color="secondary"
      disableElevation
      className={root}
      data-testid={dataTestId}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

Button.propTypes = {
  dataTestId: string,
  children: node.isRequired,
};

Button.defaultProps = {
  dataTestId: 'button',
};
export default Button;
