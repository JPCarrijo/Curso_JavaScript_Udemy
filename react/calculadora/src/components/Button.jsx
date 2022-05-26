import React from "react";
import './Button.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  let classes = 'button'
  classes += props.operation ? ' operation' : ''
  classes += props.triple ? ' triple' : ''
  classes += props.double ? ' double' : ''
  // console.log(classes);
  return (
    <>
      <button
        className={classes}
        onClick={e => props.click(props.label)}>
        {props.label}
      </button>
    </>
  )
}