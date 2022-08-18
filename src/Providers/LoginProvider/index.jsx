import { createContext, useEffect, useState } from "react";
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [seePassword, setSeePassword] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tecs, setTecs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("KHtokenKH");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setTecs(data.techs);
          setUser(data);
          navigate("/dashboard", { replace: true });
        } catch (err) {
          console.log(err);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, [user]);

  const schema = yup
    .object({
      email: yup
        .string()
        .required("Email obrigatório")
        .email("Insira um email válido"),
      password: yup.string().required("Insira sua senha"),
    })
    .required();

  function seeDoNotSeePassword() {
    setSeePassword(!seePassword);
  }

  function error() {
    toast.error("Email/senha incorreto(a)", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function sucess() {
    toast.success("Login realizado com sucesso", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  async function signIn(data) {
    const response = await api.post("/sessions", data).catch(() => error());
    const { user: userLogado, token } = response.data;
    api.defaults.headers.authorization = `Bearer ${token}`;
    setTecs(userLogado.techs);
    setUser(userLogado);
    localStorage.setItem("KHtokenKH", token);
    localStorage.setItem("KHidKH", userLogado.id);
    sucess();
    navigate(`/dashboard`, { replace: true });
  }

  return (
    <LoginContext.Provider
      value={{
        seePassword,
        user,
        seeDoNotSeePassword,
        signIn,
        schema,
        loading,
        tecs,
        setTecs,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
