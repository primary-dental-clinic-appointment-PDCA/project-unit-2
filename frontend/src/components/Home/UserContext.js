import { createContext} from 'react';

export const UserContext = createContext({
    authen:false,
    setAuthen:()=>{},
    authenUser:false,
    setAuthenUser:()=>{}
})