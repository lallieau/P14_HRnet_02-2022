import styled from 'styled-components';
import { states } from '../assets/data/states';
import { departments } from '../assets/data/departments';
import { useForm } from 'react-hook-form';
import { InputField } from './Form/InputField';
import { SelectField } from './Form/SelectField';
import { DatePickerField } from './Form/DatePickerField';
import { textRegex, streetRegex, zipCodesRegex } from '../helpers/regex';

const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  // align-items: start;
  gap: 16px;
`;
const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 24px;
  align-items: self-end;
  width: 100%;
`;
const Button = styled.button`
  width: 20%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 50px;
  padding: 16px 54px;
  border-radius: 50px;
  color: #fff;
  font-weight: bold;
  background-color: #445441;
  border: none;
  box-shadow: 0px 0px 8px #728c6d;

  &:hover {
    background-color: RGBA(68, 84, 65, 0.79);
    transition: 0.2s;
  }
`;
const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const EmployeeForm = () => {
  const {
    register,
    handleSubmit,
    // setError,
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
      <Title>Basic Details</Title>
      <FormWrapper>
        <InputField
          label="First Name"
          input="firstName"
          type="text"
          placeholder="Enter the firstname"
          register={register}
          required
          pattern={textRegex}
          errors={errors.firstName}
          errorMessage="Please enter the first name"
        />
        <InputField
          label="Last Name"
          input="lastName"
          type="text"
          placeholder="Enter the lastname"
          register={register}
          required
          pattern={textRegex}
          errors={errors.lastName}
          errorMessage="Please enter the last name"
        />
        <DatePickerField
          label={'Date of birth'}
          input={'birthdate'}
          control={control}
          // pattern={/^\d{2}\/\d{2}\/\d{4}$/}
          errorMessage={'Please select birthdate'}
        />
      </FormWrapper>
      {/* <FormWrapper>
        <InputField
          label="Date of birth"
          input="birthdate"
          type="date"
          isValueAsDate
          register={register}
          required
          pattern={/^\d{2}\/\d{2}\/\d{4}$/}
          errors={errors.birthdate}
          errorMessage="Please enter birthdate"
        />
      </FormWrapper> */}
      <Title>Adress</Title>
      <FormWrapper>
        <InputField
          label="Street"
          input="street"
          register={register}
          required
          pattern={streetRegex}
          errors={errors.street}
          errorMessage="Please enter the street"
        />
        <InputField
          label="City"
          input="city"
          register={register}
          required
          pattern={textRegex}
          errors={errors.city}
          errorMessage="Please enter the city"
        />
      </FormWrapper>
      <FormWrapper>
        <SelectField
          label={'State'}
          input={'state'}
          control={control}
          errorMessage={'Please select state'}
          options={states}
        />
        <InputField
          label="ZipCode"
          input="zipCode"
          register={register}
          required
          pattern={zipCodesRegex}
          errors={errors.zipCode}
          errorMessage="Please enter zipCode"
        />
      </FormWrapper>

      <Title>Department</Title>
      <FormWrapper>
        <SelectField
          label={'Department'}
          input={'department'}
          control={control}
          errorMessage={'Please select department'}
          options={departments}
        />
        {/* <InputField
          label="Start Date"
          input="startDate"
          type="date"
          isValueAsDate
          register={register}
          required
          pattern={/^\d{2}\/\d{2}\/\d{4}$/}
          errors={errors.startDate}
          errorMessage="Please enter start Date"
        /> */}
        <DatePickerField
          label={'Start Date'}
          input={'startDate'}
          control={control}
          // pattern={/^\d{2}\/\d{2}\/\d{4}$/}
          errorMessage={'Please select start date'}
        />
      </FormWrapper>

      <Button type="submit">Save</Button>
    </Form>
  );
};
