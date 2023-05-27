import {createContext,useState,useEffect} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    userState:null,
    setUserState:()=>{}
})



export const UserProvider = ({children})=>{
    const [userState, setUserState] = useState(null);
    const value = {userState, setUserState};
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            setUserState(user);
            if(user) createUserDocumentFromAuth(user);
        });
        return unsubscribe;
        },[]);
    
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}