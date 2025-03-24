import { CircularProgress } from '@mui/material';
import React from 'react';
import useStyles from './Loader.styles';

const Loader: React.FC = () => {
  const classes = useStyles();

  return <CircularProgress className={classes.loader} size={70} />;
};

export default Loader;
