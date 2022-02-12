import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';

const SelectContent = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;
const Label = styled.label`
  padding-left: 16px;
  font-size: 12px;
`;
const ErrorMessage = styled.p`
  margin: 0;
  padding-left: 16px;
  font-size: 12px;
  color: #fc6c64;
  margint-bottom: 16px;
`;

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: state.isFocused ? '#fff' : '#f1f4f8',
    borderRadius: '20px',
    border: 'none',
    padding: '4.5px',
    marginTop: '8px',
    color: '#38393b',
    outline: '1px solid #fff',
    boxShadow: state.isFocused ? '0px 0px 7px #d7dade' : null,
  }),
  option: (provided, state) => ({
    ...provided,
    borderRadius: '20px',
    color: state.isSelected ? '#fff' : '#38393b',
    backgroundColor: state.isSelected
      ? '#38393b'
      : '#fff' && state.isFocused
      ? '#f1f4f8'
      : '#fff',
  }),
  menu: base => ({
    ...base,
    borderRadius: '20px',
  }),
  menuList: base => ({
    ...base,
    padding: '5px',
    '::-webkit-scrollbar': {
      borderRadius: '20px',
    },
    '::-webkit-scrollbar-track': {
      borderRadius: '20px',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#d7dade',
      borderRadius: '20px',
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#38393b',
    fontSize: '14px',
  }),
  placeholder: base => {
    return {
      ...base,
      color: 'rgba(56, 57, 59, 0.5)',
      fontFamily: 'Poppins',
      fontSize: '14px',
      fontWeight: '400',
    };
  },
};

export const SelectField = ({
  input,
  label,
  control,
  options,
  errorMessage,
}) => {
  return (
    <SelectContent>
      <Label>{label}</Label>
      <Controller
        name={input}
        control={control}
        rules={{
          required: {
            value: true,
            message: errorMessage,
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <ReactSelect
              isClearable
              {...field}
              options={options}
              styles={customStyles}
            />
            <ErrorMessage>{error?.message}</ErrorMessage>
          </>
        )}
      />
    </SelectContent>
  );
};
