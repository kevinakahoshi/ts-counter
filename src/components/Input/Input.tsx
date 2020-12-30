import React from 'react';
import './Input.css';

interface Props {
  changeVal: number;
  handleChange: (event: React.ChangeEvent<HTMLFormElement>) => void;
}

export const Input: React.FC<Props> = ({ changeVal, handleChange }) => (
  <form
    onChange={handleChange}
    onSubmit={(event: React.ChangeEvent<HTMLFormElement>) => event.preventDefault()}
  >
    <input
      className="number-input"
      defaultValue={changeVal}
    />
  </form>
);
