import styled from 'styled-components';

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
  font-family: sans-serif;
`;
const ModalContainer = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 7px #f1f4f8;
  width: 100%;
  max-width: 400px;
  animation: modalopen 0.3s ease-in-out;
  border-radius: 20px;
  position: relative;
  margin: 16px;
  flex-direction: column;
  display: flex;
  align-items: end;
`;
const ModalContent = styled.div`
  text-align: center;
  padding: 15px 8%;
  margin: 15px auto;

  img {
    width: 200px;
  }
`;
const Title = styled.h2`
  margin: 20px 0 10px;
`;
const Text = styled.p`
  margin: 0;
`;
const CloseButton = styled.button`
  background-color: #fecf2d;
  padding: 12px;
  border-radius: 60px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const Modal = ({ show, setShow, title, text, image }) => {
  return (
    show && (
      <MODAL>
        <ModalContainer>
          <ModalContent>
            {image && <img src={image} alt="" />}
            <Title>{title}</Title>
            <Text>{text}</Text>
          </ModalContent>
          <CloseButton onClick={() => setShow(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#38393b">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </CloseButton>
        </ModalContainer>
      </MODAL>
    )
  );
};
