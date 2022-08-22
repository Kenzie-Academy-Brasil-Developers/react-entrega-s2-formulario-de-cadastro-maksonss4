import { createContext, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IProvidersProps } from "..";

export const DashboarContext = createContext({} as IDashboardContext);

export interface IAddTech {
  title: string;
  status: string;
}

export interface IAtualizarTech {
  status: string;
}

interface IDashboardContext {
  selecionarIdTech: (value: string) => void;
  selecionarTitleTech: (value: string) => void;
  openCloseModalAddTech: () => void;
  openCloseModalDeleteTech: () => void;
  openCloseModalEditTech: () => void;
  logout: () => void;
  deleteTech: () => void;
  addTechSubmit: (value: IAddTech) => void;
  atualizarStatusTech: (value: IAtualizarTech) => void;
  isOPenModalAddTech: boolean;
  isOpenModalDeleteTech: boolean;
  isOpenModalEditTech: boolean;
  idTech: string;
  titleTech: string;
}

export function DashboardProvider({ children }: IProvidersProps) {
  const [isOPenModalAddTech, setIsOpenModalAddTech] = useState(false);
  const [isOpenModalDeleteTech, setIsOpenModalDeleteTech] = useState(false);
  const [isOpenModalEditTech, setIsOpenModalEditTech] = useState(false);
  const [idTech, setIdTech] = useState("");
  const [titleTech, setTitleTech] = useState("");
  const navigate = useNavigate();

  function tecAnteriormenteCadastrada() {
    toast.error("Tecnológia cadastrada anteriormente, você pode atualizá-la", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function tecCadastradaComSucesso() {
    toast.success("Tecnologia cadastrada com sucesso", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function tecDeletadaComSucesso() {
    toast.success("Tecnologia Deletada com sucesso", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function techEditadaComSucesso() {
    toast.success("Status da tecnologia editado com sucesso", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function selecionarIdTech(id: string) {
    setIdTech(id);
  }

  function selecionarTitleTech(title: string) {
    setTitleTech(title);
  }

  function openCloseModalAddTech() {
    setIsOpenModalAddTech(!isOPenModalAddTech);
  }

  function openCloseModalDeleteTech() {
    setIsOpenModalDeleteTech(!isOpenModalDeleteTech);
  }

  function openCloseModalEditTech() {
    setIsOpenModalEditTech(!isOpenModalEditTech);
  }

  function logout() {
    localStorage.removeItem("KHtokenKH");
    localStorage.removeItem("KHidKH");
    navigate("/login", { replace: true });
  }

  function deleteTech() {
    api
      .delete(`/users/techs/${idTech}`)
      .then(() => {
        tecDeletadaComSucesso();
        openCloseModalDeleteTech();
      })
      .catch((err) => console.log(err));
  }

  function addTechSubmit(data: IAddTech) {
    api
      .post("/users/techs", data)
      .then(() => {
        tecCadastradaComSucesso();
        openCloseModalAddTech();
      })
      .catch(() => tecAnteriormenteCadastrada());
  }

  function atualizarStatusTech(data: IAtualizarTech) {
    console.log(data);
    api
      .put(`/users/techs/${idTech}`, data)
      .then(() => {
        techEditadaComSucesso();
        setIsOpenModalEditTech(!isOpenModalEditTech);
      })
      .catch((err) => console.log(err));
  }

  return (
    <DashboarContext.Provider
      value={{
        logout,
        addTechSubmit,
        isOPenModalAddTech,
        openCloseModalAddTech,
        isOpenModalDeleteTech,
        openCloseModalDeleteTech,
        isOpenModalEditTech,
        openCloseModalEditTech,
        idTech,
        selecionarIdTech,
        deleteTech,
        atualizarStatusTech,
        titleTech,
        selecionarTitleTech,
      }}
    >
      {children}
    </DashboarContext.Provider>
  );
}
