import Select from 'react-select';
import { useState } from 'react';
import styled from 'styled-components';

const SelectContent = styled.div`
  margin-bottom: 16px;
`;
const Label = styled.label``;
const ErrorMessage = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #fc6c64;
  margint-bottom: 16px;
`;

const customStyles = {
  control: base => ({
    ...base,
    background: 'RGBA(172, 212, 164, 0.45)',
    borderRadius: '5px',
    border: 'none',
    padding: '3px',
    marginTop: '3px',
    color: '#38393b',
  }),
  option: (provided, state) => ({
    ...provided,
    fontWeight: state.isSelected ? 'bold' : 'normal',
    color: '#38393b',
    backgroundColor: state.isSelected
      ? 'RGBA(172, 212, 164, 0.45)'
      : '#fff' && state.isFocused
      ? 'RGBA(172, 212, 164, 0.2)'
      : '#fff',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#38393b',
  }),
};

export const SelectField = ({ label, errors, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <SelectContent>
      <Label>{label}</Label>
      <Select
        placeholder={'Select...'}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        styles={customStyles}
      />
      <ErrorMessage>{errors?.message}</ErrorMessage>
    </SelectContent>
  );
};
