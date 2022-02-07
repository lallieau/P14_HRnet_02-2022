import styled from 'styled-components';
import { EmployeeForm } from '../components/EmployeeForm';
import { Layout } from '../components/Layout';

export const CreateEmployee = () => {
  const Title = styled.h1`
    margin-top: 46px;
    text-align: center;
  `;

  return (
    <Layout title="Create Employee">
      <Title>Create Employee</Title>
      <EmployeeForm />
    </Layout>
  );
};
