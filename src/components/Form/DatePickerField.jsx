import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';
import { Label } from './Label';
import { checkBirthdateValidity } from '../../helpers/regex';
import Cleave from 'cleave.js/react';

const DatePickerContent = styled.div`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

/**
 * Render Form Date Picker Field
 * @param {string} input
 * @param {string} label
 * @param {object} control
 * @param {string} errorMessage
 * @param {object} pattern
 * @param {string} birthdateValue
 * @returns {JSX}
 */
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
                return 'Must be at least 18 years old';
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
              <Cleave
                className="input--date"
                placeholder="jj / mm / yyyy"
                date={'true'}
                onChange={e => field.onChange(e)}
                onInit={field.value}
                delimiter="/"
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
              <Cleave
                className="input--date"
                placeholder="jj / mm / yyyy"
                date={'true'}
                onChange={e => field.onChange(e)}
                onInit={field.value}
                delimiter="/"
              />
              <ErrorMessage>{error?.message}</ErrorMessage>
            </>
          )}
        />
      )}
    </DatePickerContent>
  );
};
