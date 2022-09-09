export interface Itheme {
  name: string;
  colorPrimary: string;
  colorPrimary50: string;
  colorPrimaryDisable: string;
  grey4: string;
  grey3: string;
  grey2: string;
  grey1: string;
  grey0: string;
  sucess: string;
  negative: string;
  checked: boolean;
  boxShadow: string;
}

export const darkTheme = {
  name: "dark",
  checked: true,

  colorPrimary: "#FF577F",
  colorPrimary50: "#FF427F",
  colorPrimaryDisable: "#59323F",
  grey4: "#121214",
  grey3: "#212529",
  grey2: "#343B41",
  grey1: "#868E96",
  grey0: "#F8F9FA",
  sucess: "#3FE864",
  negative: "#E83F5B",
  boxShadow: "none",
};

export const ligthTheme = {
  name: "ligth",
  checked: false,

  colorPrimary: "#FF577F",
  colorPrimary50: "#FF427F",
  colorPrimaryDisable: "#a35c74",
  grey4: "#f5f5f5",
  grey3: "#e3e3e3",
  grey2: "#e3e3e3",
  grey1: "#868E96",
  grey0: "#121214",
  sucess: "#3FE864",
  negative: "#E83F5B",
  boxShadow: "1px 1px 3px var(--grey-0)",
};
