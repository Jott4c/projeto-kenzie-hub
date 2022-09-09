import { createGlobalStyle } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    checked: boolean;
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
    boxShadow: string;
  }
}

export const GlobalStyle = createGlobalStyle`
:root {
    --color-primary: ${({ theme }) => theme.colorPrimary};
    --color-primary-50: ${({ theme }) => theme.colorPrimary50};
    --color-primary-disable: ${({ theme }) => theme.colorPrimaryDisable};

    --grey-4:${({ theme }) => theme.grey4};
    --grey-3:${({ theme }) => theme.grey3};
    --grey-2:${({ theme }) => theme.grey2};
    --grey-1:${({ theme }) => theme.grey1};
    --grey-0:${({ theme }) => theme.grey0};

    --sucess:${({ theme }) => theme.sucess};
    --negative:${({ theme }) => theme.negative};
}

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body, html {
    width:100vw;
    height:100vh;
    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-track {
      background: var(--grey-2);
     
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--grey-4);
      border-radius: 20px;
    }
 }

 li {
    list-style: none;
}

button {
    cursor: pointer;

    transition: 0.5s;
    
}

button:hover{
    filter:brightness(0.8);
  
}
input:-webkit-autofill {
 -webkit-box-shadow: 0 0 0 30px var(--grey-3) inset;
 -webkit-text-fill-color: var(--grey-0) !important;
}
`;
