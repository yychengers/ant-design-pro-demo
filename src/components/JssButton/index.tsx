import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  myButton: {
    color: 'green',
    margin: {
      top: 5,
      right: 0,
      bottom: 0,
      left: '1rem',
    },
    '& span': {
      fontWeight: 'bold',
    },
  },
  myLabel: {
    fontStyle: 'italic',
  },
});

const JssButton = ({ children }: any) => {
  const classes = useStyles();
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  );
};

export default JssButton;
