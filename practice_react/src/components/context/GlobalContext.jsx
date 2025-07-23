import { createContext } from "react";

export const GlobalContext = createContext(null);


const ContextProvider = ({ children }) => {

    return <GlobalContext.Provider value={{ name: "Omkar Das Mahajan" }}>{children}</GlobalContext.Provider>
}

export default ContextProvider;