import { ContentModal } from "./styles";
import { BackDrop } from "../backDrop";

import { MdClose } from "react-icons/md";
import { notifyTech } from "../Toasty";

import { useContext } from "react";
import { authContext, Itech } from "../../provides/auth";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../services/api";

export default function ModalAdd() {
  const { openModalAdd, setOpenModalAdd, token, setUser, theme } =
    useContext(authContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("preencha o nome"),
    status: yup.string().required(""),
  });

  const { register, handleSubmit } = useForm<Itech>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: Itech) => {
    api
      .post("users/techs", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => api.get(`users/${res.data.user.id}`))
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .then(() => notifyTech("Tech foi criada", "success", theme.checked))
      .then(() => setOpenModalAdd(false))
      .catch((err) =>
        notifyTech(err.response.data.message, "error", theme.checked)
      );
  };
  if (openModalAdd) {
    return (
      <BackDrop>
        <ContentModal>
          <div>
            <p>Cadastrar Tecnologia</p>
            <button onClick={() => setOpenModalAdd(false)}>
              <MdClose />
            </button>
          </div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" {...register("title")} />
            <label>Selecionar status</label>
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <button>Cadastrar Tecnologia</button>
          </form>
        </ContentModal>
      </BackDrop>
    );
  }
  return <></>;
}
