import styled from 'styled-components';
import { states } from '../assets/data/states';
import { departments } from '../assets/data/departments';
import { useForm } from 'react-hook-form';
import { Field } from './Form/Field';
import { SelectField } from './Form/SelectField';

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

export const EmployeeFormCopy = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data));
    console.log(JSON.stringify(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        <Title>General</Title>
        <Field
          label="First Name"
          input="firstName"
          register={register}
          required
          pattern={/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/}
          errors={errors.firstName}
          message="Please enter the first name"
        />
        <Field
          label="Last Name"
          input="lastName"
          register={register}
          required
          pattern={/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/}
          errors={errors.lastName}
          message="Please enter the last name"
        />
        <Field
          label="Date of birth"
          input="birthdate"
          register={register}
          required
          pattern={/^\d{2}\/\d{2}\/\d{4}$/}
          errors={errors.birthdate}
          message="Please enter birthdate"
        />
        <Field
          label="Start Date"
          input="startDate"
          register={register}
          required
          pattern={/^\d{2}\/\d{2}\/\d{4}$/}
          errors={errors.startDate}
          message="Please enter start date"
        />
      </FormWrapper>

      <FormWrapper>
        <Title>Adress</Title>
        <Field
          label="Street"
          input="street"
          register={register}
          required
          pattern={/^[0-9a-zA-ZÀ-ÖØ-öø-ÿ]+$/g}
          errors={errors.street}
          message="Please enter the street"
        />
        <Field
          label="City"
          input="city"
          register={register}
          required
          pattern={/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/}
          errors={errors.city}
          message="Please enter the city"
        />
        <SelectField
          label={'State'}
          name={'state'}
          control={control}
          message={'Please select state'}
          options={states}
        />
        <Field
          label="ZipCode"
          input="zipCode"
          register={register}
          required
          pattern={/(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/}
          errors={errors.zipCode}
          message="Please enter zipCode"
        />
      </FormWrapper>

      <FormWrapper>
        <Title>Department</Title>
        <SelectField
          label={'Department'}
          name={'department'}
          control={control}
          message={'Please select department'}
          options={departments}
        />
      </FormWrapper>

      <Button type="submit">Save</Button>
    </Form>
  );
};
