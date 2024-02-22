import React from 'react';

const Button = ({ onClick, text, buttonStyle, disabled}) => {
  return (
    <button onClick={onClick} style={buttonStyle} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
