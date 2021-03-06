import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

interface DaysPickerProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  defaultValue: string[];
}

interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

const DaysPicker: React.FC<DaysPickerProps> = ({
  name,
  defaultValue,
  ...rest
}) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField } = useField(name);
  const [days, setDays] = useState<string[]>([]);

  const options: CheckboxOption[] = [
    { id: 'monday', value: 'monday', label: 'SEG' },
    { id: 'tuesday', value: 'tuesday', label: 'TER' },
    { id: 'wednesday', value: 'wednesday', label: 'QUA' },
    { id: 'thursday', value: 'thursday', label: 'QUI' },
    { id: 'friday', value: 'friday', label: 'SEX' },
    { id: 'saturday', value: 'saturday', label: 'SAB' },
    { id: 'sunday', value: 'sunday', label: 'DOM' },
  ];

  useEffect(() => {
    if (days.length === 0) {
      setDays(defaultValue);
    }
  }, [days, defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter(ref => ref.checked).map(ref => ref.value);
      },
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach(ref => {
          ref.checked = false;
        });
      },
      setValue: (refs: HTMLInputElement[], values: string[]) => {
        refs.forEach(ref => {
          if (values.includes(ref.id)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [fieldName, registerField]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (days.some((e: string) => e === value)) {
      const newDays = days;
      newDays.splice(days.indexOf(value), 1);
      setDays([...newDays]);
    } else {
      const newDays = days;
      newDays.push(value);
      setDays([...newDays]);
    }
  };

  return (
    <Container>
      {options.map((option, index) => (
        <label htmlFor={option.id} key={option.id}>
          <input
            checked={days.includes(option.value)}
            onChange={e => handleChange(e)}
            ref={ref => {
              inputRefs.current[index] = ref as HTMLInputElement;
            }}
            value={option.value}
            type="checkbox"
            id={option.id}
            {...rest}
          />
          {option.label}
        </label>
      ))}
    </Container>
  );
};

export default DaysPicker;
