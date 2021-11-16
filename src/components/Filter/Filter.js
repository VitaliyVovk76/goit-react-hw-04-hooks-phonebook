import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
  <div className={s.filterWrapper}>
    <label className={s.filterLabel}>
      Find contacts by name
      <input
        className={s.filterInput}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
