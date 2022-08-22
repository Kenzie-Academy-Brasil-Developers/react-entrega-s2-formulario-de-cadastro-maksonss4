import { createContext, useEffect, useState } from "react";

import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IProvidersProps } from "..";

export const LoginContext = createContext({} as ILoginContext);

interface ILoginContext {
  seeDoNotSeePassword: () => void;
  seePassword: boolean;
  loading: boolean;
  tecs: ITec[];
  setTecs: React.Dispatch<React.SetStateAction<ITec[]>>;
  user: IUser;
  signIn: (value: ISignInData) => void;
}

interface ITec {
  id: string;
  title: string;
  status: string;
}

interface IUserTech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

interface IUser {
  avatar_url: null | string;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: IUserTech[];
  updated_at: string;
  works: [];
}

export interface ISignInData {
  email: string;
  password: string;
}

interface IResponseSignIn {
  token: string;
  user: IUser;
}

export function LoginProvider({ children }: IProvidersProps) {
  const [seePassword, setSeePassword] = useState(false);
  const [user, setUser] = useState({} as IUser);
  const [loading, setLoading] = useState(true);
  const [tecs, setTecs] = useState([] as ITec[]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("KHtokenKH");

      if (token) {
        try {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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
  }, []);

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

  async function signIn(data: ISignInData) {
    api
      .post<IResponseSignIn>("/sessions", data)
      .then((res) => {
        const { user: userLogado, token } = res.data;
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setTecs(userLogado.techs);
        setUser(userLogado);
        localStorage.setItem("KHtokenKH", token);
        localStorage.setItem("KHidKH", userLogado.id);
        sucess();
        navigate(`/dashboard`, { replace: true });
      })
      .catch(() => error());
  }

  return (
    <LoginContext.Provider
      value={{
        seePassword,
        user,
        seeDoNotSeePassword,
        signIn,

        loading,
        tecs,
        setTecs,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
