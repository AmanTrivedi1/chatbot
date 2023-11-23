import React from "react";
import { useDispatch } from "react-redux";
import { schuduale } from "../redux/counterSlice";

const SchuduleDropdown = ({ showSchuduleDropdown }) => {
  const dispatch = useDispatch();

  const handleAgeChange = (e) => {
    if (e.target.value !== "Invalid") {
      showSchuduleDropdown(e.target.value);
      dispatch(schuduale(e.target.value));
    }
  };

  return (
    <div>
      <label htmlFor="age">Choose your schedule</label>
      <select
        className="bg-white text-black focus:outline-none"
        id="age"
        onChange={(e) => {
          handleAgeChange(e);
        }}
      >
        <option value="Invalid">Choose Schudule</option>
        <option>Morning</option>
        <option>Afternoon</option>
        <option>Evening</option>
      </select>
    </div>
  );
};

export default SchuduleDropdown;
