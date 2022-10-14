import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer';
import home from '../images/logo.webp';
import about from '../images/about1.svg';

const API="https://thapareactapi.up.railway.app";
const AppContext=createContext();

const initialState={
    details:"",
    image:"",
    services:[]
}

const AppProvider=({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHomePage=()=>{
        return dispatch({
            type:"HOME_UPDATE",
            payload:{
                details:"React MultiPage Website",
                image:{home}
            }
        })
    }
    
    const updateAboutPage=()=>{
        return dispatch({
            type:"ABOUT_UPDATE",
            payload:{
                details:"I am Nagaraj SP Nice to meet you.",
                image:{about}
            }
        })
    }

    const getServices=async (url)=>{
        try{
          const res=await fetch(url);
          const data=await res.json();

          dispatch({
            type:"GET_SERVICES",
            payload:data
          });

        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getServices(API);
    },[])


    return <AppContext.Provider 
           value={{...state, updateAboutPage, updateHomePage}}>
                {children}
           </AppContext.Provider>
}

const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};
