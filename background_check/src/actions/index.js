import axios from 'axios';

// // REGISTER
// export const REGISTER = 'REGISTER';
// // LOGIN
// export const LOGIN = 'LOGIN';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';
// ALL COMPONENTS
export const FETCH_REPLATE_START = 'FETCH_REPLATE_START';
export const FETCH_REPLATE_SUCCESS = 'FETCH_REPLATE_SUCCESS';
export const FETCH_REPLATE_FAILURE = 'FETCH_REPLATE_FAILURE';
// // UPDATE
// export const UPDATE = 'UPDATE';
// // DELETE
// export const DELETE = 'DELETE';

const URL = `https://background-check.herokuapp.com`;

// const id = `:id`;

export const getData = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .get(`${URL}/`)
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })   
        })
        .catch(err => {
            console.log(err.res);
            dispatch({ type: FETCH_REPLATE_FAILURE, payload: err.res });
        }); 
};

export const getUser = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .get(`${URL}/users`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

export const postUser = () => dispatch => {
    dispatch({ type: FETCH_REPLATE_START });
    axios
        .post(`${URL}/users`)
        .then(res => 
            dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));
};

// export const updateUser = () => dispatch => {
//     dispatch({ type: UPDATE });
//     axios
//         .put(`${URL}/users/${id}`)
//         .then(res => 
//             dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
//         )
//         .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));    
// };

// export const deleteUser = (id) => dispatch => {
//     dispatch({ type: DELETE });
//     axios
//         .delete(`${URL}/users/${id}`)
//         .then(res =>
//             dispatch({ type: FETCH_REPLATE_SUCCESS, payload: res.data })
//         )
//         .catch(err => dispatch({ type: FETCH_REPLATE_FAILURE, payload: err }));    
// };