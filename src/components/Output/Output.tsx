import React from 'react';
import './Output.css';

interface Props {
  count: number;
}

const Output: React.FC<Props> = ({ count }) => (<h3>Total: { count }</h3>);

export default Output;
