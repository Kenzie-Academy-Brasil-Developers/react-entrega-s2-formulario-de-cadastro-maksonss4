import styled, { css } from "styled-components";
import { FaEye } from "react-icons/fa";
import { FieldError } from "react-hook-form";

export const ContainerRegister = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  header {
    @media (min-width: 380px) {
      max-width: 380px;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: var(--gray-2);
  gap: 20px;
  width: 100%;
  position: relative;
  border-radius: 5px;

  @media (min-width: 380px) {
    max-width: 380px;
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
    background-color: var(--gray-3);
    border-radius: 5px;
    margin-bottom: 15px;
    border: 0;
    padding: 7px;
    color: var(--gray-5);
    border: 1px solid transparent;
  }
`;

interface IInputProps {
  error: FieldError | undefined;
}

export const Input = styled.input<IInputProps>`
  border-radius: 5px;
  background-color: var(--gray-3);
  border-radius: 5px;
  margin-bottom: 15px;
  border: 0;
  padding: 7px;
  color: var(--gray-5);
  border: 1px solid transparent;

  ${({ error }) =>
    error &&
    css`
      border: 1px solid var(--red);
    `}
`;

interface IButtonAbsolutePassword {
  see: boolean;
}

export const ButtonAbsolutePassword = styled.button<IButtonAbsolutePassword>`
  position: absolute;
  right: 8px;
  top: 152px;
  background-color: transparent;
  border: 0;

  ${({ see }) =>
    see
      ? css`
          color: var(--pink-1);
        `
      : css`
          color: var(--gray-4);
        `}
`;

export const SvgEyePassword = styled(FaEye)``;

interface IButtonAbsoluteConfirmPassword {
  see: boolean;
}

export const ButtonAbsoluteConfirmPassword = styled.button<IButtonAbsoluteConfirmPassword>`
  position: absolute;
  right: 8px;
  top: 217px;
  background-color: transparent;
  border: 0;

  ${({ see }) =>
    see
      ? css`
          color: var(--pink-1);
        `
      : css`
          color: var(--gray-4);
        `}
`;

export const SvgEyeConfirmPassword = styled(FaEye)``;

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
