import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerContent = styled.div`
  margin-bottom: 16px;
  .input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    color: black;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
    background-color: RGBA(172, 212, 164, 0.45);
  }
`;
const Label = styled.label``;
const ErrorMessage = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #fc6c64;
  margint-bottom: 16px;
`;

export const DatePickerField = ({
  input,
  label,
  control,
  message,
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
            message: message,
          },
          required: {
            value: true,
            message: message,
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <DatePicker
              className="input"
              placeholderText="Select date"
              onChange={e => field.onChange(e)}
              selected={field.value}
            />
            <ErrorMessage>{error?.message}</ErrorMessage>
          </>
        )}
      />
    </DatePickerContent>
  );
};
