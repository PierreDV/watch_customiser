import React from 'react';

function Color(props) {
  return (
    <fieldset className="colors-container">
      {props.colorOptions.map(option => (
        <label className="colorOption" key={option.description}>
          <input
            type="radio"
            name="colorChoice"
            value={JSON.stringify(option)}
            onChange={() => props.handleColorChange(option)}
          />
          <ul>
            <li style={{ backgroundColor: option.primary }} />
            <li style={{ backgroundColor: option.secondary }} />
            <li style={{ backgroundColor: option.tertiary }} />
            <li style={{ backgroundColor: option.quaternary }} />
          </ul>
          <span>{option.description}</span>
        </label>
      ))}
    </fieldset>
  );
}

export default Color;