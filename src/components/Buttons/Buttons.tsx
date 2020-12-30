import React from 'react';
import './Buttons.css';

interface Props {
  handleDecrement: () => void;
  handleIncrement: () => void;
  match: boolean;
}

export const Buttons: React.FC<Props> = ({ handleDecrement, handleIncrement, match }) => {
  return (
    <div className="buttons-wrapper">
      <button
        className="controls control-decrease"
        onClick={handleDecrement}
        disabled={!match}
      >
        -
      </button>
      <button
        className="controls control-increase"
        onClick={handleIncrement}
        disabled={!match}
      >
        +
      </button>
    </div>
  )
}
