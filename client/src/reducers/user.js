const userReducer=(states=[],action)=>{
    switch (action.type) {
        case "FETCH_USERS":
            return action.payload
            break;
        case "UPDATE_CURRENT-USER":
            return states.map((state)=> state._id === action.payload._id?action.payload:state)
        default:
            return states
            break;
    }
}
export default userReducer