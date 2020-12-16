import _ from 'lodash';

const Postsreducer = (state = {}, action) => {
    switch (action.type) {
        case "POSTS":
            return {...state, ..._.mapKeys(action.payload,'id')}
        case "FETCH":
            return {...state, [action.payload.id]:action.payload}
        case "NEW":
            return {  [action.payload.id]: action.payload, ...state }
        case "EDIT":
            return { ...state, [action.payload.id]: action.payload }
        case "DELETE":
            return _.omit(state, action.payload); 
        default:
            return state
    }
}
export default Postsreducer