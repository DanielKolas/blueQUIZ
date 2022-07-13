import React from "react";
import Select from "react-select";

const CustomSelect = (props) => {
  return (
    <Select
      options={props.questionList}
      onChange={props.onChange}
      placeholder="Please select a question"
    />
  );
};

export default CustomSelect;
