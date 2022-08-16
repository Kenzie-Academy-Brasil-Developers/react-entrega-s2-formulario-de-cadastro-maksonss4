import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 15px;

  .modal_box {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    background-color: var(--gray-2);
    padding: 10px;
    border-radius: 5px;
    gap: 15px;

    @media (min-width: 600px) {
      max-width: 550px;
    }
  }
`;
