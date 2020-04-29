import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';


const styles = makeStyles(({ palette, spacing, breakpoints }) => ({
  root: {
    display: 'flex',
    position: 'sticky',
    bottom: 0,
    padding: spacing(3),
    backgroundColor: palette.secondary.main,
    '& p': {
      paddingTop: spacing(),
    },
    [breakpoints.up('md', 'lg')]: {
      padding: spacing(9),
      '& p': {
        fontSize: spacing(5),
      },
    },
  },
  githubIcon: {
    color: palette.common.accent,
    paddingRight: spacing(2),
  },
}));

const Footer = () => {
  const { root, githubIcon } = styles();

  return (
    <Box data-testid="footer" className={root}>
      <a href="https://github.com/Hstamp">
        <GitHubIcon className={githubIcon} data-testid="footerGithubIcon" />
      </a>
      <Typography>
        Hstamp
      </Typography>
    </Box>
  );
};

export default Footer;
