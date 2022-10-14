const reducer=(state, action)=>{
    if(action.type==="HOME_UPDATE"){
      return{
        ...state,
        details:action.payload.details,
        image:action.payload.image
      }
    }

    if(action.type==="ABOUT_UPDATE"){
        return{
            ...state,
            details:action.payload.details,
            image:action.payload.image
          }
    }
 
    if(action.type==="GET_SERVICES"){
        return{
            ...state,
            services:action.payload
          }
    }

    return state;
}

export default reducer;