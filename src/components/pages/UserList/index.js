import React, {useEffect} from "react";

import {
    // connect,
    useDispatch,
    useSelector
} from "react-redux";

import { getUsers } from "../../../redux/users/actions";

import BaseContainer from "../../containers/BaseContainer";


const UserList = ({
    // getUsers,
    // users,
}) => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        //getUsers();
        dispatch(getUsers());
    }, [getUsers])

    return (
        <BaseContainer>
           <h2>Тут будут юзеры</h2>
            {users && users.map(item => (
                <div>{item.name}</div>
            ))}
        </BaseContainer>
    )
}

// const mapStateToProps = (state) => ({
//     users: state.users
// })

// const mapDispatchToProps = (dispatch) => ({
//     getUsers: () => dispatch(getUsers()),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(UserList);
export default UserList;
