
import ServerRequest from '../ServerRequest';

const UserApi = {
    /**
     * Получение данных о устройствах.
     * @return {Promise}
     */
    getUsers() {
        return ServerRequest.get(`/users`);
    },
};

export default UserApi;
