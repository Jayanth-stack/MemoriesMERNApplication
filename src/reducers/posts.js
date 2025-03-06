const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
        return {
            ...state,
            posts: action.payload,
        };
        case 'CREATE_POST':
        return {
            ...state,
            posts: [...state.posts, action.payload],
        };
        default:
        return state;
    }
}