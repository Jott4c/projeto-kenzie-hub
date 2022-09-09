import { Container } from "../../components/Container";
import ModalAdd from "../../components/ModalAddTech";
import ModalEdit from "../../components/ModalEditTech";

import { RiUserSettingsLine } from "react-icons/ri";

import { Head, SectionInfo, SectionTech } from "./styles";

import { MdAdd } from "react-icons/md";

import { authContext } from "../../provides/auth";
import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import ModalEditImg from "../../components/ModalEditImg";
import ModalConfig from "../../components/ModalConfig";

import { motion } from "framer-motion";

export default function Home() {
  const {
    user,
    setUser,
    setToken,
    setIsLogged,
    setOpenModalAdd,
    setOpenModalEdit,
    setOpenModalEditImg,
    setOpenModalConfig,
    setContentTech,
  } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const user = localStorage.getItem("user");
    if (user && authToken) {
      setToken(JSON.parse(authToken));
      setUser(JSON.parse(user));
    }
  }, [setToken, setUser]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container height="100vh" width="100vw" align="base-line">
        <ModalAdd />
        <ModalEdit />
        <ModalConfig />
        <ModalEditImg />

        <Head>
          <div>
            <h1>Kenzie Hub</h1>
            <div>
              <button onClick={() => setOpenModalConfig(true)}>
                <RiUserSettingsLine />
              </button>
              <button
                onClick={() => {
                  localStorage.clear();
                  setIsLogged(false);
                  navigate("/login");
                }}
              >
                Sair
              </button>
            </div>
          </div>
        </Head>
        <SectionInfo>
          <div>
            <button onClick={() => setOpenModalEditImg(true)}>
              <img
                src={
                  user.avatar_url ??
                  "http://www.nugeo.uema.br/wp-content/uploads/2022/01/15-01-22-anima%C3%A7%C3%A3o.jpg"
                }
                alt={user?.name}
              />
            </button>
            <p>Olá, {user?.name}</p>
            <span>{user?.course_module}</span>
          </div>
        </SectionInfo>
        <SectionTech>
          <div className="head-tech">
            <p>Tecnologias</p>
            <button onClick={() => setOpenModalAdd(true)}>
              <MdAdd />
              {""}
            </button>
          </div>
          <div className="content-tech">
            <ul>
              {user?.techs?.map((tech) => (
                <li
                  key={tech.id}
                  onClick={() => {
                    setContentTech(tech);
                    setOpenModalEdit(true);
                  }}
                >
                  <p>{tech.title}</p>
                  <p>{tech.status}</p>
                </li>
              ))}
            </ul>
          </div>
        </SectionTech>
      </Container>
    </motion.div>
  );
}
