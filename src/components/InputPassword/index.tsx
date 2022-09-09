import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FaCheck } from "react-icons/fa";
import { authContext, Iregister } from "../../provides/auth";
import { notifyInfo, notifyRegister } from "../Toasty";
import api from "../../services/api";
import { BackDrop } from "../backDrop";
import { MdClose } from "react-icons/md";
import { ContentModal } from "./styles";

export default function InputPassword() {
  const yup = require("yup");
  require("yup-password")(yup);

  const formSchema = yup.object().shape({
    old_password: yup.string(),
    password: yup
      .string()
      .min(8, "A senha deve conter no mínimo 8 caracteres")
      .minNumbers(1, "A senha deve conter no mínimo um número")
      .minLowercase(1, "A senha deve conter no mínimo uma letra minúscula")
      .minUppercase(1, "A senha deve conter no mínimo uma letra maiúscula")
      .minSymbols(1, "A senha deve conter no mínimo um caractere especial"),
  });

  const { token, setUser, contentInfo, setContentInfo, theme } =
    useContext(authContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iregister>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: Iregister) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    api
      .put("profile", data, config)
      .then((res) => {
        notifyInfo(res.status, theme.checked);
        return api.get(`users/${res.data.id}`);
      })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .then(() => setContentInfo(""))
      .catch((error) => notifyInfo(error, theme.checked));
  };

  const [isVisibleOld, setIsVisibleOld] = useState(false);
  const [isVisibleNew, setIsVisibleNew] = useState(false);

  if (contentInfo === "password") {
    return (
      <BackDrop>
        <ContentModal>
          <div>
            <button onClick={() => setContentInfo("")}>
              <MdClose />
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="password">
              <div className="inputPassword">
                <input
                  placeholder="Digite sua senha Atual"
                  autoComplete="off"
                  type={isVisibleOld ? "text" : "password"}
                  {...register("old_password")}
                />
                <button
                  type="button"
                  onClick={() => setIsVisibleOld(!isVisibleOld)}
                >
                  {isVisibleOld ? <Visibility /> : <VisibilityOff />}
                </button>
              </div>
              <div className="inputPassword">
                <input
                  placeholder="Digite sua nova senha"
                  autoComplete="off"
                  type={isVisibleNew ? "text" : "password"}
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setIsVisibleNew(!isVisibleNew)}
                >
                  {isVisibleNew ? <Visibility /> : <VisibilityOff />}
                </button>
              </div>
              <button
                type="submit"
                onClick={() => notifyRegister(errors, theme.checked)}
              >
                <FaCheck />
              </button>
            </div>
          </form>
        </ContentModal>
      </BackDrop>
    );
  }
  return <></>;
}
