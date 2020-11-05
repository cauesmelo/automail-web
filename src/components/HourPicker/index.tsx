import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

type hourPickerProps = {
  name: string;
};

const HourPicker: React.FC<hourPickerProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      <select
        name="hourPicker"
        id="hourPicker"
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      >
        <option value="0">12:00 am</option>
        <option value="1">1:00 am</option>
        <option value="2">2:00 am</option>
        <option value="3">3:00 am</option>
        <option value="4">4:00 am</option>
        <option value="5">5:00 am</option>
        <option value="6">6:00 am</option>
        <option value="7">7:00 am</option>
        <option value="8">8:00 am</option>
        <option value="9">9:00 am</option>
        <option value="10">10:00 am</option>
        <option value="11">11:00 am</option>
        <option value="12">12:00 pm</option>
        <option value="13">1:00 pm</option>
        <option value="14">2:00 pm</option>
        <option value="15">3:00 pm</option>
        <option value="16">4:00 pm</option>
        <option value="17">5:00 pm</option>
        <option value="18">6:00 pm</option>
        <option value="19">7:00 pm</option>
        <option value="20">8:00 pm</option>
        <option value="21">9:00 pm</option>
        <option value="22">10:00 pm</option>
        <option value="23">11:00 pm</option>
      </select>
    </Container>
  );
};

export default HourPicker;
