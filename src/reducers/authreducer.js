const INITAL_STATE = {
    userId: null,
    issignedin:null  
};

const authreducer = (state=INITAL_STATE, action)=>{
    switch (action.type) {
        case 'SIGNIN':
            return {...state, userId : action.payload, issignedin : true }
        case 'SIGNOUT':
            return {...state, userId:null, issignedin:false}
    
        default:
           return state
    }
}
export default authreducer