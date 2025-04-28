import React, { useState } from 'react';
import InputField from './components/InputField';
import Button from './components/Button';

const Class3Example = () => {
  const [timesClicked, setTimesClicked] = useState(0);

  return (
    <div>
      <h1>Clicked the button {timesClicked} times!</h1>
      <Button label="Click me!" onClick={() => setTimesClicked(timesClicked + 1)} />
    </div>
  );
};

export default Class3Example;
