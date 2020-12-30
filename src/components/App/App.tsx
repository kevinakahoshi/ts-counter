import React, { useState } from 'react';
import { Buttons } from '../Buttons/Buttons';
import { Input } from '../Input/Input';
import Output from '../Output/Output';
import './App.css';

const numCheck = new RegExp(/^[0-9]*$/);

const App: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const [changeVal, setChangeVal] = useState<number>(1);
  const [match, setMatch] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>): void => {
    const newVal: string = event.target.value;
    const regExpMatch: boolean = numCheck.test(newVal);

    if (regExpMatch && !match) {
      setMatch(() => true);
    } else if (!regExpMatch && match) {
      setMatch(() => false);
    }

    if (newVal && regExpMatch) {
      setChangeVal(() => parseInt(newVal));
    }
  }

  const handleDecrement = () => setCount((val) => val - changeVal);
  const handleIncrement = () => setCount((val) => val + changeVal);

  return (
    <div className="app">
      <div className="col-left">
        <div className="input-wrapper">
          <Input
            changeVal={changeVal}
            handleChange={handleChange}
          />
          <Buttons
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            match={match}
          />
        </div>
      </div>
      <div className="col-right">
        <Output count={count} />
      </div>
    </div>
  );
}

export default App;
