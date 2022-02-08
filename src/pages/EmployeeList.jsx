import styled from 'styled-components';
import { EmployeeChart } from '../components/EmployeeChart';
import { Layout } from '../components/Layout';

const Title = styled.h1`
  margin-top: 46px;
  text-align: center;
`;

export const EmployeeList = () => {
  return (
    <Layout title="Employee List">
      <Title>Employee List</Title>
      <EmployeeChart />
    </Layout>
  );
};
