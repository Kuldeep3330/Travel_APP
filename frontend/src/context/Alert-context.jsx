import {createContext, useContext, useState} from "react";


const AlertContext = createContext();

const AlertProvider = ({children}) => {

    let [alert, setAlert] = useState({
        open: false,
        message: "",
        type: "success"
    })

    return (
    <AlertContext.Provider value={{alert, setAlert}}>{children}</AlertContext.Provider>
    );
}

const useAlert = () =>{
    const context= useContext(AlertContext);
    if(!context)
    {
        throw new Error("uuseAlert must be used within a AlertProviderProvider");
    }
    return context;
}

export {useAlert, AlertProvider};