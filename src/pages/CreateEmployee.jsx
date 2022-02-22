import styled from 'styled-components';
import { EmployeeForm } from '../components/EmployeeForm';
import { Layout } from '../components/Layout';
import { useState } from 'react';
import { Modal } from 'oc-p14-plugin';
import done from '../assets/sammy-done.png';

const Title = styled.h1`
  margin-bottom: 26px;
`;

export const CreateEmployee = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Layout title="HRnet | Create Employee">
      <Title>Create Employee</Title>
      <Modal
        show={modalIsOpen}
        setShow={setModalIsOpen}
        title="Success !"
        text="The new employee has been created"
        image={done}
      />
      <EmployeeForm setModalIsOpen={setModalIsOpen} />
    </Layout>
  );
};
