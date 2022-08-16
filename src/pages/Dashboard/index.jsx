import { useContext } from "react";
import {
  ButtonDelete,
  ButtonEdit,
  ButtonFecharModal,
  ButtonSubmit,
  ContainerDashboard,
  Div,
  DivButtonsDeletar,
  DivParentUl,
  Form,
  Input,
  Li,
  PDeletar,
  Section,
  SvgDelete,
  SvgEdit,
  Ul,
} from "./style";
import { Link, Navigate } from "react-router-dom";
import { DashboarContext } from "../../Providers/DashboardProvider";
import { Header } from "../../components/Header";
import { Span } from "../../components/Span";
import { Modal } from "../../components/Modal";
import { H2 } from "../../components/H2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginContext } from "../../Providers/LoginProvider";

export function Dashboard() {
  const {
    logout,
    isOPenModalAddTech,
    schemaCadastro,
    schemaEditar,
    openCloseModalAddTech,
    addTechSubmit,
    isOpenModalDeleteTech,
    openCloseModalDeleteTech,
    isOpenModalEditTech,
    openCloseModalEditTech,
    selecionarIdTech,
    deleteTech,
    atualizarStatusTech,
    titleTech,
    selecionarTitleTech,
  } = useContext(DashboarContext);

  const { user, loading, tecs } = useContext(LoginContext);
  const {
    register: registerCadastro,
    handleSubmit: handleSubmitCadastro,
    formState: { errors: errorsCadastro },
  } = useForm({
    resolver: yupResolver(schemaCadastro),
  });

  const {
    register: registerEditar,
    handleSubmit: handleSubmitEditar,
    formState: { errors: errorsEditar },
  } = useForm({
    resolver: yupResolver(schemaEditar),
  });

  if (loading) return <H2>Carregando...</H2>;

  return user ? (
    <ContainerDashboard>
      <Header>
        <Link onClick={logout} to={"/login"}>
          Logout
        </Link>
      </Header>

      <Section>
        <h2>{`Olá, ${user.name}`}</h2>
        <Span>{user.course_module}</Span>
      </Section>

      <Div>
        <h2>Tecnologias</h2>
        <button onClick={openCloseModalAddTech}>+</button>
      </Div>

      {tecs.length > 0 ? (
        <DivParentUl>
          <Ul>
            {tecs.map(({ id, title, status }) => {
              return (
                <Li key={id}>
                  <p>{title}</p>
                  <span>{status}</span>
                  <ButtonDelete
                    onClick={() => {
                      openCloseModalDeleteTech();
                      selecionarIdTech(id);
                    }}
                  >
                    <SvgDelete size={12} />
                  </ButtonDelete>
                  <ButtonEdit
                    onClick={() => {
                      openCloseModalEditTech();
                      selecionarIdTech(id);
                      selecionarTitleTech(title);
                    }}
                  >
                    <SvgEdit size={12} />
                  </ButtonEdit>
                </Li>
              );
            })}
          </Ul>
        </DivParentUl>
      ) : (
        <Section>
          <h2>Adicione tecnologias</h2>
          <Span>
            Você não pussui tecnologias. Adicione clicando no botão "+" acima
          </Span>
        </Section>
      )}

      {isOPenModalAddTech && (
        <Modal>
          <H2>Cadastrar tecnologia</H2>

          <Form onSubmit={handleSubmitCadastro(addTechSubmit)}>
            <label htmlFor="title">
              Nome{" "}
              {errorsCadastro.title && (
                <Span>{errorsCadastro.title.message}</Span>
              )}
            </label>
            <Input
              erro={errorsCadastro.title}
              {...registerCadastro("title")}
              placeholder="Tecnologia"
              type="text"
              id="title"
            />

            <label htmlFor="status">Selecionar status</label>
            <select {...registerCadastro("status")} id="status">
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>

            <ButtonSubmit
              disabled={Object.keys(errorsCadastro).length > 0 ? true : false}
              type="submit"
            >
              Cadastrar tecnologia
            </ButtonSubmit>
          </Form>

          <ButtonFecharModal onClick={openCloseModalAddTech} type="button">
            X
          </ButtonFecharModal>
        </Modal>
      )}

      {isOpenModalDeleteTech && (
        <Modal>
          <H2>Deletar Tecnologia</H2>

          <PDeletar>Deseja deletar a tecnologia?</PDeletar>

          <DivButtonsDeletar>
            <button onClick={deleteTech} className="confirmar">
              Sim
            </button>
            <button onClick={openCloseModalDeleteTech} className="cancelar">
              Não
            </button>
          </DivButtonsDeletar>

          <ButtonFecharModal onClick={openCloseModalDeleteTech}>
            X
          </ButtonFecharModal>
        </Modal>
      )}

      {isOpenModalEditTech && (
        <Modal>
          <H2>Editar tecnologia</H2>

          <PDeletar>Atualize o status da tecnologia {titleTech}</PDeletar>

          <Form onSubmit={handleSubmitEditar(atualizarStatusTech)}>
            <label htmlFor="status">Status</label>
            <select {...registerEditar("status")} id="status">
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>

            <ButtonSubmit
              disabled={Object.keys(errorsEditar).length > 0 ? true : false}
              type="submit"
            >
              Editar tecnologia
            </ButtonSubmit>
          </Form>

          <ButtonFecharModal onClick={openCloseModalEditTech}>
            X
          </ButtonFecharModal>
        </Modal>
      )}
    </ContainerDashboard>
  ) : (
    <Navigate to="/login" replace />
  );
}
