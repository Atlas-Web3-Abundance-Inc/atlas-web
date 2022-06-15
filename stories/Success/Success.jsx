import React from 'react';
import PropTypes from 'prop-types';
import './success.css';
// import {Input} from "../Input/Input"
// import {Button} from "../Button"

/**
 * Primary UI component for user interaction
 */
export const Success = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-form--primary' : 'storybook-form--secondary';
  return (
    
    <section>
      <h4 className="font-bold text-3xl text-yellow-500">Thank you For Signing Up with Atlas!</h4> 
      <p className="mb-4"> We're your new rental agent. You pay us and we pay your landlord, and you get sweet perks each month + when it's time to renew your lease and move! </p>
    </section>
  );
};

Success.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Success.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
