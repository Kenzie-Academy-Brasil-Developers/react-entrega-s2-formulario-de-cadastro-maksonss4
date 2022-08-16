import { createContext, useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const RegistrationContext = createContext();

export function RegistrationProvider({ children }) {
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);

  const navigate = useNavigate();

  function seeDoNotSeePassword() {
    setSeePassword(!seePassword);
  }

  function seeDoNotSeeConfirmPassword() {
    setSeeConfirmPassword(!seeConfirmPassword);
  }

  const schema = yup.object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("Insira um email válido")
      .required("Email é obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo 8 caracteres")
      .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
      .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "deve conter ao menos 1 número")
      .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial"),
    confirm_password: yup
      .string()
      .required("Confirme a senha")
      .oneOf([yup.ref("password")], "Precisa ser igual a senha"),
    bio: yup
      .string()
      .required("Este campo é obrigatório")
      .min(8, "Mínimo 8 caracteres"),
    contact: yup
      .string()
      .required("Este campo é obrigatório")
      .min(5, "Mínimo 5 caracteres"),
  });

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

  function onSubmit(data) {
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
        schema,
        onSubmit,
        seePassword,
        seeDoNotSeePassword,
        seeConfirmPassword,
        seeDoNotSeeConfirmPassword,
        success,
        errorEmail,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}
