import React from 'react';
import { WatchContext } from './ProductConfig';

function Color() {
  return (
    <WatchContext.Consumer>
      {({colorOptions, handleColorChange}) => (
        <fieldset className="colors-container">
          {colorOptions.map(option => (
            <label className="colorOption" key={option.description}>
              <input
                type="radio"
                name="colorChoice"
                value={JSON.stringify(option)}
                onChange={() => handleColorChange(option)}
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
      )}
    </WatchContext.Consumer>
   
  );
}

export default Color;