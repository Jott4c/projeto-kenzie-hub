import { FieldErrorsImpl, DeepRequired } from "react-hook-form";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Iregister } from "../../provides/auth";

const myTheme = {
  transition: Zoom,
  style: { background: "var(--grey-3)", color: "var(--grey-0)" },
};

export const notifyRegister = (
  error: FieldErrorsImpl<DeepRequired<Iregister>>,
  isTrue: boolean
) => {
  if (error.name?.message) {
    return toast.error(
      error.name.message,
      isTrue ? myTheme : { theme: "colored" }
    );
  }
  if (error.email?.message) {
    return toast.error(
      error.email.message,
      isTrue ? myTheme : { theme: "colored" }
    );
  }
  if (error.password?.message) {
    return toast.error(
      error.password.message,
      isTrue ? myTheme : { theme: "colored" }
    );
  }
  if (error.confirmPassword?.message) {
    return toast.error(
      error.confirmPassword.message,
      isTrue ? myTheme : { theme: "colored" }
    );
  }
  if (error.bio?.message) {
    return toast.error(
      error.bio.message,
      isTrue ? myTheme : { theme: "colored" }
    );
  }
  if (error.contact?.message) {
    return toast.error(
      error.contact?.message,
      isTrue ? myTheme : { theme: "colored" }
    );
  }
};

export const notifyApi = (message: string | number, isTrue: boolean) => {
  if (message === "Email already exists") {
    return toast.error(
      "Este e-mail já está cadastrado",
      isTrue ? myTheme : { theme: "colored" }
    );
  }
  if (message === 201) {
    return toast.success(
      "Conta criada com sucesso",
      isTrue ? myTheme : { theme: "colored" }
    );
  }
};

export const notifyTech = (message: string, type: string, isTrue: boolean) => {
  if (type === "success") {
    return toast.success(message, isTrue ? myTheme : { theme: "colored" });
  } else if (type === "error") {
    return toast.error(
      "Já existe uma tech com esse nome",
      isTrue ? myTheme : { theme: "colored" }
    );
  }
};

export const notifyInfo = (res: number, isTrue: boolean) => {
  if (res === 200) {
    return toast.success(
      "informação alterada com sucesso",
      isTrue ? myTheme : { theme: "colored" }
    );
  } else {
    return toast.error(
      "houve um erro, tente mais tarde",
      isTrue ? myTheme : { theme: "colored" }
    );
  }
};

export const notifyLogin = (res: string, isTrue: boolean) => {
  console.log(res);
  if (res === "Incorrect email / password combination") {
    return toast.error(
      "Email ou senha incorretos",
      isTrue ? myTheme : { theme: "colored" }
    );
  } else if (res[0] === "password is required") {
    return toast.error(
      "Digite sua senha",
      isTrue ? myTheme : { theme: "colored" }
    );
  } else {
    return toast.error(
      "houve um erro, tente novamente",
      isTrue ? myTheme : { theme: "colored" }
    );
  }
};
