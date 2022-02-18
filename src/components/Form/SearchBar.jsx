import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { InputField } from './InputField';
import search from '../../assets/search.svg';

const Form = styled.form`
  display: flex;

  input {
    border-radius: 10px 0px 0px 10px;
  }
`;

const Icon = styled.img`
  margin-bottom: 16px;
  width: 21px;
  height: 21px;
  font-size: 0.85rem;
  border-radius: 0px 10px 10px 0px;
  background-color: #f1f4f8;
  margin-top: 8px;
  padding: 12px;
  border: none;
`;

export const SearchBar = ({ requestSearch }) => {
  const { register, getValues } = useForm();

  const handleInputChange = () => {
    requestSearch(getValues('search'));
  };

  return (
    <Form onChange={handleInputChange}>
      <InputField
        input="search"
        type="search"
        placeholder="Search"
        register={register}
      />
      <Icon src={search} alt="" />
    </Form>
  );
};
