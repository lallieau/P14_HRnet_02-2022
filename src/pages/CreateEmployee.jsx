import { EmployeeForm } from '../components/EmployeeForm';
import { Layout } from '../components/Layout';
import { useState } from 'react';
import done from '../assets/sammy-done.png';
import { Modal } from '../components/Modal';

/**
 * Renders Employee Creation Page
 * @returns {JSX}
 */
export const CreateEmployee = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Layout title="Create Employee">
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
