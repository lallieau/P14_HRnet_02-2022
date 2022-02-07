import styled from 'styled-components';
import { EmployeeChart } from '../components/EmployeeChart';
import { Layout } from '../components/Layout';

export const EmployeeList = () => {
  const Title = styled.h1`
    margin-top: 46px;
    text-align: center;
  `;

  return (
    <Layout title="Employee List">
      <Title>Employee List</Title>
      <EmployeeChart />
    </Layout>
  );
};
