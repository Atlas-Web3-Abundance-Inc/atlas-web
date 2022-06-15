import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ primary, backgroundColor, size, label, type, ...props }) => {
  const mode = primary ? 'storybook-input--primary' : 'storybook-input--secondary';
  
  return (
    <div style={{display:"flex", flexDirection:"column", width:"50%", alignItems:"space-between", padding:"0 2% 0 0"}}>
      <input
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
        {...props}
        type={type}
        placeholder={props.placeholder}
      />
      <label className="block text-gray-700 text-sm font-bold mb-2"> 
        {label}
      </label>  
    </div>
  );
};

Input.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * input contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Input.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
