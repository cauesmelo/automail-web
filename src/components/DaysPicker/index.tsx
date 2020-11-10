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
  // const [monday, setMonday] = useState<boolean>(false);
  // const [tuesday, setTuesday] = useState<boolean>(false);
  // const [wednesday, setWednesday] = useState<boolean>(false);
  // const [thursday, setThursday] = useState<boolean>(false);
  // const [friday, setFriday] = useState<boolean>(false);
  // const [saturday, setSaturday] = useState<boolean>(false);
  // const [sunday, setSunday] = useState<boolean>(false);

  const options: CheckboxOption[] = [
    { id: 'monday', value: 'monday', label: 'SEG' },
    { id: 'tuesday', value: 'tuesday', label: 'TER' },
    { id: 'wednesday', value: 'wednesday', label: 'QUA' },
    { id: 'thursday', value: 'thursday', label: 'QUI' },
    { id: 'friday', value: 'friday', label: 'SEX' },
    { id: 'saturday', value: 'saturday', label: 'SAB' },
    { id: 'sunday', value: 'sunday', label: 'DOM' },
  ];

  // const setDays = (days: string[]) => {
  //   setMonday(days.some(e => e === 'monday'));
  // };

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
    setDays(defaultValue);
  }, [defaultValue, fieldName, registerField]);

  /// BUG AQUI P CORRIGIR
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (days.some((e: string) => e === value)) {
      const newDays = days.splice(days.indexOf(value), 1);
      console.log(newDays);
      setDays(newDays);
    }
  };

  return (
    <Container>
      {options.map((option, index) => (
        <label htmlFor={option.id} key={option.id}>
          <input
            checked={days.some((element: string) => element === option.value)}
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
