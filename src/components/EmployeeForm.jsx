import styled from 'styled-components';
import { states } from '../assets/data/states';
import { departments } from '../assets/data/departments';
import { useForm } from 'react-hook-form';
import { InputField } from './Form/InputField';
import { SelectField } from './Form/SelectField';
import { DatePickerField } from './Form/DatePickerField';
import { textRegex, streetRegex, zipCodesRegex } from '../helpers/regex';

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

export const EmployeeForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // const onSubmit = event => {
  //   event.preventDefault();
  //   handleSubmit(data => {
  //     alert(JSON.stringify(data));
  //     console.log(JSON.stringify(data));
  //   });
  // };

  const onSubmit = data => {
    alert(JSON.stringify(data));
    console.log(JSON.stringify(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        <Title>General</Title>
        <InputField
          label="First Name"
          input="firstName"
          register={register}
          required
          pattern={textRegex}
          errors={errors.firstName}
          message="Please enter the first name"
        />
        <InputField
          label="Last Name"
          input="lastName"
          register={register}
          required
          pattern={textRegex}
          errors={errors.lastName}
          message="Please enter the last name"
        />
        <InputField
          label="Date of birth"
          input="birthdate"
          register={register}
          required
          // pattern={/^\d{2}\/\d{2}\/\d{4}$/}
          errors={errors.birthdate}
          message="Please enter birthdate"
        />
        <DatePickerField
          label={'Start Date'}
          input={'startDate'}
          control={control}
          // pattern={/^\d{2}\/\d{2}\/\d{4}$/}
          message={'Please select start date'}
        />
      </FormWrapper>

      <FormWrapper>
        <Title>Adress</Title>
        <InputField
          label="Street"
          input="street"
          register={register}
          required
          pattern={streetRegex}
          errors={errors.street}
          message="Please enter the street"
        />
        <InputField
          label="City"
          input="city"
          register={register}
          required
          pattern={textRegex}
          errors={errors.city}
          message="Please enter the city"
        />
        <SelectField
          label={'State'}
          input={'state'}
          control={control}
          message={'Please select state'}
          options={states}
        />
        <InputField
          label="ZipCode"
          input="zipCode"
          register={register}
          required
          pattern={zipCodesRegex}
          errors={errors.zipCode}
          message="Please enter zipCode"
        />
      </FormWrapper>

      <FormWrapper>
        <Title>Department</Title>
        <SelectField
          label={'Department'}
          input={'department'}
          control={control}
          message={'Please select department'}
          options={departments}
        />
      </FormWrapper>

      <Button type="submit">Save</Button>
    </Form>
  );
};
