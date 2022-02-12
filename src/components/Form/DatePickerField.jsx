import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerContent = styled.div`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
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
const Input = styled.input`
  width: 100%;
  margin-top: 8px;
  padding: 12px;
  border-radius: 20px;
  background-color: #f1f4f8;
  border: none;
  color: #38393b;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 400;

  ::placeholder {
    color: rgba(56, 57, 59, 0.5);
    font-size: 14px;
    font-family: Poppins;
    font-weight: 400;
  }
  &:focus {
    background-color: #fff;
    outline: 1px solid #fff;
    box-shadow: 0px 0px 7px #d7dade;
  }
`;
export const DatePickerField = ({
  input,
  label,
  control,
  errorMessage,
  pattern,
}) => {
  return (
    <DatePickerContent>
      <Label>{label}</Label>
      <Controller
        defaultValue=""
        control={control}
        name={input}
        rules={{
          pattern: {
            value: pattern,
            message: errorMessage,
          },
          required: {
            value: true,
            message: errorMessage,
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <DatePicker
              className="input"
              placeholderText="Select date"
              onChange={e => field.onChange(e)}
              selected={field.value}
              customInput={<Input />}
            />
            <ErrorMessage>{error?.message}</ErrorMessage>
          </>
        )}
      />
    </DatePickerContent>
  );
};
