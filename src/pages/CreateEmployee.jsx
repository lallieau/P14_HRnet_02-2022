import styled from 'styled-components';
import { EmployeeForm } from '../components/EmployeeForm';
import { Layout } from '../components/Layout';
import { useState } from 'react';
import { Modal } from '../components/Modal';

const Title = styled.h1`
  margin-bottom: 36px;
`;

export const CreateEmployee = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Layout title="HRnet | Create Employee">
      <Title>Create Employee</Title>
      {modalIsOpen && <Modal setModalIsOpen={setModalIsOpen} />}
      <EmployeeForm setModalIsOpen={setModalIsOpen} />
    </Layout>
  );
};
