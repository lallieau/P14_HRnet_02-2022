import styled from 'styled-components';
import { EmployeeFormCopy } from '../components/EmployeeFormCopy';
import { Layout } from '../components/Layout';

const Title = styled.h1`
  margin-top: 46px;
  text-align: center;
`;

export const CreateEmployee = () => {
  return (
    <Layout title="Create Employee">
      <Title>Create Employee</Title>
      <EmployeeFormCopy />
    </Layout>
  );
};
