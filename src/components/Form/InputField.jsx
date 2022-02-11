import styled from 'styled-components';

const FieldContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
const Label = styled.label``;
const Input = styled.input`
  margin-top: 3px;
  padding: 12px;
  border-radius: 5px;
  background-color: RGBA(172, 212, 164, 0.45);
  border: none;
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
  message,
}) => {
  return (
    <FieldContent>
      <Label>{label}</Label>
      <Input {...register(input, { required, pattern: pattern })} />
      {errors && <ErrorMessage>{message}</ErrorMessage>}
    </FieldContent>
  );
};
