
import ServerRequest from '../ServerRequest';

const PostApi = {
    /**
     * Получение данных о устройствах.
     * @return {Promise}
     */
    getPosts(payload) {
        return ServerRequest.get(`/posts`);
    },
};

export default PostApi;
