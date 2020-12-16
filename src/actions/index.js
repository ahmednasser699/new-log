import history from '../history';
import Api from '../api/api';

export const SignIn = (userId) => {
    return {
        type: 'SIGNIN',
        payload: userId
    }
};

export const SignOut = () => {
    return {
        type: 'SIGNOUT'
    }
};

export const fetchposts = (values) =>async (dispatch)=> {
    const response = await Api.get("/posts");
dispatch({
       type: 'POSTS',
        payload: response.data  
    }) 
}

export const Createpost = (values) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await Api.post('/posts', {...values, userId})
    dispatch({
        type: 'NEW',
        payload: response.data
    });
    history.push('/')
}
export const fetchPost = (id) => async (dispatch) => {
    const response=await Api.get(`posts/${id}`)
    dispatch({
        type: 'FETCH',
        payload:response.data
    })
}

export const editPost = (values, id) =>async(dispatch)=> {
    const response =await Api.patch(`posts/${id}`, values);
    dispatch({
        type: 'EDIT',
        payload: response.data
    })
      history.push('/')
}

export const deletePost = (id) =>async(dispatch)=> {
   await Api.delete(`posts/${id}`);
    dispatch({
        type: "DELETE",
        payload:id
    })
    history.push('/')

}