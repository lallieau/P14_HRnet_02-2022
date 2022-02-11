import styled from 'styled-components';

const InputFieldContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;
const Label = styled.label`
  padding-left: 16px;
  font-size: 12px;
`;
const Input = styled.input`
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
const ErrorMessage = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #fc6c64;
`;

export const InputField = ({
  label,
  input,
  register,
  required,
  pattern,
  errors,
  errorMessage,
  isValueAsDate,
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
          valueAsDate: isValueAsDate,
          required,
          pattern: pattern,
        })}
      />
      {errors && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputFieldContent>
  );
};
