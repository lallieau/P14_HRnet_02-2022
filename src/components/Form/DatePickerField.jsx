import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ErrorMessage } from './ErrorMessage';
import { Input } from './InputField';
import { Label } from './Label';
import { checkBirthdateValidity } from '../../helpers/regex';

const DatePickerContent = styled.div`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DatePickerField = ({
  input,
  label,
  control,
  errorMessage,
  pattern,
  birthdateValue,
}) => {
  return (
    <DatePickerContent>
      <Label>{label}</Label>

      {birthdateValue ? (
        <Controller
          defaultValue=""
          control={control}
          name={input}
          rules={{
            validate: birthdateValue => {
              if (
                birthdateValue &&
                checkBirthdateValidity(birthdateValue) === false
              )
                return 'trop jeune';
            },
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
                customInput={<Input style={{ width: '91%' }} />}
              />
              <ErrorMessage>{error?.message}</ErrorMessage>
            </>
          )}
        />
      ) : (
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
                customInput={<Input style={{ width: '91%' }} />}
              />
              <ErrorMessage>{error?.message}</ErrorMessage>
            </>
          )}
        />
      )}
    </DatePickerContent>
  );
};
