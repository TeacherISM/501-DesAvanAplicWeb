import React, { useState } from 'react';
import InputField from './components/InputField';
import Button from './components/Button';
import UserInfo from './components/UserInfo';

const Class1Example = () => {
  const [name, setName] = useState('John');
  const [surname, setSurname] = useState('Doe');
  const [notMe, setNotMe] = useState(false);

  if (notMe) {
      return (
        <div>
          <p>What's your name?</p>
          <div>
            Name:
            <InputField
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            Surname:
            <InputField
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <Button label={"Confirm"} onClick={() => setNotMe(false)} />
        </div>
      );
  }

  return (
    <div>
      <UserInfo name={name} surname={surname} />
      <Button label={"Not you?"} onClick={() => setNotMe(true)} />
    </div>
  );
};

export default Class1Example;
