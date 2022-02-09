import styled from 'styled-components';
import { useState } from 'react';
import {
  zipCodesRegex,
  dateRegex,
  textRegex,
  streetRegex,
  checkBirthdateValidity,
} from '../helpers/regex';

const Form = styled.form`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;
`;
const FormWrapper = styled.div`
  width: 100%;
`;
const Field = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
`;
const Label = styled.label`
  margin-bottom: 3px;
`;
const Input = styled.input`
  padding: 12px;
  border-radius: 5px;
  background-color: RGBA(172, 212, 164, 0.45);
  border: none;
`;
const Button = styled.button`
  right: 0;
  margin-top: 10px;
  margin-bottom: 50px;
  padding: 16px 54px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  background-color: #445441;
  border: none;

  &:hover {
    background-color: RGBA(68, 84, 65, 0.79);
    transition: 0.2s;
  }
`;
const Title = styled.h2``;

export const EmployeeForm = () => {
  // const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    birthdate: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  });

  const checkValidityForm = () => {
    if (
      textRegex.test(input.lastName) &&
      !checkBirthdateValidity(input.birthdate) &&
      dateRegex.test(input.startDate) &&
      streetRegex.test(input.street) &&
      textRegex.test(input.city) &&
      zipCodesRegex.test(input.zipCode)
    ) {
      console.log('form is valid');
    } else {
      console.log('error');
    }
  };

  const handleSubmit = event => {
    setIsLoading(true);
    event.preventDefault();
    checkValidityForm();
  };

  return (
    <Form onSubmit={handleSubmit()}>
      <FormWrapper>
        <Title>General</Title>
        <Field>
          <Label htmlFor="firstname">FirstName</Label>
          <Input
            type="text"
            id="firstname"
            value={input.firstName}
            onChange={e => setInput({ ...input, firstName: e.target.value })}
          />
        </Field>

        <Field>
          <Label htmlFor="lastname">LastName</Label>
          <Input
            type="text"
            id="lastname"
            value={input.lastName}
            onChange={e => setInput({ ...input, lastName: e.target.value })}
          />
        </Field>

        <Field>
          <Label htmlFor="birthdate">Date of birth</Label>
          <Input
            type="date"
            id="birthdate"
            value={input.birthdate}
            onChange={e => setInput({ ...input, birthdate: e.target.value })}
          />
        </Field>

        <Field>
          <Label htmlFor="start-date">Start date</Label>
          <Input
            type="date"
            id="start-date"
            value={input.startDate}
            onChange={e => setInput({ ...input, startDate: e.target.value })}
          />
        </Field>
      </FormWrapper>

      <FormWrapper>
        <Title>Adress</Title>
        <Field>
          <Label htmlFor="street">Street</Label>
          <Input
            type="text"
            id="street"
            value={input.street}
            onChange={e => setInput({ ...input, street: e.target.value })}
          />
        </Field>

        <Field>
          <Label htmlFor="city">City</Label>
          <Input
            type="text"
            id="city"
            value={input.city}
            onChange={e => setInput({ ...input, city: e.target.value })}
          />
        </Field>

        <Field>
          <Label htmlFor="state">State</Label>
          <Input
            type="text"
            id="state"
            value={input.state}
            onChange={e => setInput({ ...input, state: e.target.value })}
          />
        </Field>

        <Field>
          <Label htmlFor="zip-code">Zip Code</Label>
          <Input
            type="number"
            id="zip-code"
            value={input.zipCode}
            onChange={e => setInput({ ...input, zipCode: e.target.value })}
          />
        </Field>
      </FormWrapper>

      <FormWrapper>
        <Title>Department</Title>
        <Field>
          <Label htmlFor="department">Department</Label>
          <Input
            type="text"
            id="department"
            value={input.department}
            onChange={e => setInput({ ...input, department: e.target.value })}
          />
        </Field>
      </FormWrapper>

      <Button type="submit" disabled={isLoading ? true : false}>
        Save
      </Button>
    </Form>
  );
};
