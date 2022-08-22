import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FieldError } from "react-hook-form";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  gap: 10px;
`;

export const Div = styled.div`
  background-color: var(--gray-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  position: relative;

  @media (min-width: 380px) {
    max-width: 380px;
  }
`;

export const LinkToRegistration = styled(Link)`
  color: var(--white);
  background-color: var(--gray-4);
  width: 100%;
  border-radius: 5px;
  text-align: center;
  font-size: 12.83px;
  padding: 7px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 9.77px;
    color: var(--gray-5);
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
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
  padding: 7px;
  border: 1px solid transparent;
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

interface IButtonAbsoluteProps {
  see: boolean;
}

export const ButtonAbsolute = styled.button<IButtonAbsoluteProps>`
  position: absolute;
  background-color: transparent;
  border: 0;
  right: 20px;
  top: 135px;

  ${({ see }) =>
    see
      ? css`
          color: var(--pink-1);
        `
      : css`
          color: var(--gray-4);
        `}
`;

export const SvgEye = styled(FaEye)``;

interface IButtonSubmit {
  disabled: boolean;
}

export const ButtonSubmit = styled.button<IButtonSubmit>`
  color: var(--white);
  border-radius: 5px;
  border: 0;
  padding: 7px 0;
  font-size: 12.83px;

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
