import styled from 'styled-components';
import { states } from '../assets/data/states';
import { departments } from '../assets/data/departments';
import { useForm } from 'react-hook-form';
import { InputField } from './Form/InputField';
import { SelectField } from './Form/SelectField';
import { DatePickerField } from './Form/DatePickerField';
import {
  textRegex,
  streetRegex,
  zipCodesRegex,
  checkBirthdateValidity,
} from '../helpers/regex';
import { useState } from 'react';

const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: start;
`;

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  column-gap: 24px;
  align-items: self-end;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 414px) {
    grid-template-columns: 1fr;
  }
`;

const Button = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius.button};
  color: ${({ theme }) => theme.colors.light};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 0px 8px ${({ theme }) => theme.colors.shadow}
  margin-top: 24px;
  margin-bottom: 36px;
  padding: 16px 54px;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: 0.2s;
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin: 0;
  width: 100%;
`;

export const EmployeeForm = modalProps => {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const { setModalIsOpen } = modalProps;

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    birthdate: '',
    startDate: '',
    department: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    defaultValues: employee,
  });

  const SaveEmployee = () => {
    setEmployee({
      firstName: getValues('firstName'),
      lastName: getValues('lastName'),
      birthdate: getValues('birthdate'),
      startDate: getValues('startDate'),
      department: getValues('department'),
      street: getValues('street'),
      city: getValues('city'),
      state: getValues('state'),
      zipCode: getValues('zipCode'),
    });
  };

  const onSubmit = () => {
    setModalIsOpen(true);
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));

    reset();
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
          birthdateValue={getValues('birthdate')}
          pattern={/^\d{2}\/\d{2}\/\d{4}$/}
          errorMessage={'Please select birthdate'}
        />
      </FormWrapper>
      <Title>Adress</Title>
      <FormWrapper>
        <InputField
          label="Street"
          input="street"
          placeholder="Enter the street"
          register={register}
          required
          pattern={streetRegex}
          errors={errors.street}
          errorMessage="Please enter the street"
        />
        <InputField
          label="City"
          input="city"
          placeholder="Enter the city"
          register={register}
          required
          pattern={textRegex}
          errors={errors.city}
          errorMessage="Please enter the city"
        />
        <SelectField
          label={'State'}
          input={'state'}
          placeholder="Select state"
          control={control}
          errorMessage={'Please select state'}
          options={states}
        />
        <InputField
          label="ZipCode"
          input="zipCode"
          placeholder="Enter zipcode"
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
          placeholder="Select department"
          control={control}
          errorMessage={'Please select department'}
          options={departments}
        />
        <DatePickerField
          label={'Start Date'}
          input={'startDate'}
          control={control}
          pattern={/^\d{2}\/\d{2}\/\d{4}$/}
          errorMessage={'Please select start date'}
        />
      </FormWrapper>

      <Button type="submit" onClick={() => SaveEmployee()}>
        Save
      </Button>
    </Form>
  );
};
