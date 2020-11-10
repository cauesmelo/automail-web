import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

type hourPickerProps = {
  name: string;
  defaultValue: string;
};

const HourPicker: React.FC<hourPickerProps> = ({
  name,
  defaultValue,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);
  const [value, setValue] = useState<string>();
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
    setValue(defaultValue);
  }, [fieldName, registerField, defaultValue]);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
  }

  return (
    <Container>
      <select
        name="hourPicker"
        id="hourPicker"
        ref={inputRef}
        value={value}
        onChange={handleChange}
        {...rest}
      >
        <option value="00:00:00">00:00</option>
        <option value="01:00:00">01:00</option>
        <option value="02:00:00">02:00</option>
        <option value="03:00:00">03:00</option>
        <option value="04:00:00">04:00</option>
        <option value="05:00:00">05:00</option>
        <option value="06:00:00">06:00</option>
        <option value="07:00:00">07:00</option>
        <option value="08:00:00">08:00</option>
        <option value="09:00:00">09:00</option>
        <option value="10:00:00">10:00</option>
        <option value="11:00:00">11:00</option>
        <option value="12:00:00">12:00</option>
        <option value="13:00:00">13:00</option>
        <option value="14:00:00">14:00</option>
        <option value="15:00:00">15:00</option>
        <option value="16:00:00">16:00</option>
        <option value="17:00:00">17:00</option>
        <option value="18:00:00">18:00</option>
        <option value="19:00:00">19:00</option>
        <option value="20:00:00">20:00</option>
        <option value="21:00:00">21:00</option>
        <option value="22:00:00">22:00</option>
        <option value="23:00:00">23:00</option>
      </select>
    </Container>
  );
};

export default HourPicker;
