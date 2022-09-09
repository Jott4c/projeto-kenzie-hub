import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { darkTheme, ligthTheme, Itheme } from "../components/Theme";

interface AuthProps {
  children: ReactNode;
}

export interface Itech {
  title: string;
  status: string;
  id: string;
}
export interface Iuser {
  id: string;
  name: string;
  email: string;
  contact: string;
  bio: string;
  avatar_url: string;
  course_module: string;
  techs: Itech[];
  works: object[];
}

export interface Iregister {
  name: string;
  email: string;
  contact: string;
  bio: string;
  confirmPassword: string;
  password: string;
  old_password: string;
  course_module: string;
}

interface AuthProviderDate {
  user: Iuser;
  setUser: Dispatch<SetStateAction<Iuser>>;
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  openModalAdd: boolean;
  setOpenModalAdd: Dispatch<SetStateAction<boolean>>;
  openModalEdit: boolean;
  setOpenModalEdit: Dispatch<SetStateAction<boolean>>;
  openModalEditImg: boolean;
  setOpenModalEditImg: Dispatch<SetStateAction<boolean>>;
  openModalConfig: boolean;
  setOpenModalConfig: Dispatch<SetStateAction<boolean>>;
  openModalEditInfo: boolean;
  setOpenModalEditInfo: Dispatch<SetStateAction<boolean>>;
  contentTech: Itech;
  setContentTech: Dispatch<SetStateAction<Itech>>;
  contentInfo: string;
  setContentInfo: Dispatch<SetStateAction<string>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  theme: Itheme;
  setSwitch: () => void;
  IsOpenModalInfo: (type: string) => void;
}

export const authContext = createContext({} as AuthProviderDate);

export const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<Iuser>({} as Iuser);
  const [isLogged, setIsLogged] = useState(false);

  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalEditImg, setOpenModalEditImg] = useState(false);
  const [openModalConfig, setOpenModalConfig] = useState(false);
  const [openModalEditInfo, setOpenModalEditInfo] = useState(false);

  const [contentTech, setContentTech] = useState<Itech>({} as Itech);
  const [contentInfo, setContentInfo] = useState("");

  const [token, setToken] = useState("");

  const [theme, setTheme] = useState<Itheme>(darkTheme);

  function setSwitch() {
    setTheme((oldTheme) => {
      if (oldTheme.checked) {
        localStorage.setItem("theme", JSON.stringify(ligthTheme));
        return ligthTheme;
      }
      localStorage.setItem("theme", JSON.stringify(darkTheme));
      return darkTheme;
    });
  }

  function IsOpenModalInfo(type: SetStateAction<string>) {
    setContentInfo(type);
    setOpenModalEditInfo(true);
  }

  useEffect(() => {
    if (isLogged) {
      const a = localStorage.getItem("theme");
      if (a) {
        setTheme(JSON.parse(a));
      }
    }
  }, [isLogged]);

  return (
    <authContext.Provider
      value={{
        user,
        setUser,
        isLogged,
        setIsLogged,
        openModalAdd,
        setOpenModalAdd,
        openModalEdit,
        setOpenModalEdit,
        openModalEditImg,
        setOpenModalEditImg,
        openModalConfig,
        setOpenModalConfig,
        openModalEditInfo,
        setOpenModalEditInfo,
        setContentTech,
        contentTech,
        contentInfo,
        setContentInfo,
        token,
        setToken,
        theme,
        setSwitch,
        IsOpenModalInfo,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
