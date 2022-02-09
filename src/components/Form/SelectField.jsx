import Select from 'react-select';
import { Controller } from 'react-hook-form';
import { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  margin-bottom: 3px;
`;

export const SelectField = ({ label, errors, message, options }) => {
  // console.log(errors);
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
      <Label>{label}</Label>
      <Select
        placeholder={'Select...'}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      {errors && <p>{message}</p>}
    </>
  );
};
