const posts = (state = [], action) => {
    switch (action.type) {
        case 'POSTS_GET_SUCCESS':
            return [
                ...state,
                ...action.payload.filter(item => item.id <= 3),
            ];
        case 'POSTS_ADD':
            return [
                ...state,
                action.payload,
            ];
        case 'POSTS_DELETE':
            return state.filter(item => item.id !== action.payload);
        default:
            return state
    }
}

export default posts;
