import { ContentForm } from "./styles";
import { Container } from "../../components/Container";

import { VisibilityOff, Visibility } from "@mui/icons-material";

import { useContext, useState } from "react";
import { authContext, Iregister } from "../../provides/auth";

import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import { notifyLogin } from "../../components/Toasty";

import api from "../../services/api";

import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<Iregister>();

  const { setIsLogged, setUser, theme } = useContext(authContext);

  const onSubmit = (data: Iregister) => {
    api
      .post("sessions", data)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("authToken", JSON.stringify(res.data.token));
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("theme", JSON.stringify(theme));
        setIsLogged(true);
        setUser(res.data.user);
        navigate("/");
        return res;
      })
      .catch((error) =>
        notifyLogin(error.response.data.message, theme.checked)
      );
  };

  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <h1 className="titulo">Kenzie Hub</h1>
        <ContentForm>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input type="text" {...register("email")} />
            <label>Senha</label>
            <div className="inputPassword">
              <input
                autoComplete="off"
                type={isVisible ? "text" : "password"}
                {...register("password")}
              />
              {isVisible ? (
                <button type="button" onClick={() => setIsVisible(!isVisible)}>
                  <Visibility />
                </button>
              ) : (
                <button type="button" onClick={() => setIsVisible(!isVisible)}>
                  <VisibilityOff />
                </button>
              )}
            </div>
            <button className="entrar" type="submit">
              Entrar
            </button>
            <p>Ainda não pussui uma conta?</p>
            <button
              onClick={() => navigate("/register")}
              className="cadastre-se"
            >
              Cadastre-se
            </button>
          </form>
        </ContentForm>
      </Container>
    </motion.div>
  );
}
