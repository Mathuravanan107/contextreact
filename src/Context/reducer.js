export const initialState={
      isAuthenticated:false,
      products:[],
};

export const authReducer=(state,action)=> {
    console.log("state", state,"action",action)
    switch (action.type){
      case "Login":
       return{
            ...state,
            isAuthenticated:action.payload,
       };

       case "Add_To_Cart":
       return{
            ...state,
            products:action.payload,
       };
       default:
            return state;
    }
}