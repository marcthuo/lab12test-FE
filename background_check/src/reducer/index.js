import { 
    // REGISTER, 
    // LOGIN, 
    FETCH_REPLATE_START, 
    FETCH_REPLATE_SUCCESS, 
    FETCH_REPLATE_FAILURE, 
    // UPDATE,
    // DELETE,
} from '../actions';

const initialState = {
    users: [],
    // inRegister: false,
    fetchingData: false,
    // updatingData: false,
    // deletingData: false,
    // loggingIn: false,
    err: ''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // case REGISTER: 
        //     return {
        //         ...state,
        //         inRegister: true,
        //         ...action.payload
        //     };
        // case LOGIN:
        //     return {
        //         ...state,
        //         loggingIn: true,
        //         err: ''
        //     };
        case FETCH_REPLATE_START:
            return {
                ...state,
                err: '',
                fetchingData: true
            };
        case FETCH_REPLATE_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                err: '',
                fetchingData: false,
                users: action.payload
            };
        case FETCH_REPLATE_FAILURE:
            return {
                ...state,
                err: action.payload,
                fetchingData: false
            };    
        // case UPDATE:
        //     return {
        //         ...state,
        //         err: '',
        //         fetchingData: false,
        //         updatingData: true,
        //         volunteers: [...state.replate]
        //     }; 
        // case DELETE:
        //     return {
        //         ...state,
        //         err: '',
        //         fetchingData: false,
        //         deletingData: true,
        //         replates: [...state.replate]
        //     };       
        default:
            return state;
    }    
};

export default rootReducer;