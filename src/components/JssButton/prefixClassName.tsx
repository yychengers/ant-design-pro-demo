import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(
  {
    myButton: {
      padding: (props) => props.spacing,
    },
    myLabel: (props: any) => {
      return {
        display: 'block',
        color: props.labelColor,
        fontWeight: props.fontWeight,
        fontStyle: props.fontStyle,
      };
    },
  },
  {
    name: 'Button',
  },
);

const JssButton = ({ children, ...props }: any) => {
  const classes = useStyles(props);
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  );
};

JssButton.defaultProps = {
  spacing: 10,
  fontWeight: 'bold',
  labelColor: 'red',
};

export default JssButton;
