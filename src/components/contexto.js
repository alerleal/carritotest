import { createEvent } from "@testing-library/react";
import { createContext } from "react";


const contexto = createContext();

const Consumer = contexto.Consumer;

const Provider = contexto.Provider;

export const { Consumer, Provider } = contexto;

export default contexto = createContext();