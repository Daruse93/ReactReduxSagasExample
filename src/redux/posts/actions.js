export const getPosts = () => ({
    type: 'POSTS_GET',
});

export const addPost = (payload) => ({
    type: 'POSTS_ADD',
    payload,
});

export const deletePost = (payload) => ({
    type: 'POSTS_DELETE',
    payload,
});
