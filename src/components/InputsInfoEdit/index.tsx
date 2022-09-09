import { BackDrop } from "../backDrop";
import { ContentModal } from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext, useEffect } from "react";
import { authContext, Iregister } from "../../provides/auth";
import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import api from "../../services/api";

import { notifyRegister, notifyInfo } from "../Toasty";

export default function InputsInfoEdit() {
  const yup = require("yup");
  require("yup-password")(yup);

  const formSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("E-mail inválido"),
    bio: yup
      .string()
      .min(20, "Escreva pelo menos 20 caractere")
      .max(250, "No maxímo 250 caracteres"),
    contact: yup.string(),
    course_module: yup.string(),
  });

  const { token, setUser, setContentInfo, contentInfo, theme } =
    useContext(authContext);

  const {
    register,
    handleSubmit,
    reset,
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

  useEffect(() => {
    reset("" as unknown as Iregister);
  }, [contentInfo, reset]);

  if (contentInfo !== "" && contentInfo !== "password") {
    return (
      <BackDrop>
        <ContentModal>
          <div>
            <button onClick={() => setContentInfo("")}>
              <MdClose />
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="rest">
              {contentInfo === "name" ? (
                <input type="text" {...register("name")} />
              ) : contentInfo === "email" ? (
                <input type="text" {...register("email")} />
              ) : contentInfo === "bio" ? (
                <input type="text" {...register("bio")} />
              ) : contentInfo === "contact" ? (
                <input type="text" {...register("contact")} />
              ) : (
                <></>
              )}
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
