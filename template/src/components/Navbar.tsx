import React from 'react';
import { NavLink } from 'react-router-dom';

import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const FRIDGESCANNER_TITLE = 'Fridgescanner';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Navbar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <NavLink to="/about">
            <MenuIcon />
          </NavLink>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {FRIDGESCANNER_TITLE}
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
