import { ContentModal } from "./styles";
import { BackDrop } from "../backDrop";
import { MdClose } from "react-icons/md";

import { useContext } from "react";
import { authContext, Itech } from "../../provides/auth";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../services/api";

import { notifyTech } from "../Toasty";

export default function ModalEdit() {
  const {
    openModalEdit,
    setOpenModalEdit,
    contentTech,
    token,
    user,
    setUser,
    theme,
  } = useContext(authContext);

  const formSchema = yup.object().shape({
    status: yup.string().required(""),
  });

  const { register, handleSubmit } = useForm<Itech>({
    resolver: yupResolver(formSchema),
  });

  const handleEdit = (data: Itech) => {
    api
      .put(`users/techs/${contentTech.id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => api.get(`users/${user.id}`))
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .then(() => notifyTech("Tech foi editada", "success", theme.checked))
      .then(() => setOpenModalEdit(false))
      .catch((err) => console.log(err));
  };
  function handleDelete(id: string) {
    api
      .delete(`users/techs/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => api.get(`users/${user.id}`))
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        setOpenModalEdit(false);
        notifyTech("Tech excluída", "success", theme.checked);
      })
      .catch((err) => console.log(err));
  }
  if (openModalEdit) {
    return (
      <BackDrop>
        <ContentModal>
          <div className="head">
            <p>Tecnologia detalhes</p>
            <button onClick={() => setOpenModalEdit(false)}>
              <MdClose />
            </button>
          </div>
          <form action="" onSubmit={handleSubmit(handleEdit)}>
            <label>Name</label>
            <input type="text" value={contentTech.title} disabled />
            <label>Selecionar status</label>
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <div>
              <button className="salvar" type="submit">
                Salvar alterações
              </button>
              <button
                className="excluir"
                type="button"
                onClick={() => handleDelete(contentTech.id)}
              >
                Excluir
              </button>
            </div>
          </form>
        </ContentModal>
      </BackDrop>
    );
  }
  return <></>;
}
