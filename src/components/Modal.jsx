import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import close from '../assets/close.svg';
import done from '../assets/sammy-done.png';

export const modalopen = keyframes`
  from { opacity: 0;  }
  to { opacity: 1; }
`;

const MODAL = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const ModalWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 0px 7px ${({ theme }) => theme.colors.shadow};
  width: 100%;
  max-width: 400px;
  animation: ${modalopen} 0.3s ease-in-out;
  border-radius: 20px;
  position: relative;
  margin: 16px;
`;
const Image = styled.img`
  width: 200px;
`;
const Title = styled.h1`
  margin: 20px 0 10px;
`;
const Text = styled.p`
  margin: 0;
`;
const ModalContent = styled.div`
  text-align: center;
  padding: 15px 8%;
  margin: 15px auto;
`;

const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;
  padding: 16px;
  margin-top: 36px;
`;
const CloseButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 12px;
  border-radius: 60px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RedirectButton = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  padding: 12px 24px;
  border-radius: 30px;
  border: none;
  text-align: center;
  text-decoration: none;
`;

export const Modal = modalProps => {
  const { setModalIsOpen } = modalProps;
  return (
    <MODAL>
      <ModalWrapper>
        <ModalContent>
          <Image src={done} alt="Wealth Health" />
          <Title>Success !</Title>
          <Text>The new employee has been created</Text>
        </ModalContent>
        <ModalFooter>
          <RedirectButton to="/employee-list">View Employees</RedirectButton>
          <CloseButton onClick={() => setModalIsOpen(false)}>
            <img src={close} alt="" />
          </CloseButton>
        </ModalFooter>
      </ModalWrapper>
    </MODAL>
  );
};
