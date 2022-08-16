import { createContext, useState } from "react";
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const DashboarContext = createContext();

export function DashboardProvider({ children }) {
  const [isOPenModalAddTech, setIsOpenModalAddTech] = useState(false);
  const [isOpenModalDeleteTech, setIsOpenModalDeleteTech] = useState(false);
  const [isOpenModalEditTech, setIsOpenModalEditTech] = useState(false);
  const [idTech, setIdTech] = useState("");
  const [titleTech, setTitleTech] = useState("");
  const navigate = useNavigate();

  const schemaCadastro = yup.object({
    title: yup.string().required("Campo obrigatório"),
  });

  const schemaEditar = yup.object({
    status: yup.string().required("Campo obrigatório"),
  });

  function openCloseModalAddTech() {
    setIsOpenModalAddTech(!isOPenModalAddTech);
  }

  function openCloseModalDeleteTech() {
    setIsOpenModalDeleteTech(!isOpenModalDeleteTech);
  }

  function openCloseModalEditTech() {
    setIsOpenModalEditTech(!isOpenModalEditTech);
  }

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

  function selecionarIdTech(id) {
    setIdTech(id);
  }

  function selecionarTitleTech(title) {
    setTitleTech(title);
  }

  function logout() {
    localStorage.removeItem("KHtokenKH");
    localStorage.removeItem("KHidKH");
    navigate("/login", { replace: true });
  }

  function addTechSubmit(data) {
    api
      .post("/users/techs", data)
      .then(() => {
        tecCadastradaComSucesso();
        openCloseModalAddTech(!isOPenModalAddTech);
      })
      .catch(() => tecAnteriormenteCadastrada());
  }

  function deleteTech() {
    api
      .delete(`/users/techs/${idTech}`)
      .then(() => {
        tecDeletadaComSucesso();
        openCloseModalDeleteTech(!isOpenModalDeleteTech);
      })
      .catch((err) => console.log(err));
  }

  function atualizarStatusTech(data) {
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
        schemaCadastro,
        schemaEditar,
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
