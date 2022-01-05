const Input = (props) => {
  return (
    <input
      {...props}
      className={
        "bg-chalfal_color-brighter text-chalfal_text p-2 border border-chalfal_color-brightest rounded-md block " +
        props.className
      }
    />
  );
};

export default Input;
