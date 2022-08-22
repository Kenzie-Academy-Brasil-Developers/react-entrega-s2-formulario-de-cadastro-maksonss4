import { createContext, useState } from "react";
import { toast } from "react-toastify";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { IProvidersProps } from "..";

export const RegistrationContext = createContext({} as IRegistrationContext);

interface IRegistrationContext {
  seeConfirmPassword: boolean;
  seePassword: boolean;
  seeDoNotSeePassword: () => void;
  seeDoNotSeeConfirmPassword: () => void;
  onSubmit: (value: IDataRegistration) => void;
}

export interface IDataRegistration {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  bio: string;
  contact: string;
  course_module: string;
}

export function RegistrationProvider({ children }: IProvidersProps) {
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);

  const navigate = useNavigate();

  function seeDoNotSeePassword() {
    setSeePassword(!seePassword);
  }

  function seeDoNotSeeConfirmPassword() {
    setSeeConfirmPassword(!seeConfirmPassword);
  }

  function success() {
    toast.success("Usuário criado com sucesso", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function errorEmail() {
    toast.error("Email já cadastrado anteriormente", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function onSubmit(data: IDataRegistration) {
    api
      .post("/users", data)
      .then(() => {
        success();
        navigate("/login", { replace: true });
      })
      .catch(() => errorEmail());
  }

  return (
    <RegistrationContext.Provider
      value={{
        onSubmit,
        seePassword,
        seeDoNotSeePassword,
        seeConfirmPassword,
        seeDoNotSeeConfirmPassword,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}
