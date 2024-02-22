function CustomInput({label, disabled, type}) {
  return (
    <>
      <label htmlFor=""  style={{ fontSize: '16px'}}>{label}</label>
      <input type={type} disabled={disabled} />
    </>
  );
}


export default CustomInput;