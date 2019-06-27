import React from 'react';
import Proptypes from 'prop-types';


const ButtonSimple = ({children, onSubmit}) => {
  console.log(onSubmit)
  return (
    <div className='button-container'>
      <button onClick={onSubmit}>
        {children}
      </button>
  </div>
  )
}

ButtonSimple.propTypes = {
  children: Proptypes.string
}


export default ButtonSimple
