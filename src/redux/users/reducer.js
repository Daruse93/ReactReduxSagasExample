const users = (state = [], action) => {
    switch (action.type) {
        case 'USERS_GET_SUCCESS':
            return [
                ...state,
                ...action.payload,
            ];
        default:
            return state
    }
}

export default users;
