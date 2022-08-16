import { H2 } from "../../components/H2";
import { Header } from "../../components/Header";
import { Span } from "../../components/Span";
import {
  ButtonAbsoluteConfirmPassword,
  ButtonAbsolutePassword,
  ButtonSubmit,
  ContainerRegister,
  Div,
  Form,
  Input,
  SvgEyeConfirmPassword,
  SvgEyePassword,
} from "./style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { RegistrationContext } from "../../Providers/RegistrationProvider";

export function Registration() {
  const {
    schema,
    onSubmit,
    seePassword,
    seeDoNotSeePassword,
    seeConfirmPassword,
    seeDoNotSeeConfirmPassword,
  } = useContext(RegistrationContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <ContainerRegister>
      <Header>
        <Link to={"/login"}>Login</Link>
      </Header>
      <Div>
        <H2>Crie sua conta</H2>
        <Span>Rápido e grátis, vamos nessa</Span>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">
            Nome{errors.name && <Span>{errors.name.message}</Span>}
          </label>
          <Input
            error={errors.name}
            {...register("name")}
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
          />

          <label htmlFor="email">
            Email{errors.email && <Span>{errors.email.message}</Span>}
          </label>
          <Input
            error={errors.email}
            {...register("email")}
            type="text"
            id="email"
            placeholder="Digite aqui seu email"
          />

          <label htmlFor="password">
            Senha{errors.password && <Span>{errors.password.message}</Span>}
          </label>
          <Input
            error={errors.password}
            {...register("password")}
            type={seePassword ? "text" : "password"}
            id="password"
            placeholder="Digite aqui sua senha"
          />
          <ButtonAbsolutePassword
            type="button"
            see={seePassword}
            onClick={seeDoNotSeePassword}
          >
            <SvgEyePassword size={17} />
          </ButtonAbsolutePassword>

          <label htmlFor="confirm_password">
            Confirmar senha
            {errors.confirm_password && (
              <Span>{errors.confirm_password.message}</Span>
            )}
          </label>
          <Input
            error={errors.confirm_password}
            {...register("confirm_password")}
            type={seeConfirmPassword ? "text" : "password"}
            id="confirm_password"
            placeholder="Confirme aqui sua senha"
          />
          <ButtonAbsoluteConfirmPassword
            type="button"
            see={seeConfirmPassword}
            onClick={seeDoNotSeeConfirmPassword}
          >
            <SvgEyeConfirmPassword size={17} />
          </ButtonAbsoluteConfirmPassword>

          <label htmlFor="bio">
            Bio{errors.bio && <Span>{errors.bio.message}</Span>}
          </label>
          <Input
            error={errors.bio}
            {...register("bio")}
            type="text"
            id="bio"
            placeholder="Fale sobre você"
          />

          <label htmlFor="contact">
            Contato{errors.contact && <Span>{errors.contact.message}</Span>}
          </label>
          <Input
            error={errors.contact}
            {...register("contact")}
            type="text"
            id="contact"
            placeholder="Opção de contato"
          />

          <label htmlFor="module">Selecionar Módulo</label>
          <select {...register("course_module")} id="module">
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo
            </option>
          </select>

          <ButtonSubmit
            disabled={Object.keys(errors).length === 0 ? false : true}
            className="buttonSubmit"
            type="submit"
          >
            Cadastrar
          </ButtonSubmit>
        </Form>
      </Div>
    </ContainerRegister>
  );
}
