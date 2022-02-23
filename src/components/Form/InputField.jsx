import styled from 'styled-components';
import { ErrorMessage } from './ErrorMessage';
import { Label } from './Label';

const InputFieldContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;

export const Input = styled.input``;

/**
 * Render Form Input Field
 * @param {string} input
 * @param {string} label
 * @param {function} register
 * @param {boolean} required
 * @param {object} pattern
 * @param {object} errors
 * @param {string} errorMessage
 * @param {string} type
 * @param {string} placeholder
 * @returns {JSX}
 */
export const InputField = ({
  input,
  label,
  register,
  required,
  pattern,
  errors,
  errorMessage,
  type,
  placeholder,
}) => {
  return (
    <InputFieldContent>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        {...register(input, {
          required,
          pattern: pattern,
        })}
      />
      {errors && <ErrorMessage>{errorMessage} </ErrorMessage>}
    </InputFieldContent>
  );
};
