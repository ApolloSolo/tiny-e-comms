import React from "react";

const SelectDropdown = ({ setCategory }) => {
  const setCat = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <select
          className="text-center appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-900
      bg-green-400 bg-clip-padding bg-no-repeat
      border border-solid border-green-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-gray-300 focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
          onClick={setCat}
        >
          <option selected>Category</option>
          <option value="sports">Sports</option>
          <option value="office">Office</option>
          <option value="home">Home</option>
          <option value="bonsai">Bonsai</option>
        </select>
      </div>
    </div>
  );
};

export default SelectDropdown;
