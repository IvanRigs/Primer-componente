import React, { useState } from 'react';

const CheckboxTerms = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label style={{ fontSize: '16px' }}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Acepto los términos y condiciones
      </label>
    </div>
  );
};

export default CheckboxTerms;
