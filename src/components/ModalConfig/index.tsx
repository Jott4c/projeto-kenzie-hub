import { ContentForm } from "./styles";
import { BackDrop } from "../backDrop";

import { MdClose } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import { useContext } from "react";
import { authContext } from "../../provides/auth";
import InputPassword from "../InputPassword";
import InputsInfoEdit from "../InputsInfoEdit";

export default function ModalConfig() {
  const {
    user,
    openModalConfig,
    setOpenModalConfig,
    setOpenModalEditImg,
    setContentInfo,
  } = useContext(authContext);

  if (openModalConfig) {
    return (
      <BackDrop>
        <InputPassword />
        <InputsInfoEdit />
        <ContentForm>
          <div className="header">
            <p>Informações básicas</p>
            <button onClick={() => setOpenModalConfig(false)}>
              <MdClose />
            </button>
          </div>
          <div className="foto-perfil">
            <div>
              <img src={user.avatar_url} alt="" />
              <button onClick={() => setOpenModalEditImg(true)}>
                Alterar foto
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setContentInfo("password");
                }}
              >
                Senha
              </button>
              <button>Modulo</button>
            </div>
          </div>
          <div className="form">
            <div className="lines">
              <p>Nome</p>
              <div>
                <input type="text" defaultValue={user.name} disabled />
                <button onClick={() => setContentInfo("name")}>
                  <FaEdit />
                </button>
              </div>
            </div>
            <div className="lines">
              <p>Email</p>
              <div>
                <input type="text" defaultValue={user.email} />
                <button onClick={() => setContentInfo("email")}>
                  <FaEdit />
                </button>
              </div>
            </div>
            <div className="lines">
              <p>Bio</p>
              <div>
                <input type="text" defaultValue={user.bio} />
                <button onClick={() => setContentInfo("bio")}>
                  <FaEdit />
                </button>
              </div>
            </div>
            <div className="lines">
              <p>Contato</p>
              <div>
                <input type="text" id="contact" defaultValue={user.contact} />
                <button onClick={() => setContentInfo("contact")}>
                  <FaEdit />
                </button>
              </div>
            </div>
          </div>
        </ContentForm>
      </BackDrop>
    );
  }

  return <></>;
}
