import { ChangeEvent, useContext, useState } from "react";
import { authContext } from "../../provides/auth";
import { ContentModal } from "./styles";
import { BackDrop } from "../backDrop";

import api from "../../services/api";

import { IoClose } from "react-icons/io5";

export default function ModalEditImg() {
  const { openModalEditImg, setOpenModalEditImg, token, setUser, user } =
    useContext(authContext);

  const [avatar, setAvatar] = useState<File>();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files?.length) {
      setAvatar(event.target.files[0]);
    }
  }

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    const url = "users/avatar";
    let formData = new FormData();
    if (avatar) {
      formData.append("avatar", avatar);
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    await api
      .patch(url, formData, config)
      .then((res) => api.get(`users/${res.data.id}`))
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      });
  }
  if (openModalEditImg) {
    return (
      <BackDrop>
        <ContentModal>
          <div>
            <p>Alterar foto Perfil</p>
            <button onClick={() => setOpenModalEditImg(false)}>
              <IoClose />
            </button>
          </div>
          <img src={user.avatar_url} alt="foto do usuario" />
          <form onSubmit={handleSubmit}>
            <label htmlFor="img" id="labelImg">
              Selecionar Imagem
            </label>
            <input type="file" name="img" id="img" onChange={handleChange} />
            <button type="submit">Salvar Alterações</button>
          </form>
        </ContentModal>
      </BackDrop>
    );
  }

  return <></>;
}
