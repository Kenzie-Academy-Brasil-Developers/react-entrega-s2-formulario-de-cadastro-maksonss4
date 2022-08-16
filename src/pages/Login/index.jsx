import { useContext } from "react";
import { useForm } from "react-hook-form";
import { H2 } from "../../components/H2";
import { Logo } from "../../components/Logo";
import { Span } from "../../components/Span";
import { LoginContext } from "../../Providers/LoginProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  LinkToRegistration,
  ContainerLogin,
  Div,
  SvgEye,
  ButtonAbsolute,
  Form,
  Input,
  ButtonSubmit,
} from "./style";

export function Login() {
  const { seePassword, seeDoNotSeePassword, signIn, schema } =
    useContext(LoginContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <ContainerLogin>
      <Logo />
      <Div>
        <H2>Login</H2>
        <Form onSubmit={handleSubmit(signIn)}>
          <label htmlFor="email">
            Email{errors.email && <Span>{errors.email.message}</Span>}
          </label>
          <Input
            erro={errors.email}
            {...register("email")}
            type="text"
            id="email"
            placeholder="Digite seu email"
          />
          <label htmlFor="password">
            Senha{errors.password && <Span>{errors.password.message}</Span>}
          </label>
          <Input
            erro={errors.password}
            {...register("password")}
            type={seePassword ? "text" : "password"}
            id="password"
            placeholder="Digite sua senha"
          />
          <ButtonAbsolute
            see={seePassword}
            onClick={seeDoNotSeePassword}
            type="button"
          >
            <SvgEye size={17} />
          </ButtonAbsolute>
          <ButtonSubmit
            disabled={Object.values(errors).length > 0 ? true : false}
            type="submit"
          >
            Entrar
          </ButtonSubmit>
        </Form>
        <Span>Ainda não possui uma conta?</Span>
        <LinkToRegistration to="/registration">Cadastre-se</LinkToRegistration>
      </Div>
    </ContainerLogin>
  );
}
