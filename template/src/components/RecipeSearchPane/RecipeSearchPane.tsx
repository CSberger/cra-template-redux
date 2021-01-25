import React from 'react';
import { Box, debounce, makeStyles, TextField } from '@material-ui/core';

interface IProps {
  onSearch: (arg1: string) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    width: '80ch',
  },
}));

function RecipeSearchPane({ onSearch }: IProps) {
  const classes = useStyles();

  const debouncedTextChange = debounce((text) => {
    onSearch(text);
  }, 500);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedTextChange(e.target.value);
  };

  return (
    <>
      <Box className={classes.root}>
        <TextField
          className={classes.input}
          id="standard-basic"
          label="Input a list of ingredients to restrict by"
          onChange={handleTextChange}
        />
      </Box>
    </>
  );
}

export default RecipeSearchPane;
