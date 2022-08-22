import styled, { css } from "styled-components";
import { BsPencil } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { FieldError } from "react-hook-form";

export const ContainerDashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  header {
    padding: 10px 10px 0 10px;
    @media (min-width: 780px) {
      max-width: 780px;
      padding: 10px 0 0 0;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-top: 2px solid var(--gray-2);
  border-bottom: 2px solid var(--gray-2);
  padding: 20px 10px;

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: var(--gray-5);
  }

  @media (min-width: 600px) {
    max-width: 780px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;

  h2 {
    color: var(--gray-5);
    font-size: 18px;
  }

  button {
    background-color: var(--gray-2);
    color: var(--gray-5);
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    padding: 5px 8px;
  }

  @media (min-width: 780px) {
    max-width: 780px;
    padding: 10px 0 0 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  label {
    font-size: 9.77px;
    color: var(--gray-5);
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
  }

  select {
    border-radius: 5px;
    border: 1px solid transparent;
    background-color: var(--gray-3);
    border-radius: 5px;
    margin-bottom: 15px;
    border: 0;
    padding: 7px;
    color: var(--gray-5);
  }
`;

interface IInputProps {
  erro: FieldError | undefined;
}

export const Input = styled.input<IInputProps>`
  border-radius: 5px;
  background-color: var(--gray-3);
  border-radius: 5px;
  margin-bottom: 15px;
  border: 0;
  padding: 7px;
  color: var(--gray-5);

  ${({ erro }) =>
    erro
      ? css`
          border: 1px solid var(--red);
        `
      : css`
          border: 1px solid transparent;
        `}
`;

export const ButtonFecharModal = styled.button`
  position: absolute;
  right: 15px;
  top: 11px;
  background-color: transparent;
  border: 0;
  color: var(--gray-4);
`;

interface IButtonSubmit {
  disabled: boolean;
}

export const ButtonSubmit = styled.button<IButtonSubmit>`
  border-radius: 5px;
  border: 0;
  padding: 7px 0;
  font-size: 12.83px;
  color: var(--white);

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: var(--brown);
          cursor: not-allowed;
        `
      : css`
          background-color: var(--pink-1);
        `}
`;

export const DivParentUl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  @media (min-width: 780px) {
    max-width: 780px;
    padding: 10px 0 0 0;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  gap: 10px;
  width: 100%;
  background-color: var(--gray-2);
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
  background-color: var(--gray-1);
  border-radius: 5px;
  position: relative;

  p {
    color: var(--gray-5);
    font-size: 14.21px;
    font-weight: 700;
  }

  span {
    color: var(--gray-4);
    font-size: 12.18px;
    margin-right: 15px;
  }
`;

export const SvgEdit = styled(BsPencil)``;

export const SvgDelete = styled(BsTrash)``;

export const ButtonDelete = styled.button`
  position: absolute;
  right: 4px;
  top: 5px;
  color: var(--red);
  background-color: transparent;
  border: 0;
`;

export const ButtonEdit = styled.button`
  position: absolute;
  right: 4px;
  top: 25px;
  color: var(--green);
  background-color: transparent;
  border: 0;
`;

export const PDeletar = styled.p`
  color: var(--white);
`;

export const DivButtonsDeletar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .confirmar {
    border: 0;
    border-radius: 5px;
    padding: 3px 7px;
    background-color: var(--green);
    color: var(--white);
    font-weight: bold;
  }

  .cancelar {
    border: 0;
    border-radius: 5px;
    padding: 3px 7px;
    background-color: var(--red);
    color: var(--white);
    font-weight: bold;
  }
`;
