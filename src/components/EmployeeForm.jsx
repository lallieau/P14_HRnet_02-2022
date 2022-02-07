import styled from 'styled-components';

export const EmployeeForm = () => {
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

  return (
    <Form>
      <FormWrapper>
        <Title>General</Title>
        <Field>
          <Label htmlFor="firstname">FirstName</Label>
          <Input type="text" id="firstname" value="" />
        </Field>

        <Field>
          <Label htmlFor="lastname">LastName</Label>
          <Input type="text" id="lastname" value="" />
        </Field>

        <Field>
          <Label htmlFor="birthdate">Date of birth</Label>
          <Input type="date" id="birthdate" value="" />
        </Field>

        <Field>
          <Label htmlFor="start-date">Start date</Label>
          <Input type="date" id="start-date" value="" />
        </Field>
      </FormWrapper>

      <FormWrapper>
        <Title>Adress</Title>
        <Field>
          <Label htmlFor="street">Street</Label>
          <Input type="text" id="street" value="" />
        </Field>

        <Field>
          <Label htmlFor="city">City</Label>
          <Input type="text" id="city" value="" />
        </Field>

        <Field>
          <Label htmlFor="state">State</Label>
          <Input type="text" id="state" value="" />
        </Field>

        <Field>
          <Label htmlFor="zip-code">Zip Code</Label>
          <Input type="number" id="zip-code" value="" />
        </Field>
      </FormWrapper>

      <FormWrapper>
        <Title>Department</Title>
        <Field>
          <Label>Department</Label>
          <Input />
        </Field>
      </FormWrapper>

      <Button type="submit">Save</Button>
    </Form>
  );
};
