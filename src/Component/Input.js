const Input = (props) => {
  return (
    <input
      {...props}
      className={
        "block w-full px-4 py-2 mt-2 bg-gray-800 border rounded-md  text-gray-300 border-gray-600 focus:border-blue-500 focus:outline-none focus:ring" +
        props.className
      }
    />
  );
};

export default Input;
