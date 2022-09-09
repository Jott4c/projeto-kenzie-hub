import { ContentForm, ContentHeaders } from "./styles";
import { Container } from "../../components/Container";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { notifyRegister, notifyApi } from "../../components/Toasty";

import api from "../../services/api";

import { useContext } from "react";
import { authContext } from "../../provides/auth";
import { Iregister } from "./../../provides/auth";

import { motion } from "framer-motion";

export default function Register() {
  const yup = require("yup");
  require("yup-password")(yup);

  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Digite seu nome"),
    email: yup.string().required("Digite seu e-mail").email("E-mail inválido"),
    password: yup
      .string()
      .required("Digite uma senha")
      .min(8, "A senha deve conter no mínimo 8 caracteres")
      .minNumbers(1, "A senha deve conter no mínimo um número")
      .minLowercase(1, "A senha deve conter no mínimo uma letra minúscula")
      .minUppercase(1, "A senha deve conter no mínimo uma letra maiúscula")
      .minSymbols(1, "A senha deve conter no mínimo um caractere especial"),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password")], "As senhas não são iguais"),
    bio: yup
      .string()
      .required("Fale sobre você")
      .min(20, "Escreva pelo menos 20 caractere")
      .max(250, "No maxímo 250 caracteres"),
    contact: yup.string().required("Digite seu contato"),
    course_module: yup.string().required("Selecione seu modulo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iregister>({
    resolver: yupResolver(formSchema),
  });

  const { theme } = useContext(authContext);

  const onSubmit = (data: Iregister) =>
    api
      .post("users", data)
      .then((res) => {
        notifyApi(res.status, theme.checked);
        navigate("/login");
      })
      .catch((erro) => notifyApi(erro.response.data.message, theme.checked));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <ContentHeaders>
          <h1>Kenzie Hub</h1>
          <button onClick={() => navigate(-1)}>Voltar</button>
        </ContentHeaders>
        <ContentForm>
          <h2>Crie sua conta</h2>
          <p>Rapido e grátis, vamos nessa</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />

            <label>Email</label>
            <input
              type="text"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <label>Confirmar senha</label>
            <input
              type="password"
              placeholder="Digite novamente sua senha"
              {...register("confirmPassword")}
            />
            <label>Bio</label>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <label>Contato</label>
            <input
              type="text"
              placeholder="Digite seu contato"
              {...register("contact")}
            />
            <label>Selecionar módulo</label>
            <select {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Inciante
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Intermediario
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Avançado
              </option>
              <option value="Quarto módulo (Backend Avançado)">Expert</option>
            </select>

            <button
              type="submit"
              className="cadastrar"
              onClick={() => notifyRegister(errors, theme.checked)}
            >
              Cadastrar
            </button>
          </form>
        </ContentForm>
      </Container>
    </motion.div>
  );
}
