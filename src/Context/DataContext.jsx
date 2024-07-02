import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const getAll = async () => {
            try {
                const token = Cookies.get("token");
                if (token) {
                    const res = await axios.get("http://localhost:8000/api/header", {
                        withCredentials: true,
                    });
                    setUser(res.data.user); 
                } else {
                    console.log("You are not Authorized");
                }
            } catch (err) {
                console.log(err);
            }
        };
        getAll();
    }, []);

    const logOut=async()=>{
        try{
            const res=await axios.post("http://localhost:8000/api/auth/logout",{},{withCredentials:true})
            if(res){
                setUser({});
            }
        }
        catch(err){
            console.log(err)
        }
}

    return (
        <DataContext.Provider value={{ user,logOut}}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
};
