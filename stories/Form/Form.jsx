import React from 'react';
import PropTypes from 'prop-types';
import './form.css';
import {Input} from "../Input/Input"
import {Button} from "../Button"

/**
 * Primary UI component for user interaction
 */
export const Form = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-form--primary' : 'storybook-form--secondary';
  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      // className={['storybook-form', `storybook-form--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor, display:"flex" }}
      onSubmit={()=>{console.log("submitting")}}
      {...props}
    >
      <div style={{display:"flex", }}>
        <Input
          label={"First Name"}
        />
        <Input
          label={"Last Name"}
        />
      </div>
      <div style={{display:"flex", }}>
        <Input
          label={"Phone number"}
          type="tel"
        />
        <Input
          label={"Company"}
          
        />
      </div>
      <div>
        <Input
          label={"Home address"}
      />
      </div>      
      <div style={{margin:"0 0 20px"}}>
        <Input
          label={"Email"}
          type="email"
        />
        </div>
        <div>
        <Input
          label={"Current address"}
          type="text"
        />
      </div>
      <div style={{margin:"0 0 20px",display:"flex"}}>
        <Input
          placeholder={"https://twitter.com/_queenscript"}
          label={"Twitter Link"}
          type="text"
        />
        <Input
            placeholder={"https://linkedin.com/in/queenshabazz"}
            label={"LinkedIn"}
            type="text"
        />
        <Input
            placeholder={"https://www.facebook.com/QueenShabazz/"}
            label={"Facebook"}
            type="text"
        />
      </div>
      <div style={{margin:"0 0 20px",display:"flex"}}>
        <Input
          label={"Current address"}
          type="text"
        />
      </div>
      <div style={{margin:"0 0 20px",display:"flex"}}>
        <Input
          placeholder={"111 San Jose"}
          label={"Landlord Adress"}
          type="text"
        />
        <Input
            placeholder={"landlord@email.coma"}
            label={"Landlord Email"}
            type="text"
        />
        <Input
            placeholder={"(555)555-5555"}
            label={"Landlord Phone"}
            type="text"
        />
      </div>    
      <Button
        label={"Submit"}
      />
    </form>
  );
};

Form.propTypes = {
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

Form.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
